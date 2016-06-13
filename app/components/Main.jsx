"use strict";

import React from 'react';

import Header from './Header';

const Main = (props) => {
  return (
    <div>
      <Header location={props.location}/>
      <div className="row">
        {props.children}
      </div>
    </div>
  );
};

export default Main;
