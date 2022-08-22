import React from 'react'
import Logo from '../assets/images/logo.png'
import Dash from '../assets/images/ico_dash.svg'
import rightIcon from '../assets/images/chevron-right-left.svg'
import superAdmin from '../assets/images/ico-superadmin.svg'
import userIcon from '../assets/images/ico-user-mgmt.svg'
import settingsIcon from '../assets/images/ico-settings.svg'
import userProfile from '../assets/images/userprofile.svg'
import AddIcon from '../assets/images/add.svg'
import { Link,useNavigate } from 'react-router-dom'
import { AdminRouteNames } from '../approutes/route-constant'

const Sublist = () => {

    const navigate = useNavigate()
    const handleOut=()=>{
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
                            <li><Link to={AdminRouteNames.SubscriptionList} style={{ textDecoration: 'none' }}>Subscriptions</Link></li>
                            <li  class="active" ><Link to={AdminRouteNames.Sublist} style={{ textDecoration: 'none' }}>Subscription List</Link></li>
                            <li ><Link to={AdminRouteNames.Application} style={{ textDecoration: 'none' }}>Settings</Link></li>
                        </ul>
                    </div>
        
                    <div class="">
                        <div class="dropdown show">
                            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={userProfile} alt="userprofile" />
                            </a>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" onClick={handleOut}>Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="content-area d-flex">
                <div class="left-menu">
                    <ul>
                        <li><a href="#"><img src={rightIcon} alt="chevron" /></a></li>
                        <li><a href="#"><img src={Dash} alt="Dashboard" /></a></li>
                        <li><a href="#"><img src={superAdmin} alt="Super admin" /></a></li>
                        <li><a href="#"><img src={userIcon} alt="User management" /></a></li>
                        <li><a href="#"><img src={settingsIcon} alt="Settings" /></a></li>
                    </ul>
                </div>
                <div class="content-area-blk w-100">
                    <div class="title-bar d-flex justify-content-between">
                        <h1>Subcription List</h1>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Sublist