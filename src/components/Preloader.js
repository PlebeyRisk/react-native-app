import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIndicator } from 'react-native-indicators';

import Colors from '../constants/Colors';

export const Preloader = ({ style, title }) => {
  return (
    <View style={[style, styles.container]}>
      <MaterialIndicator color={Colors.tintColor}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 10
  }
});

