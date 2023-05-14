import React, { useState } from 'react'
import '../styles/login.css'
import axios from 'axios'

function Login({handleClosePopupClick, isOpenPopup}) {
    const [isLoginActive, setIsLoginActive] = useState(true);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRegister, setShowPasswordRegister] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/login', {email,password})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    const handleLoginLinkClick = () => {
        setIsLoginActive(!isLoginActive)
    }

    const onCloseClick = () => {
        handleClosePopupClick()
        setIsLoginActive(true)
    }
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowPasswordRegister = () => {
        setShowPasswordRegister(!showPasswordRegister);
    };

    return (
        <div className='wrap'>
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
                        <input type="email" onChange={e => setEmail(e.target.value)} required/>
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <span className='icon'>
                            <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input type={showPassword ? 'text' : 'password'} onChange={e => setPassword(e.target.value)} required/>
                        <label>Password</label>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" onClick={toggleShowPassword}/>Show password
                        </label>
                        <a href="#">Forgot Password</a>
                    </div>
                    <button type='submit' className='btn' onClick={handleSubmit}>Login</button>
                    <div className="login-register">
                        <p className='transition-block'>
                            Don`t have an account?
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
                        <input type={showPasswordRegister ? 'text' : 'password'} required/>
                        <label>Password</label>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox"/>I agree to the terms & conditions</label>
                    </div>
                    <div className='show-password'>
                        <label>
                            <input type="checkbox" onClick={toggleShowPasswordRegister}/>Show password
                        </label>
                    </div>
                    <button type='submit' className='btn'>Register</button>
                    <div className="login-register">
                        <p className='transition-block'>
                            Already have an account?
                            <a href="#" className='login-link' onClick={handleLoginLinkClick}>Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login