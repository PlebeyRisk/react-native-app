import { ROOMS } from "../../constants";
import { SET_ACTIVE_ROOM } from "../actions/actionTypes";

const roomsData = [
	{name: ROOMS.LIVING_ROOM, title: 'Гостинная', src: require('../../assets/images/rooms/living-room.jpg')},
	{name: ROOMS.BEDROOM, title: 'Спальня', src: require('../../assets/images/rooms/bedroom.jpg')},
	{name: ROOMS.KITCHEN, title: 'Кухня', src: require('../../assets/images/rooms/kitchen.jpg')},
	{name: ROOMS.HALLWAY, title: 'Прихожая', src: require('../../assets/images/rooms/hallway.jpg')}
];

const initialState = {
	activeRoom: roomsData[0],
	rooms: roomsData,
	currentTemperature: 21,
	setTemperature: 21,
	geoTemperature: 21,
};

export default (state = initialState, action) => {
	switch (action.type) {
    case SET_ACTIVE_ROOM:
			return {...state,
				activeRoom: action.room
			};
		default:
			return state
	}
};