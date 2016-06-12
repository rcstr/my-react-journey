import React from 'react';
import {Link, IndexLink} from 'react-router';
import classNames from 'classnames';

export default class NavLink extends React.Component {
  /**
   * gets url element based on to
   * 
   * @param to
   * @param content
   * @returns {XML}
     */
  getURLElem(to, content) {
    return (to === '/') ? <IndexLink to={to}>{content}</IndexLink> : <Link to={this.props.to}>{content}</Link>;
  }


  /**
   * returns active class name based on to and pathname
   *
   * @param to string
   * @param pathname string
   * @returns ClassNames
     */
  getActiveClassName(to, pathname) {
    return classNames({
      'active': (pathname === to)
    });
  }

  
  render() {
    let activeClassName = this.getActiveClassName(this.props.to, this.props.location.pathname);
    let URL = this.getURLElem(this.props.to, this.props.children);

    return (
      <li className={activeClassName}>
        {URL}
      </li>
    );
  }
}
