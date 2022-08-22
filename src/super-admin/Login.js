import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AdminRouteNames } from '../approutes/route-constant'

export const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogin = () => {
        localStorage.setItem('isLogin', true)
        console.log(location.state)
        if (location.state?.from) {
            navigate(location.state.from, {
                replace: true
            })
        }
        else {
            navigate({ pathname: '/admin/dashboard' }, {
                replace: true
            })
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center signin-content">
            <div className="signin-box">
                <p className="signin-welcome">Welcome !</p>

                <div className="signin-title">
                    <h1>Sign in to</h1>
                    <h2>Admin Panel</h2>
                </div>
                <div className="signin-form">
                {/* <form action="" className="signin-form"> */}
                <p className="mb-30">
                    <label for="signinemail">Email</label>
                    <input type="text" name="signinemail" id="signinemail" placeholder="Enter your email" />
                </p>

                <p className="mb-30">
                    <label for="signinpassword">Password</label>
                    <input type="text" name="signinpassword" id="signinpassword" placeholder="Enter your Password" />
                </p>

                <p className="text-right mb-30">
                    <Link  to={AdminRouteNames.ForgotPassword} style={{ textDecoration: 'none' }}>Forgot Password ?</Link>
                </p>

                <p>
                    <button className="btn btn-blue w-100" onClick={handleLogin}>Login</button>
                </p>
                </div>
                {/* </form> */}
            </div>
        </div>
    )
}

