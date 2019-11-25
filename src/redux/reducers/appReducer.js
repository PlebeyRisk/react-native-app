import { SET_GEOLOCATION, SET_WEATHER } from "../actions/actionTypes";

const initialState = {
  weather: null,
  geolocation: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GEOLOCATION:
      return {...state,
        geolocation: action.geolocation
      };
    case SET_WEATHER:
      return {...state,
        weather: action.weather
      };
    default:
      return state;
  }
};