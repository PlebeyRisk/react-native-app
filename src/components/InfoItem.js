import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import Colors from '../constants/Colors';
import Icon from './Icon';
import { Text } from './StyledText';
import defaultWeatherImg from '../assets/images/weather/default-weather.png';

export const InfoItem = ({ temperature, title, icon }) => {
  let noData = false;

  if (temperature === null || title === null) {
    noData = true;
  }

  if (noData === true) return <View><Text>Loading...</Text></View>;

  const titleMargin = typeof icon === 'string' ? {marginLeft: 2} : {marginLeft: 2};

  return (
    <View>
      <View style={styles.container}>
        {typeof icon === 'string'
          ? <Image style={styles.image}
              source={{uri: icon}}
              defaultSource={defaultWeatherImg}
            />
          : <Icon style={styles.icon} icon={icon} color={Colors.textTwo} size={20}/>
        }
        <Text style={styles.temperature}>{temperature}°C</Text>
      </View>
      <Text style={[styles.title, titleMargin]}> {title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5
  },
  icon: {
    marginRight: 10
  },
  image: {
    marginLeft: -6,
    width: 40,
    height: 40
  },
  temperature: {
    marginBottom: 5,
    fontSize: 30,
    letterSpacing: 4,
    color: Colors.textTwo
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.mainText,
  }
});