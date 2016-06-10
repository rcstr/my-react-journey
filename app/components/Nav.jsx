"use strict";

import React from 'react';

import NavLink from './NavLink';

class Nav extends React.Component {
  render() {
    return (
      <ul className="dropdown menu">
        <NavLink to="/" location={this.props.location}>Get Weather</NavLink>
        <NavLink to="/about" location={this.props.location}>About</NavLink>
      </ul>
    );
  }
}

export default Nav;
