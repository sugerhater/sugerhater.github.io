import "./style.css";
import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  // const location = useLocation();

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)
  return (
    <header class="container">
      <nav class="navbar navbar-expand-sm navbar-light bg-light w-100">
        <button class="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={()=>handleNavCollapse}>
          <span class="navbar-toggler-icon"></span>
        </button>


        <div class={`${isNavCollapsed ? 'collapse' : ''} justify-content-end navbar-collapse`} id="navbarNavAltMarkup">
          <div class="navbar-nav mr-auto mt-1 mt-lg-0">
            <a class="nav-link" href="/">Home</a>
            <a class="nav-link" href="#about">About</a>
            <a class="nav-link" href="#portfolio">Porfolio</a>
            <a class="nav-link" href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;