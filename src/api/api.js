import * as axios from 'axios';

import ServerData from '../utils/ServerData';
import { API_KEY_GEO, API_KEY_WEATHER } from '../utils/WeatherApiKey';

const weatherAPI = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/'
});

const geolocationAPI = axios.create({
  baseURL: 'https://geocode-maps.yandex.ru/1.x/'
});

export const getWeather = ({lat, lon}) => {
  return weatherAPI.get('weather', {params: {
    lat, lon,
    APPID: API_KEY_WEATHER,
    units: 'metric',
    lang: 'ru'
  }});
};

export const getGeolocation = ({lat, lon}) => {
  return geolocationAPI.get('', {params: {
    geocode: lon + ',' + lat,
    apikey: API_KEY_GEO,
    format: 'json',
    kind: 'street',
    lang: 'ru_RU'
  }});
};

//эмитация запроса
export const updateDesiredTemperature = (roomName, temperature) => {
  return new Promise((resolve, reject) => {

    const roomIndex = ServerData.roomsData.findIndex((room) => room.name === roomName);

    if (roomIndex === -1) {
      reject(new Error(`комната с именем "${roomName}" не найдена`));
      return;
    }

    ServerData.roomsData[roomIndex].temperature.desired = temperature;
    resolve(1);
  })
}

//эмитация запроса
export const getRooms = () => {
  return new Promise((resolve, reject) => {
    resolve(ServerData.roomsData);
  })
}