import React from 'react'
import DashboardSideBar from '../../../Components/DashboardSideBar/DashboardSideBar'
import AdminForm from '../../../container/Dashboard/Admin/AdminForm'

export default function Admin() {
    return (
        <section className="container-fluid">
        <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
              <DashboardSideBar/>
            </div>
            <div className="py-4 col-lg-10 col-md-8 col-sm-12 col-12 bg-light  add__blog" >
            <div className="d-flex justify-content-around align-items-center text-info p-2 bg-white text-uppercase">
               <h2 className="">Admin</h2>
               {/* <img style={{width: "40px"}} className="rounded-circle" src={loggedInUser.image} alt=""/> */}
            </div>
               <div className="row">
                   <AdminForm/>
               </div>
                
            </div>
                
            </div>

    </section>
    )
}
