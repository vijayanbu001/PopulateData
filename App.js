import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  ViewPagerAndroid,
  Platform,
  StatusBar
} from "react-native";
import { StackNavigator } from "react-navigation";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import styles from "./styles/AppStyle";

const App = StackNavigator(
  {
    login: { screen: LoginScreen },
    home: { screen: HomeScreen }
  },
  {
    cardStyle: {
      paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
    }
  }
);

export default App;
