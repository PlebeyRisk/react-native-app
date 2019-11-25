import React from 'react';

import { InfoItem } from './InfoItem';
import { WEATHER, WEATHER_ID } from '../constants';

export const Weather = ({ weather, city }) => {
  let icon = 'http://openweathermap.org/img/wn/04d@2x.png';
  let temperature = 0;

  if (weather !== null) {
    temperature = Math.round(weather.main.temp);
    icon = getIconUrl(weather.weather[0].id);

    if (!city) {
      city = weather.name;
    }
  }

  if (!city) {
    city = 'ищу город';
  }

  return <InfoItem title={city} temperature={temperature} icon={icon}/>;
};

function getIconUrl(weatherId) {
  let time = getTimesOfDay();
  let iconName = '04';
  let weatherIdList = WEATHER_ID;

  for (let name in weatherIdList) {
    let id = weatherIdList[name];
    if (weatherId >= id.min && weatherId <= id.max) {
      if (typeof id.name === 'object') {
        for (let key in id.name) {
          if (weatherId.toString() === key) {
            iconName = id.name[weatherId.toString()];
          }
        }
      } else {
        iconName = id.name;
      }
    }
  }

  return 'http://openweathermap.org/img/wn/' + iconName + time + '@2x.png';
}

function getTimesOfDay() {
  let date = new Date();
  let hours  = date.getHours();

  if (hours >= 21 && hours <= 23 || hours >= 0 && hours <= 5) {
    return 'n';
  }

  return 'd';
}