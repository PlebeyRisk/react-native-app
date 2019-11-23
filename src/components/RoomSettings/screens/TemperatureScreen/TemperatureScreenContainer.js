import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import TemperatureScreen from './TemperatureScreen';
import selectors from '../../../../redux/selectors';
import { setDesiredTemperature, loadGeo } from '../../../../redux/thunks';

const TemperatureScreenContainer = ({
  desiredTemperature, currentTemperature, geoTemperature,
  setDesiredTemperature, activeRoom, region, loadGeo
}) => {
  useEffect(() => {
    if (geoTemperature !== null) return;
    loadGeo();
  }, [geoTemperature]);

  if (geoTemperature === null || region === null) {
    return (<View><Text>Loading...</Text></View>);
  }

  return (
    <TemperatureScreen
      activeRoomName={activeRoom.name}
      desiredTemperature={desiredTemperature}
      currentTemperature={currentTemperature}
      geoTemperature={geoTemperature}
      setDesiredTemperature={setDesiredTemperature}
      region={region}
    />
  );
};

let mapStateToProps = state => {
  const { getActiveRoom, getDesiredTemperature, getCurrentTemperature,
          getGeoTemperature, getRegion } = selectors.homeSelectors;
  return {
    activeRoom: getActiveRoom(state),
    desiredTemperature: getDesiredTemperature(state),
    currentTemperature: getCurrentTemperature(state),
    geoTemperature: getGeoTemperature(state),
    region: getRegion(state),
  };
};

let mapDispatchToProps = {
  setDesiredTemperature,
  loadGeo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TemperatureScreenContainer);
