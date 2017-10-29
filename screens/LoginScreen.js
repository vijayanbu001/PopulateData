import React,{Component} from "react";
import {View,StyleSheet,Text,Button} from "react-native";
import {StackNavigator} from "react-navigation";

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  }
  render() {
    const { navigate } = this.props.navigation;
    handleButtonPress=()=>{
        navigate("home");
      }
      return (
        <View>
          <Text>Ontro</Text>
          <Button title="click" onPress={handleButtonPress}/>
        </View>
      );
    }
  }

  export default LoginScreen;