import React from 'react';

const WeatherMessage = (props) => {
  let {temp, location} = props;

  return (
    <h3>It's it {temp} in {location}!</h3>
  );
};

export default WeatherMessage;
