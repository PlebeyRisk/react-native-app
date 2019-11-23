import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import selectors from '../../redux/selectors';
import HomeScreen from './HomeScreen';
import { loadRooms, changeActiveRoom } from '../../redux/thunks';

const HomeScreenContainer = ({ activeRoom, changeActiveRoom, rooms, loadRooms }) => {
  useEffect(() => {
    if (rooms !== null) return;
    loadRooms();
  }, [rooms]);

  if (activeRoom === null || rooms === null) {
    return (<View><Text>Loading...</Text></View>);
  }
  return (
    <HomeScreen activeRoom={activeRoom} changeActiveRoom={changeActiveRoom} rooms={rooms} />
  );
};

HomeScreenContainer.navigationOptions = {
  header: null,
};

let mapStateToProps = state => {
  const { getActiveRoom, getRooms } = selectors.homeSelectors;
  return {
    activeRoom: getActiveRoom(state),
    rooms: getRooms(state)
  };
};

let mapDispatchToProps = {
  changeActiveRoom,
  loadRooms
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreenContainer);
