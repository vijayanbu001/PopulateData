import React, { Component } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ViewPagerAndroid
} from "react-native";
import {Button,Container,Content} from "native-base";
import { LoginScreen } from "./LoginScreen";
import styles from "./../styles/AppStyle";
// import ImageSlider from "react-native-image-slider";
// import { StackNavigator,DrawerNavigator } from "react-navigation";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    var navigator = this.props.navigation;
    /*   setTimeout(() => {
      navigator.navigate("MainNavigator");
    }, 10000); */
  }

  render() {
    return (
      <View style={{ flex: 1,justifyContent:'space-between' , backgroundColor: "#ccc" }}>
        <View style={{flex:1,justifyContent:'center'}}>
          <Image source={require(".././images/ic_app_notification.png")} />
        </View>
        <View style={{flex:4}}> 
          <ViewPagerAndroid
            style={{flex:1 , justifyContent: "center" }}
            initialPage={0}
          >
            <View style={{ flex:1, justifyContent: "center" }}>
              <Text
                style={{
                  alignSelf:'center',
                  fontSize: 35,
                  color: "#800"
                }}
              >
                12,321 players & 113 teams
              </Text>
            </View>
            <View style={{ flex:1, justifyContent: "center" }}>
            <Text
              style={{
                alignSelf:'center',
                fontSize: 35,
                color: "#800"
              }}
              >
                312 tournaments
              </Text>
            </View>
            <View style={{ flex:1, justifyContent: "center" }}>
            <Text
              style={{
                alignSelf:'center',
                fontSize: 35,
                color: "#800"
              }}
              >
                45+ matches
              </Text>
            </View>
            <View style={{ flex:1, justifyContent: "center" }}>
            <Text
              style={{
                alignSelf:'center',
                fontSize: 35,
                color: "#800"
              }}
              >
                16 teams
              </Text>
            </View>
          </ViewPagerAndroid>
        </View>
        <View style={{flex:1,justifyContent:'center'}}>
          <Button rounded style={{alignSelf:'center',backgroundColor:'#800'}}><Text style={{textAlign:'center',color:"white",width:'50%'}}>Become an Ontr'ite</Text></Button>
        </View>
      </View>
    );
  }
}

export default SplashScreen;
