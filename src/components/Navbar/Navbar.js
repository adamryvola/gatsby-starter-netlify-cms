import React, { Component } from 'react';
import Link from 'gatsby-link';
import BurgerImg from './burger.png';

export default class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
      if (!this.state.opened) {
          document.getElementsByClassName("menu-items")[1].style.display = "block";
          document.getElementsByClassName("menu-wrapper")[0].style.height = "180px";
      } else {
          document.getElementsByClassName("menu-items")[1].style.display = "none";
          document.getElementsByClassName("menu-wrapper")[0].style.height = "80px";
      }
      this.setState({
          opened: !this.state.opened,
      });
  }

  render() {
    return (
        <div className="menu-wrapper">
          <div className="menu">
            <a href="./index.html">
              <div className="logo">
                <div className="logo-img"></div>
              </div>
            </a>
            <div className="menu-items">
              <a href="/" className="menu-item active-item">DOMŮ</a>
              <a href="/services" className="menu-item">SLUŽBY</a>
              <a href="/reward" className="menu-item">ODMĚNA ADVOKÁTA</a>
              <a href="/contacts" className="menu-item">KONTAKTY</a>
            </div>
          </div>
          <div className="mobile-menu">
            <button id="burger-butt" onClick={e => this.toggleMenu()}>
              <img src={BurgerImg} height="30px"/>
            </button>
            <a href="./index.html">
              <div className="logo">
                <div className="logo-img"></div>
              </div>
            </a>
            <div className="menu-items">
              <a href="/" className="menu-item active-item">DOMŮ</a><br/>
              <a href="/services" className="menu-item">SLUŽBY</a><br/>
              <a href="/reward" className="menu-item">ODMĚNA ADVOKÁTA</a><br/>
              <a href="/contacts" className="menu-item">KONTAKTY</a><br/>
            </div>
          </div>
        </div>
    )
  }
}
