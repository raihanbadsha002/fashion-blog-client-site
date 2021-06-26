import React, { useEffect, useState } from 'react'
import DashboardSideBar from '../../../Components/DashboardSideBar/DashboardSideBar'
import ManageBlogsData from '../../../container/Dashboard/ManageBlog/ManageBlogsData'
import LoadingGif from '../../../images/loading.gif'



export default function ManageBlog() {

    const [posts, setPosts] = useState([])

    const fetchBlogList = () => {
        if(!url) {
            return
        }
    }
    const url = 'https://aqueous-forest-80856.herokuapp.com/blogs'
    fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data))

      useEffect(() => {
        fetchBlogList()  
        
    }, []);

    return (
        <section className="container-fluid">
        <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
              <DashboardSideBar/>
            </div>
            <div className="py-4 col-lg-10 col-md-8 col-sm-12 col-12 bg-light  add__blog">
            <div className="d-flex justify-content-around align-items-center text-info p-2 bg-white text-uppercase">
               <h2 className="">Manage Blogs</h2>
               {/* <img style={{width: "40px"}} className="rounded-circle" src={loggedInUser.image} alt=""/> */}
            </div>
            <div className="row d-flex justify-content-center mt-5">
             <div className="col-md-8 bg-white shadow-lg rounded">
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">Blog Title</th>
                    <th scope="col">Post Date</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {
                posts.length === 0 && <div  style={{   position: "absolute", left: "50%", top: "150%", transform: "translate(-50%,-50%)"}}>
                   <img style={{width:"150px"}} src={LoadingGif} alt="LoadingGif"/>
               </div>
             }
            {
               posts.map(post => <ManageBlogsData
               post={post}
               key={post._id}
               fetchBlogList={fetchBlogList}    
               />)
             }
             </tbody>
            </table>
            </div>
            </div>
             
           </div>
                
            </div>

    </section>
    )
}
