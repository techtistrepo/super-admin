import React from 'react'
import Header from '../../Components/Header'
import userProfile from '../../assets/images/userprofile.svg'
import Logo from '../../assets/images/logo.png';
import Dash from '../../assets/images/ico_dash.svg'
import rightIcon from '../../assets/images/chevron-right-left.svg'
import superAdmin from '../../assets/images/ico-superadmin.svg'
import userIcon from '../../assets/images/ico-user-mgmt.svg'
import settingsIcon from '../../assets/images/ico-settings.svg'
import { Link ,useNavigate} from 'react-router-dom'
import { AdminRouteNames } from '../../approutes/route-constant'

const Email = () => {


    const navigate = useNavigate()
    const handleOut=()=>{
      localStorage.clear()
      navigate({ pathname: '/admin/login' }, {
          replace: true
      })
    }
    return (
        <div>
            {/* <Header /> */}

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
                            <li   ><Link to={AdminRouteNames.Sublist} style={{ textDecoration: 'none' }}>Subscription List</Link></li>
                            <li class="active" ><Link to={AdminRouteNames.Application} style={{ textDecoration: 'none' }}>Settings</Link></li>
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
                    <div className='row  mb-30'>
                        <div class="col-sm-1 title-bar">
                            <h2>Settings</h2>
                        </div>
                        <div class="text-left secondary-menu">
                            <ul>
                                <li ><Link to={AdminRouteNames.Application} style={{ textDecoration: 'none' }}>Application</Link></li>
                                <li class="active"><a href="#" >Email</a></li>
                                <li><Link to={AdminRouteNames.Emailtemp} style={{ textDecoration: 'none' }}>Email Template</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="white-box">
                        <div class="mb-30">
                            <h3>Email</h3>

                            <div class="row mb-16">
                                <div class="col-sm-3">
                                    <label for="hostname">Host <em>*</em></label>
                                    <input type="text" name="hostname" id="hostname" />
                                </div>
                                <div class="col-sm-3">
                                    <label for="portname">Port<em>*</em></label>
                                    <input type="text" name="portname" id="portname" />
                                </div>
                                <div class="col-sm-3">
                                    <label for="Username">Username<em>*</em></label>
                                    <input type="text" name="username" id="username" />
                                </div>
                                <div class="col-sm-3">
                                    <label for="password">Password <em>*</em></label>
                                    <input type="text" name="password" id="password" />
                                </div>
                            </div>

                            <div class="row ">
                                <div class="col-sm-6">
                                    <label for="Addrerss">From Address <em>*</em></label>
                                    <input type="text" name="Addrerss" id="Addrerss" />
                                </div>
                                <div class="col-sm-6">
                                    <label for="fromname">From name <em>*</em></label>
                                    <input type="text" name="fromname" id="fromname" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-area-main-btn">
                        <button class="content-btn">Cancel</button>
                        <button class="content-primary-btn">Create</button>
                    </div>

                </div>

            </div>

        </div>



    )
}

export default Email