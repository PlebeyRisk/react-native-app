import React from 'react';
import { connect } from 'react-redux';

import TemperatureScreen from './TemperatureScreen';
import selectors from '../../../../redux/selectors';

const TemperatureScreenContainer = ({ activeRoom, setTemperature, currentTemperature, geoTemperature }) => {
  return (
    <TemperatureScreen
      activeRoom={activeRoom}
      setTemperature={setTemperature}
      currentTemperature={currentTemperature}
      geoTemperature={geoTemperature}
    />
  );
};

let mapStateToProps = state => {
  const { getActiveRoom, getSetTemperature, getCurrentTemperature,
          getGeoTemperature } = selectors.homeSelectors;
  return {
    activeRoom: getActiveRoom(state),
    setTemperature: getSetTemperature(state),
    currentTemperature: getCurrentTemperature(state),
    geoTemperature: getGeoTemperature(state),
  };
};

let mapDispatchToProps = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TemperatureScreenContainer);
