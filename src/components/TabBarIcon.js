import React from 'react';

import Icon from './Icon';
import Colors from '../constants/Colors';

export default  TabBarIcon = ({ focused, icon, size = 21, withShadow = false }) => (
  <Icon
    icon={icon}
    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    size={size}
    withShadow={withShadow && focused}
  />
);