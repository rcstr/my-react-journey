import React from 'react';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

export default class Weather extends React.Component {
  render() {
    return (
      <section className="weather small-12 medium-6 small-centered columns">
        <WeatherForm />
        <WeatherMessage />
      </section>
    );
  }
}
