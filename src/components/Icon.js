import React from 'react';
import { Ionicons, MaterialCommunityIcons,
        FontAwesome, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Platform } from 'react-native';

import Colors from '../constants/Colors';
import { ICON_FONTS } from '../constants';

export default Icon = ({
  icon, color = '#000', size = 19, withShadow = false, shadowColor = Colors.tintColor, style = {}
}) => {

  const shadowStyle = withShadow
  ? { ...Platform.select({
        ios: {
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 1,
          shadowRadius: 5,
          shadowColor
        }
      })}
  : {};

  const options = {
    name: icon.name,
    size: size,
    style: { ...style, ...shadowStyle },
    color: color
  };

  switch (icon.src) {
    case ICON_FONTS.MATERIAL_COMMUNITY_ICONS:
      return <MaterialCommunityIcons {...options} />;
    case ICON_FONTS.FONT_AWESOME:
      return <FontAwesome {...options} />;
    case ICON_FONTS.MATERIAL_ICONS:
      return <MaterialIcons {...options} />;
    case ICON_FONTS.ANT_DESIGN:
      return <AntDesign {...options} />;
    default:
      return <Ionicons {...options} />;
  }
};