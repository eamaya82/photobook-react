import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Photobook</a>
        </nav>
      </header>
    );
  }
}
export default Header
