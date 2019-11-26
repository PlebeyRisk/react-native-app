import { ROOMS } from '../constants';

import livingRoomImg from '../assets/images/rooms/living-room.jpg';
import bedroomImg from '../assets/images/rooms/bedroom.jpg';
import kitchenImg from '../assets/images/rooms/kitchen.jpg';
import hallwayImg from '../assets/images/rooms/hallway.jpg';

//естественно, вместо этого должна быть апишка, к которой приложение бы обращалось, и брало данные для бизнеса
//а это просто эмитация этих действий

const roomsData = [
	{name: ROOMS.LIVING_ROOM, title: 'Гостинная', src: livingRoomImg, temperature: { desired: 21, current: 21 }},
	{name: ROOMS.BEDROOM, title: 'Спальня', src: bedroomImg, temperature: { desired: 22, current: 22 }},
	{name: ROOMS.KITCHEN, title: 'Кухня', src: kitchenImg, temperature: { desired: 24, current: 24 }},
	{name: ROOMS.HALLWAY, title: 'Прихожая', src: hallwayImg, temperature: { desired: 20, current: 20 }}
];

export default {
  roomsData
};