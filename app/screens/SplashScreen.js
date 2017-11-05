import React, { Component } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { LoginScreen } from "./LoginScreen";
import styles  from "./../styles/AppStyle";
// import { StackNavigator,DrawerNavigator } from "react-navigation";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    var navigator = this.props.navigation;
    setTimeout(() => {
      navigator.navigate("MainNavigator");
    }, 1000);
  }
  
  render() {
    return (
      <View style={styles.splashImage}>
        <Image source={require("./../images/ic_app_notification.png")} />
      </View>
    );
  }
}

export default SplashScreen;
