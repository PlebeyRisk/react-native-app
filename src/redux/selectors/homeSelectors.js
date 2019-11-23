const getActiveRoom = (state) => {
  return state.home.activeRoom;
};

const getRooms = (state) => {
  return state.home.rooms;
};

const getDesiredTemperature = (state) => {
  return state.home.desiredTemperature;
};

const getCurrentTemperature = (state) => {
  return state.home.currentTemperature;
};

const getGeoTemperature = (state) => {
  return state.home.geoTemperature;
};

const getRegion = (state) => {
  return state.home.region;
};

const homeSelectors = {
  getActiveRoom,
  getRooms,
  getDesiredTemperature,
  getCurrentTemperature,
  getGeoTemperature,
  getRegion
};

export default homeSelectors;