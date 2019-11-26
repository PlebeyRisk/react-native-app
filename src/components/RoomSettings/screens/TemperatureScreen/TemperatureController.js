import React from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native';

import Colors from '../../../../constants/Colors';
import Icon from '../../../Icon';
import constants, { ICON_FONTS } from '../../../../constants';
import { Text } from '../../../StyledText';
import CircularProgress from '../../../CircularProgress/CircularProgress';
import radialGradientImg from '../../../../assets/images/radial-gradient.png';

export default TemperatureController = ({
  desiredTemperature, setDesiredTemperature, activeRoomName,
  isUpdatingDesireTemperature
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
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}
        onPress={() => decreaseValue()}
        disabled = {isUpdatingDesireTemperature}
      >
        <Icon icon={{name: 'minus', src: ICON_FONTS.ANT_DESIGN}} color={Colors.tintColor} size={20}/>
      </TouchableOpacity>

      <ImageBackground
        source={radialGradientImg}
        style={styles.radialGradient}
      >
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
            <Icon style={styles.icon} icon={{name: 'ios-snow', src: ICON_FONTS.IONICONS}} color={Colors.tintColor} size={20}/>
            <Text style={styles.circleText}>{desiredTemperature}°</Text>
          </View>
        </CircularProgress>
      </ImageBackground>

      <TouchableOpacity style={styles.button}
        onPress={() => increaseValue()}
        disabled = {isUpdatingDesireTemperature}
      >
        <Icon icon={{name: 'plus', src: ICON_FONTS.ANT_DESIGN}} color={Colors.mainText} size={20}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 15
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
  },
  circleInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  circleText: {
    fontSize: 50,
    letterSpacing: 4,
    color: Colors.mainText
  },
  icon: {
    marginRight: 10
  },
  radialGradient: {
    width: 211,
    height: 213,
    justifyContent: 'center',
    alignItems: 'center',
  }
});