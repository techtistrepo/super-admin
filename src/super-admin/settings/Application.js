import React, { useRef } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Dropdown from 'react-bootstrap/Dropdown';
import Pluss from '../../assets/images/Plus.svg'
import Logo from '../../assets/images/logo.png';
import Dash from '../../assets/images/ico_dash.svg'
import rightIcon from '../../assets/images/chevron-right-left.svg'
import superAdmin from '../../assets/images/ico-superadmin.svg'
import userIcon from '../../assets/images/ico-user-mgmt.svg'
import settingsIcon from '../../assets/images/ico-settings.svg'
import userProfile from '../../assets/images/userprofile.svg'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../Components/Header';
import { AdminRouteNames } from '../../approutes/route-constant'
import Select from 'react-select'


const Application = () => {

  const fileRef = useRef(null)

  const handleClick = () => {
    fileRef.current.click()
  }

  const navigate = useNavigate()
  const handleEmail = () => {
    navigate({ pathname: AdminRouteNames.Email })
  }

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


  const handleLogout = () => {
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
                            <li ><Link to={AdminRouteNames.SubscriptionList} style={{ textDecoration: 'none' }}>Subscriptions</Link></li>
                            <li><Link to={AdminRouteNames.Sublist} style={{ textDecoration: 'none' }}>Subscription List</Link></li>
                            <li class="active"><a href="#">Settings</a></li>
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
                <li class="active"><a href="#">Application</a></li>
                <li><a href="#" onClick={handleEmail}>Email</a></li>
                <li><Link to={AdminRouteNames.Emailtemp} style={{ textDecoration: 'none' }}>Email Template</Link></li>
              </ul>
            </div>
          </div>

          <div class="white-box">
            <div class="mb-30">
              <h3>Application</h3>

              <div class="row mb-16">
                <div class="col-sm-3">
                  <label for="subname">App Name <em>*</em></label>
                  <input type="text" name="subname" id="subname" />
                </div>
                <div class="col-sm-3">
                  <label for="activeusers">App Title <em>*</em></label>
                  <input type="text" name="activeusers" id="activeusers" />
                </div>
                <div class="col-sm-3">
                  <label for="priceinterval">Email <em>*</em></label>
                  <input type="text" name="priceinterval" id="priceinterval" />
                </div>
                <div class="col-sm-3">
                  <label for="fromname">Currency <em>*</em></label>
                  <Select options={options} />
                </div>
              </div>

              <div class="row ">
                <div class="col-sm-6">
                  <label for="subname">Address </label>
                  <textarea name="" id="" rows="3"></textarea>
                </div>

                <div class="col-sm-2">
                  <label for="subname">Upload Logo</label>
                  <input type="file" accept=".png, .jpg, .jpeg" ref={fileRef} style={{ display: 'none' }} className='Upload_blk'>
                  </input>
                  <img src={Pluss} className="Upload_img" onClick={handleClick} />
                  {/* <input type="file" name="Upload logo" /> */}
                </div>
              </div>
            </div>
            {/* 
          <div>
            <h3>Modules (For the user Website)</h3>
          </div> */}
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

export default Application;