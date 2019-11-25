import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreenContainer from '../screens/HomeScreen/HomeScreenContainer';
import Colors from '../constants/Colors';
import { ICON_FONTS } from '../constants';
import EmptyScreen from '../screens/EmptyScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreenContainer,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} icon={{name: 'md-home', src: ICON_FONTS.IONICONS}} withShadow/>
  )
};

HomeStack.path = '';

const AlertsStack = createStackNavigator(
  {
    Alerts: EmptyScreen
  },
  config
);

AlertsStack.navigationOptions = {
  tabBarLabel: 'Alerts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} icon={{name: 'ios-notifications', src: ICON_FONTS.IONICONS}} withShadow />
  ),
};

AlertsStack.path = '';

const PurchasesStack = createStackNavigator(
  {
    Purchases: EmptyScreen
  },
  config
);

PurchasesStack.navigationOptions = {
  tabBarLabel: 'Purchases',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} icon={{name: 'md-cart', src: ICON_FONTS.IONICONS}} withShadow />
  ),
};

PurchasesStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: EmptyScreen
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} icon={{name: 'md-person', src: ICON_FONTS.IONICONS}} withShadow />
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  AlertsStack,
  PurchasesStack,
  ProfileStack
},{
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    activeBackgroundColor: Colors.footer,
    inactiveBackgroundColor: Colors.footer,
    style: {borderTopWidth: 0}
  }
});

tabNavigator.path = '';

export default tabNavigator;
