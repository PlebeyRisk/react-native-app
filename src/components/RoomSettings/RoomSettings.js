import React from 'react';
import { StyleSheet, View, Platform, TouchableOpacity, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SlidingUpPanel from 'rn-sliding-up-panel';

import Colors from '../../constants/Colors';
import Gradients from '../../constants/Gradients';
import RoomSettingsTabView from './navigation/RoomSettingsTabView';
import Layout from '../../constants/Layout';

const slideUpPanelHeight = 450;

const RoomSettings = () => {
  let _panel;
  const { colors, start, end, locations } = Gradients.roomSettings;

  const top = slideUpPanelHeight;
  const bottom = 30;
  const freeHeight = Layout.window.height - 490;
  let currentTop = Math.round(freeHeight);

  if (freeHeight > top) {
    currentTop =  top;
  } else if (freeHeight < bottom) {
    currentTop = bottom;
  }

  const bounce = (position) => {
    if (position > top) {
      setTimeout(() => _panel.show(top), 0);
      return;
    }

    if (position < currentTop) {
      setTimeout(() => _panel.show(currentTop), 0);
    }
  }

  return (
    <SlidingUpPanel
      ref={c => _panel = c}
      containerStyle={styles.container}
      animatedValue={new Animated.Value(currentTop)}
      draggableRange={{top: top + 30, bottom: currentTop - 30}}
      showBackdrop={false}
      onDragEnd={bounce}
      onMomentumDragEnd={bounce}
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
          onPress={() => _panel.show(currentTop)}
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
    height: slideUpPanelHeight,
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