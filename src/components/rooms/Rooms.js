import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';
import constants from '../../constants';
import Slide from './Slide';

const slideHorizontalPadding = 9;
const itemSize = {width: 287 + slideHorizontalPadding * 2, height: 268};

export default Rooms = ({ rooms, activeRoom, changeActiveRoom }) => {
  const renderItem = (options) => {
    return (
      <Slide {...options} activeRoom={activeRoom}/>
    )
  }

  const carouselOptions = {
    containerCustomStyle: styles.slider,
    slideStyle: styles.slide,
    data: rooms,
    renderItem: renderItem,
    firstItem: rooms.findIndex((room) => room.name === constants.defaultActiveRoom),
    sliderWidth: Layout.window.width,
    itemWidth: itemSize.width,
    onBeforeSnapToItem: (index) => changeActiveRoom(rooms[index]),
    inactiveSlideScale: 1,
    inactiveSlideOpacity: 0.5,
  };

  const paginationOptions = {
    dotsLength: rooms.length,
    activeDotIndex: rooms.findIndex((room) => room.name === activeRoom.name),
    containerStyle: styles.dotsContainer,
    dotStyle: styles.dot,
    dotColor: Colors.paginationDot,
    inactiveDotColor: Colors.inactivePaginationDot,
    inactiveDotOpacity: 1,
    inactiveDotScale: 1,
  };

  return (
    <View style={styles.container}>
      <Carousel {...carouselOptions} />
      <Pagination {...paginationOptions} />
    </View>
  );
};

const shadowStyle = {
  ...Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.2,
      shadowRadius: 2
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
    paddingHorizontal: slideHorizontalPadding,
    width: itemSize.width,
    height: itemSize.height,
    backgroundColor: 'transparent',
    borderRadius: 10,
    ...shadowStyle,
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