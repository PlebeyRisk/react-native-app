import React from 'react';
import { Ionicons, MaterialCommunityIcons,
        FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

import Colors from '../constants/Colors';
import { ICONFONTS } from '../constants';

export default Icon = ({
  icon, color = '#000', size = 19, withShadow = false, shadowColor = Colors.tintColor
}) => {
  const options = {
    name: icon.name,
    size: size,
    style: withShadow ? {...shadowStyle, shadowColor} : {},
    color: color
  };

  switch (icon.src) {
    case ICONFONTS.MATERIAL_COMMUNITY_ICONS:
      return <MaterialCommunityIcons {...options} />;
    case ICONFONTS.FONT_AWESOME:
      return <FontAwesome {...options} />;
    case ICONFONTS.MATERIAL_ICONS:
      return <MaterialIcons {...options} />;
    default:
      return <Ionicons {...options} />;
  }
}

const shadowStyle = {
  ...Platform.select({
    ios: {
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 5,
    }
  })
};