import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

export default function NavBar() {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
      fetch('https://aqueous-forest-80856.herokuapp.com/isAdmin', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ email: loggedInUser.email })
      }) 
      .then(res => res.json())
      .then(data => setIsAdmin(data));
  }, [])
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top">
                <div className="container">
                 <Link className="navbar-brand" to="/"><span>Fashion@Blog</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link className="nav-link mr-4 my-2 active text-uppercase" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link mr-4 my-2 text-uppercase" to="/blogs/60d63a40c9040a2864cfa8fb">Blogs</Link>
                        </li> 
                         
                        <li className="nav-item">
                        {
                          isAdmin ? <Link className="nav-link mr-4 my-2 text-uppercase" to="/addBlogs">Dashboard</Link> : <Link style={{display: "none"}} className="nav-link mr-4 my-2 text-uppercase" to="/addBlogs">Dashboard</Link>
                        } 
                        </li> 
                          
                        <li className="nav-item">
                          <Link className="nav-link mr-4 my-2 text-uppercase" to="/">ContactUs</Link>
                        </li>      
                        <li className="nav-item">
                          <Link className="btn btn-primary mr-4 my-2 px-4 text-uppercase" to="/login">Login</Link>
                        </li> 
                        <li className="nav-item">
                          <img style={{width: "40px", height: "40px"}} className="rounded-circle mr-4 my-2" src={loggedInUser.image} alt=""/>
                        </li>          
                    </ul> 
                </div>
            </div>
        </nav>
      </div>
    )
}
