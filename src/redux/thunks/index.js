import { setDesiredTemperature as setDesiredTemperatureAction,
        setRooms, setActiveRoom, setCurrentTemperature, setWeather,
        setGeolocation, setIsUpdatingDesireTemperature } from "../actions";
import { updateDesiredTemperature, getRooms, getWeather, getGeolocation } from "../../api/api";
import constants from "../../constants";

export const setDesiredTemperature = (roomName, temperature) => async dispatch => {
  try {
    await dispatch(setIsUpdatingDesireTemperature(true));

    const response = await updateDesiredTemperature(roomName, temperature);

    await dispatch(setDesiredTemperatureAction(temperature));
  } catch(err) {
    alert(err);
  } finally {
    dispatch(setIsUpdatingDesireTemperature(false));
  }
};

export const loadRooms = () => async dispatch => {
  try {
    const response = await getRooms();

    dispatch(setRooms(response));
    dispatch(changeActiveRoom(response[response.findIndex((room) => room.name === constants.defaultActiveRoom)]));
  } catch(err) {
    alert(err);
  }
};

export const fetchWeather = (coordinate) => async dispatch => {
  try {
    const response = await getWeather(coordinate);

    dispatch(setWeather(response.data))
  } catch(err) {
    alert('Не удалось получить данные о погоде: ', err);
  }
};

export const fetchGeolocation = (coordinate) => async dispatch => {
  try {
    const response = await getGeolocation(coordinate);

    const results = response.data.response.GeoObjectCollection.featureMember;

    if (results.length === 0) throw new Error('Не удалось определить населенный пункт');

    let addressInfo = results[0].GeoObject.metaDataProperty.GeocoderMetaData.AddressDetails.Country;
    let geolocation = {
      coords: coordinate,
      fullAddress: addressInfo.AddressLine,
      country: addressInfo.CountryName,
      administrativeArea: addressInfo.AdministrativeArea.AdministrativeAreaName,
      city: addressInfo.AdministrativeArea.Locality.LocalityName,
      street: addressInfo.AdministrativeArea.Locality.Thoroughfare.ThoroughfareName
    }

    dispatch(setGeolocation(geolocation))
  } catch(err) {
    alert(err);
  }
};

export const changeActiveRoom = (room) => dispatch => {
  dispatch(setActiveRoom(room));
  dispatch(setDesiredTemperatureAction(room.temperature.desired))
  dispatch(setCurrentTemperature(room.temperature.current))
};

export const changeGeolocation = (geolocation) => dispatch => {
  dispatch(fetchGeolocation({ lat: geolocation.coords.latitude, lon: geolocation.coords.longitude }));
  dispatch(fetchWeather({lat: geolocation.coords.latitude, lon: geolocation.coords.longitude}));
};


