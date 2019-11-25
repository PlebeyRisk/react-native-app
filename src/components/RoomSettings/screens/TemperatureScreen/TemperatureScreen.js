import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ICON_FONTS } from '../../../../constants';
import Layout from '../../../../constants/Layout';
import { InfoItem } from '../../../InfoItem';
import { Weather } from '../../../Weather';
import TemperatureController from './TemperatureController';

export default TemperatureScreen = ({
  desiredTemperature, currentTemperature, setDesiredTemperature,
  activeRoomName, weather, geolocation, isUpdatingDesireTemperature
}) => {
  let region;

  if (geolocation !== null) {
    region = geolocation.city;
  }

  return(
    <View style={styles.container}>
      <TemperatureController
        desiredTemperature={desiredTemperature}
        setDesiredTemperature={setDesiredTemperature}
        activeRoomName={activeRoomName}
        isUpdatingDesireTemperature={isUpdatingDesireTemperature}
      />
      <View style={styles.infoContainer}>
        <InfoItem
          temperature={currentTemperature}
          title='текущая'
          icon={{name: 'thermometer-empty', src: ICON_FONTS.FONT_AWESOME}}
        />
        <Weather
          weather={weather}
          city={region}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Layout.isSmallDevice ? 35 : 50
  },
  icon: {
    marginRight: 10
  }
});