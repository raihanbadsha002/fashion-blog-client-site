import React from 'react'
import './Header.css'

export default function Header() {
    const submitSearch = (e) => {
        e.preventDefault();
        alert("Searched");
    }
    return (
        <div className="banner__section d-flex justify-content-center align-items-center">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="text-center text-white">
            <h1 style={{fontSize:"3.6rem"}} className="text-capitalize">All in one Fashion Blogs</h1>
            <p style={{fontSize:"1.1rem"}} className="mb-4">If you're looking for a fashion blog that mixes designer with high. <br/> I decided to create a focused space with a single aesthetic all in one..</p>
            <form onSubmit={submitSearch}>
              <input type="text" class="form-control" placeholder="🔎 Search blogs...."/>
            </form>
           
        </div>
        </div>
    </div>
    )
}
