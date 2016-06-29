import axios from 'axios';

const API_KEY = '155a3b1ea43baad50689bcce9ae5629e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FEATCH_WEATHER = 'FEATCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},nz`;
  const request = axios.get(url);


  return {
    type: FEATCH_WEATHER,
    payload: request
  };
}
