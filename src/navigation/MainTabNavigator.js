import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreenContainer from '../screens/HomeScreen/HomeScreenContainer';
import Colors from '../constants/Colors';

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
    <TabBarIcon
      focused={focused}
      name='md-home' />
  )
};

HomeStack.path = '';

const AlertsStack = createStackNavigator(
  {
    Alerts: HomeScreenContainer,
  },
  config
);

AlertsStack.navigationOptions = {
  tabBarLabel: 'Alerts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='ios-notifications' />
  ),
};

AlertsStack.path = '';

const PurchasesStack = createStackNavigator(
  {
    Purchases: HomeScreenContainer,
  },
  config
);

PurchasesStack.navigationOptions = {
  tabBarLabel: 'Purchases',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='md-cart' />
  ),
};

PurchasesStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: HomeScreenContainer,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='md-person' />
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
