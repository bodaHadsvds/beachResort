import React from 'react'

import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './footer';
const SharedLayout = ({setAuthanticatied}) => {
  const navigate = useNavigate()
  return (
    <>
        <Navbar setAuthanticatied={setAuthanticatied} navigate={navigate}/>
        <Outlet/> 
        <Footer/>
    </>
  )
}

export default SharedLayout;