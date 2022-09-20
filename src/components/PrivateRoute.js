import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const PrivateRoute = () => {
    const token = JSON.parse(localStorage.getItem('token'))
  return (
    token?<Outlet/>:<Navigate to="/login"/>
  )
}

export default PrivateRoute