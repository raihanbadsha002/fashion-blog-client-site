import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Header from '../../Components/Header/Header'
import HomePost from '../../Components/HomePost/HomePost'
import HomeSideBar from './HomeSideBar'
import Footer from '../Footer/Footer'

export default function Home() {
    return (
        <div>
            <NavBar/>
            <Header/>
            <main className="blog__section">
             <div className="container">
                 <div className="row d-flex justify-content-between">
                     <div className="col-md-8">
                     <div className="card" style={{backgroundColor: "#191919"}}>
                        <HomePost/>
                     </div>
                     
                     </div>
                     <div className="col-md-4"> 
                       <div className="card" style={{backgroundColor: "#191919"}}>
                           <HomeSideBar/>
                       </div> 
                     </div>
                 </div>
             </div>
          </main>
          <footer>
            <Footer/>
          </footer>
        </div>
    )
}
