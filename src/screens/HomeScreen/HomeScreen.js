import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/Colors';
import Rooms from '../../components/Rooms';
import RoomSettings from '../../components/RoomSettings/RoomSettings';

const HomeScreen = ({ activeRoom, rooms, setActiveRoom }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {activeRoom.title}
        </Text>
      </View>
      <View style={styles.container}>
        <Rooms rooms={rooms} activeRoom={activeRoom} setActiveRoom={setActiveRoom}/>
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
