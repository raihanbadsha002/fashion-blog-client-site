import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../BlogPost/style.css'


export default function BlogPost(props) {

    const { id } = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        fetch(`https://aqueous-forest-80856.herokuapp.com/blogs/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
        
    }, [id]);
    
    return (
        <>
           <div className="blog__container">
               <div className="blog__header text-center">
                   <span className="blog__Category">{post.category}</span>
                   <h1 className="blog__title">
                       {post.btitle}
                   </h1>
                   <span className="posted__by">posted on {post.date} by {post.author}</span>
               </div>
           </div> 
           <div className="blog__img">
               <img src={post.imageURL} alt="blog_image" className="img-fluid" />
           </div>
           <div className="post_Content px-4">
               <h3>{post.btitle}</h3>
               <p>{post.description}</p>
           </div>
        </>
    )
}
