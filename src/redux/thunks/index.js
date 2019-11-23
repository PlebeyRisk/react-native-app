import { setDesiredTemperature as setDesiredTemperatureAction,
        setRooms, setActiveRoom, setCurrentTemperature, setGeoTemperature, setRegion } from "../actions";
import { updateDesiredTemperature, getRooms, getGeo } from "../../api/api";

export const setDesiredTemperature = (roomName, temperature) => async dispatch => {
  try {
    const response = await updateDesiredTemperature(roomName, temperature);
    dispatch(setDesiredTemperatureAction(temperature))
  } catch(err) {
    alert(err);
  }
};

export const loadRooms = () => async dispatch => {
  try {
    const response = await getRooms();
    dispatch(setRooms(response));
    dispatch(changeActiveRoom(response[0]));
  } catch(err) {
    alert(err);
  }
};

export const loadGeo = () => async dispatch => {
  try {
    const response = await getGeo();
    dispatch(setGeoTemperature(response.temperature))
    dispatch(setRegion(response.region))
  } catch(err) {
    alert(err);
  }
};

export const changeActiveRoom = (room) => dispatch => {
  dispatch(setActiveRoom(room));
  dispatch(setDesiredTemperatureAction(room.temperature.desired))
  dispatch(setCurrentTemperature(room.temperature.current))
};

