import React from 'react';

import Nav from './Nav';

export default class Header extends React.Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-title">
                    <strong>React Weather</strong>
                </div>
                <div className="top-bar-left">
                    <Nav location={this.props.location} />
                </div>

            </div>
        );
    }
}