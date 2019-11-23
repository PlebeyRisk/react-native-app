import { SET_ACTIVE_ROOM, SET_CURRENT_TEMPERATURE, SET_DESIRED_TEMPERATURE,
				SET_GEO_TEMPERATURE, SET_REGION, SET_ROOMS } from "../actions/actionTypes";

const initialState = {
	activeRoom: null,
	rooms: null,
	region: null,
	currentTemperature: null,
	desiredTemperature: null,
	geoTemperature: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_ROOMS:
			return {...state,
				rooms: action.rooms
			};
    case SET_ACTIVE_ROOM:
			return {...state,
				activeRoom: action.room
			};
		case SET_CURRENT_TEMPERATURE:
			return {...state,
				currentTemperature: action.temperature
			};
		case SET_DESIRED_TEMPERATURE:
			return {...state,
				desiredTemperature: action.temperature
			};
		case SET_GEO_TEMPERATURE:
			return {...state,
				geoTemperature: action.temperature
			};
		case SET_REGION:
			return {...state,
				region: action.region
			};
		default:
			return state;
	}
};