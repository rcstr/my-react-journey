import React from 'react';

export default class RowColumn extends React.Component {
  render() {
    return (<div className="row columns">{this.props.chidren}</div>);
  }
}
