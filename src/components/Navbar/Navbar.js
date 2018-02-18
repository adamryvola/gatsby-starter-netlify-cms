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
            <Link to="/">
              <div className="logo">
                <div className="logo-img"></div>
              </div>
            </Link>
            <div className="menu-items">
              <Link to="/" className="menu-item active-item">DOMŮ</Link>
              <Link to="/services" className="menu-item">SLUŽBY</Link>
              <Link to="/reward" className="menu-item">ODMĚNA ADVOKÁTA</Link>
              <Link to="/contacts" className="menu-item">KONTAKTY</Link>
            </div>
          </div>
          <div className="mobile-menu">
            <button id="burger-butt" onClick={e => this.toggleMenu()}>
              <img src={BurgerImg} height="30px"/>
            </button>
            <Link to="/">
              <div className="logo">
                <div className="logo-img"></div>
              </div>
            </Link>
            <div className="menu-items">
              <Link to="/" className="menu-item active-item">DOMŮ</Link><br/>
              <Link to="/services" className="menu-item">SLUŽBY</Link><br/>
              <Link to="/reward" className="menu-item">ODMĚNA ADVOKÁTA</Link><br/>
              <Link to="/contacts" className="menu-item">KONTAKTY</Link><br/>
            </div>
          </div>
        </div>
    )
  }
}
