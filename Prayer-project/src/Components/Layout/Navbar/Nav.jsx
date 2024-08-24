import React from 'react'
 import { NavLink, Outlet } from 'react-router-dom';
 import '../Navbar/navbar.scss'
 
export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <div className="logo me-4 " >
       <img src="src\Components\imges\logox2.png" alt="" style={{width:"100%",height:'100%'}} />
   </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
      <div className="links">
    <ul>
      <li>
        <NavLink   to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""} >Home</NavLink>
      </li>
      <li>
                <NavLink to="/about" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""} >About</NavLink>
      </li>
      <li>
        <NavLink to="/services"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""} >Services</NavLink>
      </li>
      <li>
        <NavLink to="/donations"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""} >Donations</NavLink>
      </li>
      <li>
        <NavLink to="/blog"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""} >Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contactus"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""} >Contact us</NavLink>
      </li>

    </ul>
    </div>
      
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}



