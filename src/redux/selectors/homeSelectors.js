const getActiveRoom = (state) => {
  return state.home.activeRoom;
};

const getRooms = (state) => {
  return state.home.rooms;
};

const homeSelectors = {
  getActiveRoom,
  getRooms
};

export default homeSelectors;