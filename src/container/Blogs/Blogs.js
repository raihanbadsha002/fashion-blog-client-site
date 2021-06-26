import React from 'react'
import NavBar from '../../Components/NavBar/NavBar';
import BlogPost from '../../Components/BlogPost/BlogPost';
import SideBar from '../../Components/SideBar/SideBar';
import '../Blogs/style.css';
import Footer from '../Footer/Footer'
import { useParams } from 'react-router-dom';


export default function Blogs() {
    let{ id } = useParams();
    return (
        <>
         <nav>
          <NavBar/>
         </nav>     
          <main className="blog__section">
             <div className="container">
                 <div className="row d-flex justify-content-between">
                     <div className="col-md-8">
                     <div className="card">
                         <BlogPost postId={id}/>
                     </div>
                     
                     </div>
                     <div className="col-md-4"> 
                       <div className="card" style={{backgroundColor: "#191919"}}>
                           <SideBar/>
                       </div> 
                     </div>
                 </div>
             </div>
          </main>
          <footer>
            <Footer/>
          </footer>
        </>
             
         
    )
}
