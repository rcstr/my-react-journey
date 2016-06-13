import React from 'react';

export default class WeatherMessage extends React.Component {
  render() {
    let {temp, location} = this.props;

    return (
      <h3>It's it {temp} in {location}!</h3>
    );
  }
}
