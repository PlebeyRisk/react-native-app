const getWeather = (state) => {
  return state.app.weather;
};

const getGeolocation = (state) => {
  return state.app.geolocation;
};

const appSelectors = {
  getWeather,
  getGeolocation
};

export default appSelectors;