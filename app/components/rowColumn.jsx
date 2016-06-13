import React from 'react';

const RowColumn = (props) => {
  return (<div className="row columns">{props.children}</div>);
};

export default RowColumn;
