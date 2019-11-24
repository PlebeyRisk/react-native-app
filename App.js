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
      require('./src/assets/images/robot-dev.png'),
      require('./src/assets/images/robot-prod.png'),
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
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
