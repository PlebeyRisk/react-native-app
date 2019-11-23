const getActiveRoom = (state) => {
  return state.home.activeRoom;
};

const getRooms = (state) => {
  return state.home.rooms;
};

const getSetTemperature = (state) => {
  return state.home.setTemperature;
};

const getCurrentTemperature = (state) => {
  return state.home.currentTemperature;
};

const getGeoTemperature = (state) => {
  return state.home.geoTemperature;
};

const homeSelectors = {
  getActiveRoom,
  getRooms,
  getSetTemperature,
  getCurrentTemperature,
  getGeoTemperature
};

export default homeSelectors;