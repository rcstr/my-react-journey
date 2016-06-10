"use strict";

import React from 'react';

import Nav from './Nav';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <h2>main component</h2>
            </div>
        );
    }
}

export default Main;