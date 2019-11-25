import {
  SET_ACTIVE_ROOM,
  SET_CURRENT_TEMPERATURE,
  SET_DESIRED_TEMPERATURE,
  SET_WEATHER, SET_ROOMS,
  SET_GEOLOCATION,
  SET_IS_UPDATING_DESIRE_TEMPERATURE } from './actionTypes';

export const setRooms = (rooms) => ({type: SET_ROOMS, rooms});
export const setActiveRoom = (room) => ({type: SET_ACTIVE_ROOM, room});
export const setCurrentTemperature = (temperature) => ({type: SET_CURRENT_TEMPERATURE, temperature});
export const setDesiredTemperature = (temperature) => ({type: SET_DESIRED_TEMPERATURE, temperature});
export const setIsUpdatingDesireTemperature = (status) => ({type: SET_IS_UPDATING_DESIRE_TEMPERATURE, status});

export const setGeolocation = (geolocation) => ({type: SET_GEOLOCATION, geolocation});
export const setWeather = (weather) => ({type: SET_WEATHER, weather});

