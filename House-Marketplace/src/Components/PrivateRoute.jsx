import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UseAuthStatus } from '../hooks/UseAuthStatus'
import Spinner from './Spinner'
const PrivateRoute = () => {
const {loggedIn, checkStatus} = UseAuthStatus()
if(checkStatus){
    return <Spinner/>
}

  return loggedIn ? <Outlet/> : <Navigate to='/signin'/>
}

export default PrivateRoute