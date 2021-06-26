import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory} from 'react-router';
import LoadingGif from '../../images/loading.gif'

export default function HomePost() {
    const history = useHistory();

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://aqueous-forest-80856.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setPosts(data))
        
    }, [posts]);

    return (
        <div>
            {
              posts.map(post => { 
                  return ( 
                      <>
                      {
                posts.length === 0 && <div  style={{   position: "absolute", left: "50%", top: "150%", transform: "translate(-50%,-50%)"}}>
                   <img style={{width:"150px"}} src={LoadingGif} alt="LoadingGif"/>
               </div>
             }
                <div className="bg-white mb-2"> 
                   <div className="blog__container">
                     <div className="blog__img">
                     <Link to={`blogs/${post._id}`}>
                       <img src={post.imageURL} alt="blog_image" className="img-fluid" />
                     </Link>    
                     </div>
                        <div className="blog__header text-center">
                            <span className="blog__Category">{post.category}</span>
                            <h1 className="blog__title">
                            <Link to={`blogs/${post._id}`} className=" nav-link">
                               {post.btitle}
                            </Link>
                            </h1>
                            <span className="posted__by">posted on {post.date} by {post.author}</span>
                        </div>
                    </div> 
                    <div className="post_Content px-4">
                        <p>{post.shortDescription}....</p>
                    </div>
                     <div onClick={() => history.push(`/blogs/${post._id}`)} className="d-flex justify-content-center nav-link">
                        <button className="btn btn-dark">Read More>></button>
                     </div>

                  </div>
                  </>
                  )
              })
            }
        </div>
    )
}
