import React from 'react'
import Logo from '../assets/images/logo.png'
import Dash from '../assets/images/ico_dash.svg'
import rightIcon from '../assets/images/chevron-right-left.svg'
import superAdmin from '../assets/images/ico-superadmin.svg'
import userIcon from '../assets/images/ico-user-mgmt.svg'
import settingsIcon from '../assets/images/ico-settings.svg'
import userProfile from '../assets/images/userprofile.svg'
import { Link, useNavigate } from 'react-router-dom'
import { AdminRouteNames } from '../approutes/route-constant'
import Application from './settings/Application'

const AdminDashboard = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.clear()
        navigate({ pathname: '/admin/login' }, {
            replace: true
        })
    }

    return (
        <>
            <header class="d-flex">
                <div class="logo">
                    <a><img src={Logo} /></a>
                </div>

                <div class="header-content d-flex justify-content-between align-items-center w-100">
                    <div class="header-title d-flex">
                        <img src={Dash} alt="Dashboard" width="28" height="28" /> <h1>Dashboard</h1>
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

            <div class="content-area d-flex">
                <div class="left-menu">
                    <ul>
                        <li><a href="#"><img src={rightIcon} alt="chevron" /></a></li>
                        <li><a href="#"><img src={Dash} alt="Dashboard" /></a></li>
                        <li><Link to={AdminRouteNames.SubscriptionList} style={{ textDecoration: 'none' }}><img src={superAdmin} alt="Super admin" /></Link></li>
                        <li><a href="#"><img src={userIcon} alt="User management" /></a></li>
                        <li><a href="#"><img src={settingsIcon} alt="Settings" /></a></li>
                    </ul>
                </div>
                <div class="content-area-blk w-100">
                    <div class="row mb-30">
                        <div class="col-sm-4">
                            <div class="white-box">
                                <h1>New Subscriptions</h1>
                                <div class="d-flex dash-widget-blk">
                                    <span class="currency-type">INR</span>
                                    <p class="value">50,000</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-4">
                            <div class="white-box">
                                <h1>New  Registrations</h1>
                                <div class="d-flex dash-widget-blk">
                                    <p class="value">20</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-4">
                            <div class="white-box">
                                <h1>UnSubscribed</h1>
                                <div class="d-flex dash-widget-blk">
                                    <p class="value">10</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-30">
                        <div class="col-sm-3">
                            <div class="white-box">
                                <h1>New Subscriptions</h1>
                                <div class="d-flex dash-widget-blk">
                                    <span class="currency-type">INR</span>
                                    <p class="value">2,00,000</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="white-box">
                                <h1>Net</h1>
                                <div class="d-flex dash-widget-blk">
                                    <span class="currency-type">INR</span>
                                    <p class="value">1,80,000</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="white-box">
                                <h1>Invoice Due</h1>
                                <div class="d-flex dash-widget-blk">
                                    <span class="currency-type">INR</span>
                                    <p class="value">20,000</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="white-box">
                                <h1>Total Sell Returns</h1>
                                <div class="d-flex dash-widget-blk">
                                    <span class="currency-type">INR</span>
                                    <p class="value">1,00,000</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-6">
                            <div class="white-box">
                                <h1>Sales</h1>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="white-box">
                                <h1>Invoice Due</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AdminDashboard