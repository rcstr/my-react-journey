"use strict";

import axios from 'axios';

const OPEN_WEATHER_KEY = '';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=' + OPEN_WEATHER_KEY;

/**
 * 
 *
 * @param location
 * @returns {axios.Promise}
 */
function getTemp(location) {
  let encodedLocation = encodeURIComponent(location);
  let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  return axios.get(requestUrl).then((res) => {
    if (res.data.cod && res.data.message) {
      throw new Error(res.data.message);
    } else {
      return res.data.main.temp;
    }
  }, (res) => {
    throw new Error(res.data.message);
  });
}

export default {getTemp};
