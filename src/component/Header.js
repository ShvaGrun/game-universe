import React, { useState } from 'react'
import '../styles/header.css'
import logo from '../img/logo.png'

function Header({handleLoginPopupClick}) {
  return (
    <header>
        <div className='logo-holder'>
          <img className='logo-img' src={logo} alt='Game Universe' width='120px' height='120px' />
          <h2 className='logo-name'>Game Universe</h2>
        </div>
        <nav className='navigation'>
            <a href='#'>Крамниця</a>
            <a href='#'>About</a>
            <a href='#'>Services</a>
            <a href='#'>Contact</a>
        </nav>
        <button className='btnLogin-popup' onClick={handleLoginPopupClick}>Login</button>
    </header>
  )
  
}

export default Header