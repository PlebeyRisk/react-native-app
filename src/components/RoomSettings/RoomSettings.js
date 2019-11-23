import React from 'react';
import { StyleSheet, View, Platform, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SlidingUpPanel from 'rn-sliding-up-panel';

import Colors from '../../constants/Colors';
import Gradients from '../../constants/Gradients';
import RoomSettingsTabView from './navigation/RoomSettingsTabView';

const RoomSettings = () => {
  let _panel;
  const { colors, start, end, locations } = Gradients.roomSettings;

  return (
    <SlidingUpPanel
      ref={c => _panel = c}
      containerStyle={styles.container}
      draggableRange={{top: 450, bottom: 30}}
      showBackdrop={false}
    >
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        locations={locations}
        style={styles.linearGradient}
      >
        <TouchableOpacity
          style={styles.hideButton}
          onPress={() => _panel.hide()}
          activeOpacity={1}
        >
          <View style={styles.slideMark} />
        </TouchableOpacity>
        <RoomSettingsTabView />
      </LinearGradient>
    </SlidingUpPanel>
  )
}

const shadowStyle = {
  ...Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -5 },
      shadowOpacity: 0.3,
      shadowRadius: 20
    },
    android: {
      elevation: 5
    }
  })
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    ...shadowStyle
  },
  linearGradient: {
    flex: 1,
    borderRadius: 20,
  },
  hideButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    width: '100%',
    height: 21
  },
  slideMark: {
    width: 35,
    height: 3,
    borderRadius: 3,
    backgroundColor: Colors.slideMark,
  }
});

export default RoomSettings;