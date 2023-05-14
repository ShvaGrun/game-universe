import React, { useState } from 'react'
import '../styles/header_auth.css'
import logo from '../img/logo.png'
import avatar from '../img/avatar.jpg'

function Header({handleLoginPopupClick}) {
  return (
    <header>
        <div className='logo-holder'>
          <img className='logo-img' src={logo} alt='Game Universe' width='120px' height='120px' />
          <h2 className='logo-name'>Game Universe</h2>
        </div>
        <nav className='navigation'>
            <div className="nav_bar">
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Services</a>
                <a href='#'>Contact</a>
            </div>
        </nav>
        <div className="user_block">
            <div className="user_info">
                <p className='user_name'>Andriy</p>
                <a className='logout' href='#'>Logout</a>
            </div>
            <img src={avatar} alt="Avatar" width='64px' height='64px' />
        </div>
    </header>
  )
  
}

export default Header