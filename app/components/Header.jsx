import React from 'react';

import Nav from './Nav';

const Header = (props) => {
  return (
    <header className="top-bar">
      <div className="top-bar-title">
        <strong>React Weather</strong>
      </div>
      <div>
        <div className="top-bar-left">
          <Nav location={props.location}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
