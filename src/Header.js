import React from 'react'
import './styles/header.css'
import logo from './logo.png'

function Header() {
  return (
    <header>
        <div className='logo-holder'>
          <img className='logo-img' src={logo} alt='Game Universe' width='150px' height='150px' />
          <h2 className='logo-name'>Game Universe</h2>
        </div>
        <nav className='navigation'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Services</a>
            <a href='#'>Contact</a>
            <button className='btnLogin-popup'>Login</button>
        </nav>
    </header>
  )
}

export default Header