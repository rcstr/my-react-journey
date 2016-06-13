"use strict";

import React from 'react';

import NavLink from './NavLink';

const Nav = (props) => {
  return (
    <ul className="dropdown menu">
      <NavLink to="/" location={props.location}>Get Weather</NavLink>
      <NavLink to="/about" location={props.location}>About</NavLink>
      <NavLink to="/examples" location={props.location}>Examples</NavLink>
    </ul>
  );
};
