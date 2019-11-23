import { SET_ACTIVE_ROOM, SET_CURRENT_TEMPERATURE, SET_DESIRED_TEMPERATURE,
        SET_GEO_TEMPERATURE, SET_ROOMS, SET_REGION } from './actionTypes';

export const setRooms = (rooms) => ({type: SET_ROOMS, rooms});
export const setActiveRoom = (room) => ({type: SET_ACTIVE_ROOM, room});

export const setCurrentTemperature = (temperature) => ({type: SET_CURRENT_TEMPERATURE, temperature});
export const setDesiredTemperature = (temperature) => ({type: SET_DESIRED_TEMPERATURE, temperature});
export const setGeoTemperature = (temperature) => ({type: SET_GEO_TEMPERATURE, temperature});

export const setRegion = (region) => ({type: SET_REGION, region});

