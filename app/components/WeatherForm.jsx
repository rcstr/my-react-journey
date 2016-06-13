import React from 'react';

import RowColumn from 'RowColumn';

export default class WeatherForm extends React.Component {
  /**
   * handles form submit
   *
   * @param e Event
   */
  onFormSubmit(e) {
    e.preventDefault();

    let location = this.refs.location.value;

    if (location.length) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }

  render() {
    return (
      <form onSubmit={::this.onFormSubmit}>
        <RowColumn>
          <input type="text" ref="location"/>
        </RowColumn>
        <RowColumn>
          <button type="submit" className="button">Get Weather</button>
        </RowColumn>
      </form>
    );
  }
}
