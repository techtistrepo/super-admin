import React from 'react'
import { Link } from 'react-router-dom'
import {AdminRouteNames} from '../approutes/route-constant'

const AdminForgotPassword = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center signin-content">
                <div className="signin-box">
                    <div className="signin-title">
                        <h2>Admin Panel</h2>
                        <h1>Forgot Password</h1>
                    </div>

                    <form action="" className="signin-form">
                        <p className="mb-30">
                            <label for="signinemail">Email</label>
                            <input type="text" name="signinemail" id="signinemail" placeholder="Enter your email" />
                        </p>

                        <p className="mb-30">
                            <button className="btn btn-blue w-100">Reset Password</button>
                        </p>

                        <p className="text-center">
                            <b><Link to={AdminRouteNames.Login} style={{ textDecoration: 'none' }}>Sign In</Link></b>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminForgotPassword