import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import Colors from '../constants/Colors';
import Icon from './Icon';
import { Text } from './StyledText';

export const InfoItem = ({ temperature, title, icon }) => {
  let noData = false;

  if (temperature === null || title === null) {
    noData = true;
  }

  if (noData === true) return <View><Text>Loading...</Text></View>;

  return (
    <View>
      <View style={styles.container}>
        {typeof icon === 'string'
          ? <Image style={styles.image}
              source={{uri: icon}}
              defaultSource={require('../assets/images/weather/default-weather.png')}
            />
          : <Icon style={styles.icon} icon={icon} color={Colors.textTwo} size={20}/>
        }
        <Text style={styles.temperature}>{temperature}°C</Text>
      </View>
      <Text style={styles.title}> {title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
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
    marginLeft: -3,
    fontSize: 12,
    fontWeight: '500',
    color: Colors.mainText
  }
});