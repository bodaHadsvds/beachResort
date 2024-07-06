import React, { useEffect } from 'react'
import { Navigate ,Outlet } from 'react-router-dom'

const PrivateRoute = ({authenticated }) => {
  
  return authenticated  !==false ? <Outlet/> : <Navigate exact to="/login"/>
}

export default PrivateRoute