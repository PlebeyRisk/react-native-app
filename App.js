import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons,
  FontAwesome, MaterialIcons, AntDesign } from '@expo/vector-icons';
import {Provider} from 'react-redux';

import store from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import { changeGeolocation } from './src/redux/thunks';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./src/assets/images/radial-gradient.png'),
      require('./src/assets/images/weather/default-weather.png'),
      require('./src/assets/images/rooms/living-room.jpg'),
      require('./src/assets/images/rooms/bedroom.jpg'),
      require('./src/assets/images/rooms/kitchen.jpg'),
      require('./src/assets/images/rooms/hallway.jpg')
    ]),
    Font.loadAsync({
      ...Ionicons.font,
      ...MaterialCommunityIcons.font,
      ...FontAwesome.font,
      ...MaterialIcons.font,
      ...AntDesign.font,
      'Montserrat-Regular': require('./src/assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-SemiBold': require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
      'Montserrat-Medium': require('./src/assets/fonts/Montserrat-Medium.ttf'),
    }),
  ]);

  findCoordinates();
}

function findCoordinates() {
  navigator.geolocation.getCurrentPosition(
    position => {
      store.dispatch(changeGeolocation(position));
    },
    error => alert(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
};

function handleLoadingError(error) {
  alert(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
