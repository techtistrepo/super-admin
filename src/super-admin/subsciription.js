import React from 'react'
import Logo from '../assets/images/logo.png'
import Dash from '../assets/images/ico_dash.svg'
import rightIcon from '../assets/images/chevron-right-left.svg'
import superAdmin from '../assets/images/ico-superadmin.svg'
import userIcon from '../assets/images/ico-user-mgmt.svg'
import settingsIcon from '../assets/images/ico-settings.svg'
import userProfile from '../assets/images/userprofile.svg'
import ListIcon from '../assets/images/list.svg'
import {Link, useNavigate } from 'react-router-dom'
import { AdminRouteNames } from '../approutes/route-constant'

const Subscription = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.clear()
        navigate({ pathname: '/admin/login' }, {
            replace: true
        })
    }


    return (
        <>
            <header className="d-flex">
                <div className="logo">
                    <a><img src={Logo} /></a>
                </div>

                <div className="header-content d-flex justify-content-between align-items-center w-100">
                    <div className="header-title d-flex">
                        <img src={superAdmin} alt="Dashboard" width="28" height="28" /> <h1>Super admin</h1>
                    </div>

                    <div className="text-left secondary-menu">
                        <ul>
                            <li className="active"><a href="#">Subscriptions</a></li>
                            <li><a href="#">Subscription List</a></li>
                            <li><Link to={AdminRouteNames.SubscriptionList} style={{ textDecoration: 'none' }}>Settings</Link></li>
                        </ul>
                    </div>

                    <div className="">
                        <div className="dropdown show">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={userProfile} alt="userprofile" />
                            </a>

                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" onClick={handleLogout}>Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="content-area d-flex">
                <div className="left-menu">
                    <ul>
                        <li><a href="#"><img src={rightIcon} alt="chevron" /></a></li>
                        <li><a href="#"><img src={Dash} alt="Dashboard" /></a></li>
                        <li><a href="#"><img src={superAdmin} alt="Super admin" /></a></li>
                        <li><a href="#"><img src={userIcon} alt="User management" /></a></li>
                        <li><a href="#"><img src={settingsIcon} alt="Settings" /></a></li>
                    </ul>
                </div>
                <div className="content-area-blk w-100">
                    <div className="title-bar d-flex justify-content-between mb-30">
                        <h1>Subscriptions</h1>
                        <button className="btn btn-blue"> <img src={ListIcon} alt="Add" /> <span>List</span></button>
                    </div>

                    <div className="white-box">
                        <div className="mb-30">
                            <h3>General</h3>

                            <div className="row mb-16">
                                <div className="col-sm-3">
                                    <label for="subname">Name <em>*</em></label>
                                    <input type="text" name="subname" id="subname" />
                                </div>
                                <div className="col-sm-3">
                                    <label for="activeusers">Number of active users <em>*</em></label>
                                    <input type="text" name="activeusers" id="activeusers" />
                                </div>
                                <div className="col-sm-3">
                                    <label for="priceinterval">Price Interval <em>*</em></label>
                                    <input type="text" name="priceinterval" id="priceinterval" />
                                </div>
                                <div className="col-sm-3">
                                    <label for="trialdays">Trial Days <em>*</em></label>
                                    <input type="text" name="trialdays" id="trialdays" />
                                </div>
                            </div>

                            <div className="row ">
                                <div className="col-sm-3">
                                    <label for="price">Price <em>*</em> (INR)</label>
                                    <input type="text" name="price" id="price" />
                                </div>

                                <div className="col-sm-6">
                                    <label for="subname">Price <em>*</em> (INR)</label>
                                    <textarea name="" id="" rows="5"></textarea>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3>Modules (For the user Website)</h3>
                        </div>
                    </div>

                    <div className="content-area-main-btn">
                        <button className="content-btn">Cancel</button>
                        <button className="content-primary-btn">Create</button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Subscription