import React, { useRef } from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { AdminRouteNames } from './route-constant'


const AdminRoutes = () => {
    const authRef = useRef(localStorage.getItem('isLogin') || false)
    const location = useLocation()
    return (
        authRef.current ? <Outlet /> : <Navigate replace to={AdminRouteNames.Login}  state={{from: location}}/>
    )
}

export default AdminRoutes