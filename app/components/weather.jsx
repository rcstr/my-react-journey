import React from 'react';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from 'openWeatherMap';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    }
  }

  /**
   * handles search state
   *
   * @param location
   */
  handleSearch(location) {
    this.setState({isLoading: true}); // set loading to true
    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, (message) => {
      this.setState({isLoading: false});
    });
  }

  /**
   * gets message component
   *
   * @param data
   * @returns {XML}
   */
  getMessage(data) {
    let {isLoading, location, temp} = data;

    if (isLoading) {
      return <h3>Fetching weather...</h3>;
    } else if (location && temp) {
      return <WeatherMessage temp={temp} location={location}/>;
    }
  }

  render() {
    let message = this.getMessage(this.state);

    return (
      <section className="weather small-12 medium-6 small-centered columns">
        <WeatherForm onSearch={::this.handleSearch}/>
        {message}
      </section>
    );
  }
}
