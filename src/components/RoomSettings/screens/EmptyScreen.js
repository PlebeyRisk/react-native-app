import React from 'react';
import { View } from 'react-native';

import Colors from '../../../constants/Colors';
import { Text } from '../../StyledText';

export default EmptyScreen = ({ route }) => {
  return(
    <View style={{
      flex: 1,
      alignItems: 'center',
      paddingTop: 40,
      backgroundColor: Colors.mainBackground
    }}>
      <Text style={{fontSize: 20, color: Colors.textTwo}}>{route.title}</Text>
    </View>
  );
}