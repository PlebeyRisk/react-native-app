import React from 'react';
import { connect } from 'react-redux';

import TemperatureScreen from './TemperatureScreen';
import selectors from '../../../../redux/selectors';
import { setDesiredTemperature } from '../../../../redux/thunks';

const TemperatureScreenContainer = ({ activeRoom, ...props }) => {
  return (
    <TemperatureScreen
      {...props}
      activeRoomName={activeRoom.name}
    />
  );
};

let mapStateToProps = state => {
  const { getActiveRoom, getDesiredTemperature, getCurrentTemperature,
          getIsUpdatingDesireTemperature } = selectors.homeSelectors;
  const { getWeather, getGeolocation } = selectors.appSelectors;
  return {
    activeRoom: getActiveRoom(state),
    desiredTemperature: getDesiredTemperature(state),
    currentTemperature: getCurrentTemperature(state),
    weather: getWeather(state),
    geolocation: getGeolocation(state),
    isUpdatingDesireTemperature: getIsUpdatingDesireTemperature(state)
  };
};

let mapDispatchToProps = {
  setDesiredTemperature
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TemperatureScreenContainer);
