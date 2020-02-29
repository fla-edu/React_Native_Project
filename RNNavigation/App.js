import React from 'react';
import {Image, Dimensions} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {IMAGE} from './src/constants/Image';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {
  SideMenu,
  Feed,
  FeedDetail,
  Search,
  SearchDetail,
  Profile,
  Inventario,
  Login,
  Register,
} from './src/component';

const navOptionHandler = () => ({
  headerShown: false,
});

const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: navOptionHandler,
  },
  FeedDetails: {
    screen: FeedDetail,
    navigationOptions: navOptionHandler,
  },
});

const SearchStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: navOptionHandler,
  },
  SearchDetails: {
    screen: SearchDetail,
    navigationOptions: navOptionHandler,
  },
});

const MainTabs = createBottomTabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={IMAGE.ICON_MENU}
          resizeMode="contain"
          style={{width: 20, height: 20}}
        />
      ),
    },
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={IMAGE.ICON_MENU}
          resizeMode="contain"
          style={{width: 20, height: 20}}
        />
      ),
    },
  },
});

const MainStack = createStackNavigator(
  {
    Home: {
      screen: MainTabs,
      navigationOptions: navOptionHandler,
    },
    Inventario: {
      screen: Inventario,
      navigationOptions: navOptionHandler,
    },
    Profile: {
      screen: Profile,
      navigationOptions: navOptionHandler,
    },
  },
  {initialRouteName: 'Home'},
);

const appDrawer = createDrawerNavigator(
  {
    drawer: MainStack,
  },
  {
    contentComponent: SideMenu,
    drawerWidth: (Dimensions.get('window').width * 3) / 4,
  },
);

const authStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: navOptionHandler,
  },
  Register: {
    screen: Inventario,
    navigationOptions: navOptionHandler,
  },
});

const MainApp = createSwitchNavigator(
  {
    app: appDrawer,
    auth: authStack,
  },
  {
    initialRouteName: 'auth',
  },
);

export default createAppContainer(MainApp);
