//естественно, вместо этого должна быть апишка, к которой приложение бы обращалось, и брало данные для бизнеса
//а это просто эмитация этих действий
import { ROOMS } from '../constants'
import { getIndexByProperty } from '../utils';

const roomsData = [
	{name: ROOMS.LIVING_ROOM, title: 'Гостинная', src: require('../assets/images/rooms/living-room.jpg'), temperature: { desired: 21, current: 21 }},
	{name: ROOMS.BEDROOM, title: 'Спальня', src: require('../assets/images/rooms/bedroom.jpg'), temperature: { desired: 22, current: 22 }},
	{name: ROOMS.KITCHEN, title: 'Кухня', src: require('../assets/images/rooms/kitchen.jpg'), temperature: { desired: 24, current: 24 }},
	{name: ROOMS.HALLWAY, title: 'Прихожая', src: require('../assets/images/rooms/hallway.jpg'), temperature: { desired: 20, current: 20 }}
];

const geo = {region: 'Санкт Петербург', temperature: 11};

export const updateDesiredTemperature = (roomName, temperature) => {
  return new Promise((resolve, reject) => {
    const roomIndex = getIndexByProperty(roomsData, 'name', roomName);
    if (roomIndex === -1) {
      reject(new Error(`комната с именем "${roomName}" не найдена`));
      return;
    }
    roomsData[roomIndex].temperature.desired = temperature;
    resolve(1);
  })
}

export const getRooms = () => {
  return new Promise((resolve, reject) => {
    resolve(roomsData);
  })
}

export const getGeo = () => {
  return new Promise((resolve, reject) => {
    resolve(geo);
  })
}