import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  ViewPagerAndroid,
  Platform,
  StatusBar,
  Icon
} from "react-native";
import { Root } from "native-base";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import SplashScreen from "./SplashScreen";
import SideBar from "./SideBar";
import { Header } from "native-base";

const LoginScreenNavigator = StackNavigator(
  {
    login: {
      screen: LoginScreen
    },
    home: { screen: HomeScreen }
  },
  {
    headerMode: "none"
  }
);

const HomeScreenNavigator = StackNavigator(
  {
    home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home"
      }
    }
  },
  {
    headerMode: "none"
  }
);
const MainNavigator = DrawerNavigator(
  {
    Login: {
      screen: LoginScreenNavigator
    },
    Home: { screen: HomeScreenNavigator }
  },
  {
    headerMode: "none",
    cardStyle: {
      paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
    },
    contentComponent: props => <SideBar {...props} />,
    activeTintColor: "#e91e63"
  }
);

const App = StackNavigator(
  {
    MainNavigator: { screen: MainNavigator },
    Splash: { screen: SplashScreen }
  },
  {
    initialRouteName: "Splash",
    cardStyle: {
      paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
    },
    headerMode: "none"
  }
);

export default () => (
  <Root>
    <App />
  </Root>
);
