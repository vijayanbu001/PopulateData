import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { StackNavigator } from "react-navigation";

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    }
    render() {
    return (
      <View>
        <Text>Home Screen In</Text>
      </View>
    );
  }
}

export default HomeScreen;