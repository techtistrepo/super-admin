import React from 'react'
import superAdmin from '../assets/images/ico-superadmin.svg'
import userProfile from '../assets/images/userprofile.svg'
import Logo from '../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'


const Header = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.clear()
        navigate({ pathname: '/admin/login' }, {
            replace: true
        })
    }


  return (
    <div>
        <header class="d-flex">
                <div class="logo">
                    <a><img src={Logo} /></a>
                </div>

                <div class="header-content d-flex justify-content-between align-items-center w-100">
                    <div class="header-title d-flex">
                        <img src={superAdmin} alt="Dashboard" width="28" height="28" /> <h1>Super admin</h1>
                    </div>

                    <div class="text-left secondary-menu">
                        <ul>
                            <li class="active"><a href="#">Subscriptions</a></li>
                            <li><a href="#">Subscription List</a></li>
                            <li><a href="#">Settings</a></li>
                        </ul>
                    </div>
        
                    <div class="">
                        <div class="dropdown show">
                            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={userProfile} alt="userprofile" />
                            </a>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" onClick={handleLogout}>Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    </div>
  )
}

export default Header