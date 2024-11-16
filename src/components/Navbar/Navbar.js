// src/components/Navbar/Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-left">
        <div className="logo-menu">
          <div className="tooltip">
            <span className="material-symbols-outlined nav-icon menu-icon">menu</span>
            <span className="tooltip-text">Main Menu</span>
          </div>
          <img
            className="logo"
            src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
            alt="Logo"
          />
          <p className="logo-text">Keep</p>
        </div>
        <div className="search-area">
          <form>
            <button type="button">
              <div className="tooltip">
                <span className="material-symbols-outlined search-icon">search</span>
                <span className="tooltip-text">Search</span>
              </div>
            </button>
            <input type="search" placeholder="Search" />
            <button type="button">
              <span className="material-symbols-outlined search-icon">close</span>
            </button>
          </form>
        </div>
      </div>
      <div className="nav-right">
        <div className="icons">
          <div className="tooltip">
            <span className="material-symbols-outlined nav-icon">refresh</span>
            <span className="tooltip-text">Refresh</span>
          </div>
          <div className="tooltip">
            <span className="material-symbols-outlined nav-icon">view_agenda</span>
            <span className="tooltip-text">List View</span>
          </div>
          <div className="tooltip">
            <span className="material-symbols-outlined nav-icon">settings</span>
            <span className="tooltip-text">Settings</span>
          </div>
        </div>
        <div className="apps-profile">
          <div className="tooltip">
            <span className="material-symbols-outlined nav-icon">apps</span>
            <span className="tooltip-text">Apps</span>
          </div>
          <div className="google-profile">
            <img
              className="google-logo"
              src="https://www.google.com/u/0/ac/images/logo-gif?uid=107367971584941740734&service=google_gsuite"
              alt="google logo"
            />
            <span className="material-symbols-outlined nav-icon">account_circle</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

