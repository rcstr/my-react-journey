import React from 'react';

export default class WeatherForm extends React.Component {
  render() {
    return (
      <form>
        <div className="row columns">
          <input type="text"/>
        </div>
        <div className="row columns">
          <button type="submit" className="button">Get Weather</button>
        </div>
      </form>
    );
  }
}
