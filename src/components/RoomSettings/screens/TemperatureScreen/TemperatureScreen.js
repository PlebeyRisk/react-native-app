import React from 'react';
import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native';

import Colors from '../../../../constants/Colors';
import Icon from '../../../Icon';
import constants, { ICONFONTS } from '../../../../constants';
import Layout from '../../../../constants/Layout';
import { Text } from '../../../StyledText';
import CircularProgress from '../../../CircularProgress/CircularProgress';

const InfoItem = ({ temperature, title, icon }) => (
  <View>
    <View style={styles.infoTemperature}>
      <Icon style={styles.icon} icon={icon} color={Colors.textTwo} size={20}/>
      <Text style={styles.infoTextTemperature}>{temperature}°C</Text>
    </View>
    <Text style={styles.infoTextTitle}> {title} </Text>
  </View>
);

const TemperatureController = ({
  desiredTemperature, setDesiredTemperature, activeRoomName
}) => {
  const increaseValue = () => {
    if (desiredTemperature >= constants.temperature.maxValue) return;

    setDesiredTemperature(activeRoomName, ++desiredTemperature);
  };

  const decreaseValue = () => {
    if (desiredTemperature <= 0) return;

    setDesiredTemperature(activeRoomName, --desiredTemperature);
  };

  return (
    <View style={styles.temperatureController}>
      <TouchableOpacity style={styles.controllerButton}
        onPress={() => decreaseValue()}
      >
        <Icon icon={{name: 'minus', src: ICONFONTS.ANT_DESIGN}} color={Colors.tintColor} size={20}/>
      </TouchableOpacity>

      <CircularProgress
        value={desiredTemperature / constants.temperature.maxValue}
        size={174}
        thickness={2}
        color={Colors.tintColor}
        unfilledColor={Colors.border}
        animationMethod='timing'
        animationConfig={{duration: 150}}
      >
        <View style={styles.circleInfo}>
          <Icon style={styles.icon} icon={{name: 'ios-snow', src: ICONFONTS.IONICONS}} color={Colors.tintColor} size={20}/>
          <Text style={styles.circleText}>{desiredTemperature}°</Text>
        </View>
      </CircularProgress>

      <TouchableOpacity style={styles.controllerButton}
        onPress={() => increaseValue()}
      >
        <Icon icon={{name: 'plus', src: ICONFONTS.ANT_DESIGN}} color={Colors.mainText} size={20}/>
      </TouchableOpacity>
    </View>
  );
};

export default TemperatureScreen = ({
  desiredTemperature, currentTemperature, geoTemperature,
  setDesiredTemperature, activeRoomName, region
}) => (
  <View style={styles.container}>
    <TemperatureController
      desiredTemperature={desiredTemperature}
      setDesiredTemperature={setDesiredTemperature}
      activeRoomName={activeRoomName}
    />
    <View style={styles.infoContainer}>
      <InfoItem
        temperature={currentTemperature}
        title='текущая'
        icon={{name: 'thermometer-empty', src: ICONFONTS.FONT_AWESOME}}
      />
      <InfoItem
        temperature={geoTemperature}
        title={region}
        icon={{name: 'weather-rainy', src: ICONFONTS.MATERIAL_COMMUNITY_ICONS}}
      />
    </View>
  </View>
);

const arcShadowStyle = {
  ...Platform.select({
    ios: {
      shadowColor: Colors.tintColor,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 10
    }
  })
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
  infoTemperature: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 10
  },
  infoTextTemperature: {
    marginBottom: 5,
    fontSize: 30,
    letterSpacing: 4,
    color: Colors.textTwo
  },
  infoTextTitle: {
    marginLeft: -3,
    fontSize: 12,
    fontWeight: '500',
    color: Colors.mainText
  },
  temperatureController: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 40
  },
  controllerButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
  },
  outerCircle: {
    ...arcShadowStyle
  },
  circleInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  circleText: {
    fontSize: 50,
    letterSpacing: 4,
    color: Colors.mainText
  }
});