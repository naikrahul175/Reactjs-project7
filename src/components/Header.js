import React from 'react'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <header className='Header'>
        <div className="Header-top"> 
           <div className='Header-left'>
             <img src={logo} alt="logo" style={{height:'5vw'}}/>
             </div>
            <div className="Header-right">
                <i className="uil uil-youtube"></i>
                <i className="uil uil-search"></i>
                <i className="uil uil-user"></i>
            </div>
        </div>
        <nav className="Navbar">
            <ul>
                <li>Blockchain Basics</li>
                <li>Blockchain Explainers</li>
                <li>Crypto Gaming</li>
                <li>Videos</li>
                <li>Partner With Us</li>
                <li>About Us</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header

