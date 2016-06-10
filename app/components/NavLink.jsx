import React from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';

export default class NavLink extends React.Component {
    render() {
        let activeClassName = classNames({
            'active': (this.props.location.pathname === this.props.to)
        });

        return (
            <li className={activeClassName}>
                <Link to={this.props.to}>{this.props.children}</Link>
            </li>
        );
    }
}