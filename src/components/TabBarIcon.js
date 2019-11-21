import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

import Colors from '../constants/Colors';

const shadowStyle = {
  ...Platform.select({
    ios: {
      shadowColor: Colors.tintColor,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 5,
    }
  })
};

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={19}
      style={props.focused ? shadowStyle : {}}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
