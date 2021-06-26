import React, { createContext, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './container/Home/Home'
import Contact from './container/ContactUs/Contact';
import Blogs from './container/Blogs/Blogs';
import AddBlogs from './container/Dashboard/AddBlogs/AddBlogs';
import ManageBlog from './container/Dashboard/ManageBlog/ManageBlog';
import Admin from './container/Dashboard/Admin/Admin';
import Login from './container/Login/Login/Login';
import PrivateRoute from './container/Login/PrivateRoute/PrivateRoute'

export const UserContext = createContext();

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
    <Switch>
         <Route exact path="/">
           <Home/>
         </Route>
         <PrivateRoute path="/addBlogs">
           <AddBlogs/>
         </PrivateRoute>
         <Route path="/manageBlogs">
           <ManageBlog/>
         </Route>
         <Route path="/addAdmin">
           <Admin/>
         </Route>
         <Route path="/contact">
           <Contact/>
         </Route>
         <Route path="/login">
           <Login/>
         </Route>
         <Route path="/blogs/:id">
           <Blogs/>
         </Route>
      </Switch>
   </Router>
   </UserContext.Provider>
  )
}
