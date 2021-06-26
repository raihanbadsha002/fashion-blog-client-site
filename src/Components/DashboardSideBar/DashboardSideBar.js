import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal, faHome, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './DashboardSideBar.css';

export default function DashboardSideBar() {
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4">
        <Link className="navbar-brand" to="/"><span className="text-white" style={{fontStyle: "italic"}}>Fashion@Blog</span></Link>
        <ul className="list-unstyled">
              <div>
                <li>
                    <Link to="/addBlogs" className="text-white nav-link">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Blogs</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addAdmin" className="text-white nav-link" >
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageBlogs" className="text-white nav-link" >
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Manage Blogs</span>
                    </Link>
                </li>
            </div>
        </ul>
        <div>
            <Link to="/" className="text-white nav-link"><FontAwesomeIcon icon={faHome} /> <span>Home</span></Link>
        </div>
    </div>
    )
}
