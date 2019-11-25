import { ROOMS } from '../constants';

//естественно, вместо этого должна быть апишка, к которой приложение бы обращалось, и брало данные для бизнеса
//а это просто эмитация этих действий

const roomsData = [
	{name: ROOMS.LIVING_ROOM, title: 'Гостинная', src: require('../assets/images/rooms/living-room.jpg'), temperature: { desired: 21, current: 21 }},
	{name: ROOMS.BEDROOM, title: 'Спальня', src: require('../assets/images/rooms/bedroom.jpg'), temperature: { desired: 22, current: 22 }},
	{name: ROOMS.KITCHEN, title: 'Кухня', src: require('../assets/images/rooms/kitchen.jpg'), temperature: { desired: 24, current: 24 }},
	{name: ROOMS.HALLWAY, title: 'Прихожая', src: require('../assets/images/rooms/hallway.jpg'), temperature: { desired: 20, current: 20 }}
];

export default {
  roomsData
};