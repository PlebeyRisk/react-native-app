import React from 'react';
import { connect } from 'react-redux';

import selectors from '../../redux/selectors';
import { setActiveRoom } from '../../redux/actions';
import HomeScreen from './HomeScreen';

const HomeScreenContainer = ({ activeRoom, setActiveRoom, rooms }) => {
  return (
    <HomeScreen activeRoom={activeRoom} setActiveRoom={setActiveRoom} rooms={rooms} />
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
  setActiveRoom
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreenContainer);
