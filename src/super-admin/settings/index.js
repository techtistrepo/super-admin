import React from 'react'
import Logo from '../../assets/images/logo.png';
import Dash from '../../assets/images/ico_dash.svg'
import rightIcon from '../../assets/images/chevron-right-left.svg'
import superAdmin from '../../assets/images/ico-superadmin.svg'
import userIcon from '../../assets/images/ico-user-mgmt.svg'
import settingsIcon from '../../assets/images/ico-settings.svg'
import userProfile from '../../assets/images/userprofile.svg'
import {Link, useNavigate } from 'react-router-dom'
import { AdminRouteNames } from '../../approutes/route-constant'


// import AddIcon from '../../assets/images/add.svg'

const Settings = () => {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate({ pathname: AdminRouteNames.Application })
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
              <li class="active"><a href="#" >Subscriptions</a></li>
              <li><a href="#">Subscription List</a></li>
              <li><Link to={AdminRouteNames.Application} style={{ textDecoration: 'none' }}>Settings</Link></li>
            </ul>
          </div>  

          <div class="">
            <div class="dropdown show">
              <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={userProfile} alt="userprofile" />
              </a>

              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" >Logout</a>
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
          <div className='row  mb-30'>
            <div class="col-sm-1 title-bar">
              <h2>Settings</h2>
            </div>
            <div class="text-left secondary-menu">
              <ul>
                <li class="active"><a href="#" onClick={handleClick}>Application</a></li>
                <li><a href="#">Email</a></li>
                <li><a href="#">Email Template</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </div>
  )

}

export default Settings