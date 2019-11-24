import React from 'react';
import { StyleSheet, View, ImageBackground,
        Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../constants/Colors';
import Gradients from '../../constants/Gradients';
import { Text } from '../StyledText';

const Slide = ({item, activeRoom}) => {
  const { colors, start, end, locations } = Gradients.card;

  return (
    <View>
      <ImageBackground source={item.src} style={styles.slideImage}>
        {activeRoom === item
          ? (<View>
                <LinearGradient
                  colors={colors}
                  start={start}
                  end={end}
                  locations={locations}
                  style={styles.slideTitleContainer}
                >
                  <Text style={styles.slideTitle}>{ item.title }</Text>
                </LinearGradient>
             </View>)
          : undefined}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  slideImage: {
    display: "flex",
    justifyContent: "flex-end",
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: "hidden"
  },
  slideTitleContainer: {
    display: "flex",
    justifyContent: "flex-end",
    height: 134,
    padding: 21,
  },
  slideTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.mainText
  }
});

export default Slide;