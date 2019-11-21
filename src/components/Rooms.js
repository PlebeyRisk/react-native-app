import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Platform, ImageBackground,
        Animated, Easing } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';

import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import Gradients from '../constants/Gradients';

const itemSize = {width: 287, height: 268};

const Rooms = ({ rooms, activeRoom, setActiveRoom }) => {
  const fadeValue = new Animated.Value(0);

  const animate = () => {
    Animated.timing(
      fadeValue,
      {
        toValue: 1,
        duration: 200,
        easing: Easing.linear
      }
    ).start();
  };

  useEffect(() => {
    animate();
  }, [activeRoom]);

  const RenderItem = ({item, index}) => {
    const { colors, start, end, locations } = Gradients.card;

    return (
      <View style={styles.slide}>
        <ImageBackground source={item.src} style={styles.slideImage}>
          {activeRoom === rooms[index]
            ? (<Animated.View style={{opacity: fadeValue}}>
                  <LinearGradient
                    colors={colors}
                    start={start}
                    end={end}
                    locations={locations}
                    style={styles.slideTitleContainer}
                  >
                    <Text style={styles.slideTitle}>{ item.title }</Text>
                  </LinearGradient>
               </Animated.View>)
            : undefined}
        </ImageBackground>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Carousel
        containerCustomStyle={styles.slider}
        layout={'default'}
        data={rooms}
        renderItem={RenderItem}
        sliderWidth={Layout.window.width}
        itemWidth={itemSize.width}
        onSnapToItem={index => setActiveRoom(rooms[index])}
      />
      <Pagination
        dotsLength={rooms.length}
        activeDotIndex={rooms.findIndex((room) => room.name === activeRoom.name)}
        containerStyle={styles.dotsContainer}
        dotStyle={styles.dot}
        dotColor={Colors.paginationDot}
        inactiveDotColor={Colors.inactivePaginationDot}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    </View>
  );
};

const shadowStyle = {
  ...Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      backgroundColor: '#ffdd44'
    },
    android: {
      elevation: 6
    }
  })
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    minHeight: 326,
    backgroundColor: Colors.mainBackground,
  },
  slider: {
    paddingVertical: 23
  },
  slide: {
    width: itemSize.width,
    height: itemSize.height,
    borderRadius: 10,
    ...shadowStyle,
    overflow: "hidden"
  },
  slideImage: {
    display: "flex",
    justifyContent: "flex-end",
    width: '100%',
    height: '100%'
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
  },
  dotsContainer: {
    marginTop: -30
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    marginHorizontal: 1
  }
});

export default Rooms;