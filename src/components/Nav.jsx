import React from 'react'
import logo from '../images/logo/logo.png'

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Menu</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Health Box</a>
            </li>


            <a class="navbar-brand" href="#">    
                <img src={logo} alt="Logo" width="150"/>
            </a>

            <li class="nav-item">
                <a class="nav-link" href="#">Order Online</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"> 9808171506 / 9802008571</a>
            </li>
          </ul>
        </div>
    </div>
</nav>
  )
}

export default Nav