import React from 'react';
import Link from 'gatsby-link';

const Navbar = () => (
    <div className="menu-wrapper">
      <div className="menu">
        <a href="./index.html">
          <div className="logo">
            <div className="logo-img"></div>
          </div>
        </a>
        <div className="menu-items">
          <a href="index.html" className="menu-item active-item">DOMŮ</a>
          <a href="services.html" className="menu-item">SLUŽBY</a>
          <a href="reward.html" className="menu-item">ODMĚNA ADVOKÁTA</a>
          <a href="contacts.html" className="menu-item">KONTAKTY</a>
        </div>
      </div>
      <div className="mobile-menu">
        <button id="burger-butt">
          <img src="images/burger.png" height="30px"/>
        </button>
        <a href="./index.html">
          <div className="logo">
            <div className="logo-img"></div>
          </div>
        </a>
        <div className="menu-items">
          <a href="index.html" className="menu-item active-item">DOMŮ</a><br/>
          <a href="services.html" className="menu-item">SLUŽBY</a><br/>
          <a href="reward.html" className="menu-item">ODMĚNA ADVOKÁTA</a><br/>
          <a href="contacts.html" className="menu-item">KONTAKTY</a><br/>
        </div>
      </div>
    </div>
);

export default Navbar;
