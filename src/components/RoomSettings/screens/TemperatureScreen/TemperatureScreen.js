import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../../../constants/Colors';
import Icon from '../../../Icon';
import { ICONFONTS } from '../../../../constants';
import Layout from '../../../../constants/Layout';

const InfoItem = ({ temperature, title, icon }) => (
  <View>
    <View style={styles.infoTemperature}>
      <Icon icon={icon} color={Colors.textTwo} size={20}/>
      <Text style={styles.infoTextTemperature}> {temperature}°C </Text>
    </View>
    <Text style={styles.infoTextTitle}> {title} </Text>
  </View>
);

export default TemperatureScreen = ({ activeRoom, setTemperature, currentTemperature, geoTemperature }) => (
  <View style={styles.container}>
    <View><Text> {setTemperature}° </Text></View>
    <View style={styles.infoContainer}>
      <InfoItem
        temperature={currentTemperature}
        title='текущая'
        icon={{name: 'thermometer-empty', src: ICONFONTS.FONT_AWESOME}}
      />
      <InfoItem
        temperature={geoTemperature}
        title='Санкт Петербург'
        icon={{name: 'weather-rainy', src: ICONFONTS.MATERIAL_COMMUNITY_ICONS}}
      />
    </View>
  </View>
);

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
  }
});
