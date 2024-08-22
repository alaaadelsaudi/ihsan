import React from 'react'
import Nav from '../Layout/Navbar/Nav'
import Footer from '../Layout/Footer/Footer'  
import { Outlet } from 'react-router-dom';
export default function Layout() {
  return (
    <>
    <Nav/>
    <Outlet></Outlet>
    <Footer/>
</>
  )
}
