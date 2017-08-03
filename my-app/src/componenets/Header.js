import React, { Component } from 'react';
import Palette from './Palette'

class Header extends Component {
  render(){
    return (
      <nav className="navbar navbar-default shadow white">
        <div className="container">
          <div className="navbar-header">
            <h1 className="brand">CONSTELLATION</h1>
          </div>
            <div className="navbar-right"></div>
        </div>
      </nav>
    )
  }
}

export default Header;
