import React, { useState } from 'react'
import './styles/login.css'

function Login({handleOpenPopupClick, handleClosePopupClick, isOpenPopup}) {
    console.log(isOpenPopup)
    const [isLoginActive, setIsLoginActive] = useState(true);

    const handleLoginLinkClick = () => {
        setIsLoginActive(!isLoginActive)
    }

    const onCloseClick = () => {
        handleClosePopupClick()
        setIsLoginActive(true)
    }

    return (
        <div className={isOpenPopup ? "wrapper popup" + (isLoginActive ? " login" : " register") : "wrapper" }> 
        <span className='icon-close' onClick={onCloseClick}>
            <ion-icon name="close-outline" ></ion-icon>
        </span>
        <div className="form-box login">
            <h2>Login</h2>
            <form action='#'>
                <div className="input-box">
                    <span className='icon'>
                        <ion-icon name="mail"></ion-icon>
                    </span>
                    <input type="email" required/>
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <span className='icon'>
                        <ion-icon name="lock-closed"></ion-icon>
                    </span>
                    <input type="password" required/>
                    <label>Password</label>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox"/>Remember me</label>
                        <a href="#">Forgot Password</a>
                </div>
                <button type='submit' className='btn'>Login</button>
                <div className="login-register">
                    <p>Don`t have an account?
                        <a href="#" className='register-link' onClick={handleLoginLinkClick}>Register</a>
                    </p>
                </div>
            </form>
        </div>

        <div className="form-box register">
            <h2>Registration</h2>
            <form action='#'>
            <div className="input-box">
                    <span className='icon'>
                        <ion-icon name="person"></ion-icon>
                    </span>
                    <input type="text" required/>
                    <label>Username</label>
                </div>
                <div className="input-box">
                    <span className='icon'>
                        <ion-icon name="mail"></ion-icon>
                    </span>
                    <input type="email" required/>
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <span className='icon'>
                        <ion-icon name="lock-closed"></ion-icon>
                    </span>
                    <input type="password" required/>
                    <label>Password</label>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox"/>I agree to the terms & conditions</label>
                </div>
                <button type='submit' className='btn'>Register</button>
                <div className="login-register">
                    <p>Already have an account?
                        <a href="#" className='login-link' onClick={handleLoginLinkClick}>Login</a>
                    </p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login