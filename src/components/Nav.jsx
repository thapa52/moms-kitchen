import React from 'react'
import logo from '../images/logo/logo.png'

const Nav = () => {
  return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav row">
              
              <div className='col col-lg-3'>
                <li class="nav-item">
                    <a class="nav-link" href="/order-online">Order Online</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">9808171506/9802008571</a>
                </li>
                </div>
              <div className='col col-lg-1'></div>
              <div className='col col-lg-8'>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about-us">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/menu">Menu</a>
                </li>
                
                <a class="navbar-brand" href="#">    
                    <img src={logo} alt="Logo" width="150"/>
                </a>
              <li class="nav-item">
                    <a class="nav-link" href="/services">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/health-box">Health Box</a>
                </li>
              </div>

              </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav