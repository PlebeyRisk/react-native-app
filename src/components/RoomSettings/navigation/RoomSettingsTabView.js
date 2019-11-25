import * as React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import Colors from '../../../constants/Colors';
import TemperatureScreenContainer from '../screens/TemperatureScreen/TemperatureScreenContainer';
import TabBarIcon from '../../TabBarIcon';
import { ICON_FONTS } from '../../../constants';
import { Preloader } from '../../Preloader';
import Layout from '../../../constants/Layout';
import EmptyScreen from '../screens/EmptyScreen';

const LazyPlaceholder = ({ route }) => (
  <Preloader title={ route.title }/>
);

const renderTabIcon = ({ focused, route }) => (
  <TabBarIcon icon={route.icon} focused={focused}/>
);

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    renderIcon={renderTabIcon}
    style={styles.tabsContainer}
    styleTab={styles.tab}
    labelStyle={styles.noLabel}
  />
)

export default class RoomSettingsTabView extends React.Component {
  state = {
    index: 1,
    routes: [
      { key: 'Lighting', title: 'Lighting', icon: { name: 'lightbulb-on', src: ICON_FONTS.MATERIAL_COMMUNITY_ICONS }},
      { key: 'Temperature', title: 'Temperature', icon: { name: 'thermometer-half', src: ICON_FONTS.FONT_AWESOME }},
      { key: 'Security', title: 'Security', icon: { name: 'ios-lock', src: ICON_FONTS.IONICONS }},
      { key: 'Windows', title: 'Windows', icon: { name: 'border-all', src: ICON_FONTS.MATERIAL_ICONS }},
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderLazyPlaceholder = ({ route }) => (
    <LazyPlaceholder route={route} />
  );

  render() {
    return (
      <TabView
        lazy
        navigationState={this.state}
        renderScene={SceneMap({
          Lighting: EmptyScreen,
          Temperature: TemperatureScreenContainer,
          Security: EmptyScreen,
          Windows: EmptyScreen
        })}
        renderLazyPlaceholder={this._renderLazyPlaceholder}
        onIndexChange={this._handleIndexChange}
        initialLayout={{ width: Layout.window.width }}
        renderTabBar={renderTabBar}
      />
    );
  }
}

const indicatorShadow = {
  ...Platform.select({
    ios: {
      shadowColor: Colors.tintColor,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 5
    },
    android: {
      elevation: 3
    }
  })
};

const tabsContainerNoShadow = {
  ...Platform.select({
    ios: { shadowOpacity: 0 },
    android: { elevation: 0 }
  })
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabsContainer: {
    borderBottomWidth: 1,
    borderColor: Colors.border,
    backgroundColor: 'transparent',
    ...tabsContainerNoShadow
  },
  tab: {
    backgroundColor: 'transparent'
  },
  indicator: {
    marginBottom: -2,
    height: 3,
    borderRadius: 65,
    backgroundColor: Colors.tintColor,
    ...indicatorShadow
  },
  noLabel: {
    display: 'none',
    height: 0
  }
});
