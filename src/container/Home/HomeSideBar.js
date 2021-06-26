import React, { useEffect, useState } from 'react';
import profileImage from '../../images/profilePic.jpg';
import { Link } from 'react-router-dom';
 

export default function HomeSideBar() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://aqueous-forest-80856.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setPosts(data))
        
    }, [posts]);

    return (
        <>
        <div className="bg-white mb-4">
          <div className="sidebar_Header">
              <span>About Us</span>
          </div>  
          <div className="sidebar_profileImage">
              <img src={profileImage} alt="profileImage" />
          </div>
          <div className="">
              <p className="personal_Bio">I'm MD. Raihan Badsha, i'm a web designer and front‑end developer. I focused on crafting clean, creative and user‑friendly experiences, I build beautiful and powerful websites with HTML, CSS, Bootstrap and React Js.</p>
          </div>
         </div>
         <div className="bg-white">
            <div className="sidebar_Header">
                <span>Social Network</span>
            </div> 
         </div>
         <div className="bg-white mt-4">
          <div className="sidebar_Header">
              <span>Recent post</span>
          </div>
          <div className="recent_Posts">
              {
                  posts.map(post => {
                      return(
                          <Link key={post._id} to={`blogs/${post._id}`} className="nav-link">
                            <div className="recent_Post">
                                <h3>{post.btitle}</h3>
                                <span>{post.date}</span>
                            </div>
                          </Link>
                        
                      )
                  })
              }
          </div>
         </div>
        </>
    )
}
