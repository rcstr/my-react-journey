"use strict";

import React from 'react';

import Header from './Header';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header location={this.props.location}/>
        <div className="row">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Main;
