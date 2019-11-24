import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../../constants/Colors';
import Rooms from '../../components/rooms/Rooms';
import RoomSettings from '../../components/RoomSettings/RoomSettings';
import { Text } from '../../components/StyledText';

const HomeScreen = ({ activeRoom, rooms, changeActiveRoom }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {activeRoom.title}
        </Text>
      </View>
      <View style={styles.container}>
        <Rooms rooms={rooms} activeRoom={activeRoom} changeActiveRoom={changeActiveRoom}/>
        <RoomSettings/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBackground,
  },
  header: {
    display: 'flex',
    alignItems: "center",
    height: 95,
    paddingTop: 57,
    backgroundColor: Colors.backgroundTwo,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.mainText
  },
});

export default HomeScreen;
