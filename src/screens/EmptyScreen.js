import React from 'react';
import { View } from 'react-native';

import Colors from '../constants/Colors';
import { Text } from '../components/StyledText';

export default EmptyScreen = ({navigation}) => {
  return(
    <View style={{
      flex: 1,
      backgroundColor: Colors.mainBackground,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{fontSize: 20, color: Colors.textTwo}}>{navigation.state.routeName}</Text>
    </View>
  );
}

EmptyScreen.navigationOptions = {
  header: null,
};