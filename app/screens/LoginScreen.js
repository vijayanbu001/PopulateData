import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  BackHandler
} from "react-native";
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Button,
  Text,
  Left,
  Icon,
  Title,
  Right,
  Body,
  Form,
  Toast,
  Label
} from "native-base";
import DrawerLeftMenu from "./../screenComponent/NavDrawerLeftMenu";
import { StackNavigator, DrawerNavigator } from "react-navigation";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    onLoginScreen = () => true;

    // handleInputchange = this.handleInputchange.bind(this);
  }
  render() {
    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;
    handleButtonPress = () => {
      if (this.state.username.trim() == "") {
        Toast.show({
          text: "Please Enter Username!",
          position: "bottom",
          buttonText: "Okay"
        });
      } else {
        if (this.state.password.trim() == "") {
          Toast.show({
            text: "Please Enter password!",
            position: "bottom",
            buttonText: "Okay"
          });
        } else {
          if (this.state.username == this.state.password) navigate("home");
          else{
            Toast.show({
              text: "Wrong password!",
              position: "bottom",
              buttonText: "Okay"
            });
          }
        }
      }
    };
    BackHandler.addEventListener("hardwareBackPress", function() {
      // Typically you would use the navigator here to go to the last state.
      // if (navigator.getCurrentRoutes().length > 1) {
      // navigator.pop();
      // return true; // do not exit app
      // } else {
      return false; // exit app
      // }
    });
    return (
      <Container>
        <Content>
          <Header>
            <DrawerLeftMenu onPress={() => navigate("DrawerOpen")} />
            <Body>
              <Title> Login </Title>
            </Body>
            <Right />
          </Header>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                name="username"
                onChangeText={username => this.setState({ username })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                secureTextEntry
                name="password"
                onChangeText={password => this.setState({ password })}
              />
            </Item>
            <Button block onPress={handleButtonPress}>
              <Text> Sign in </Text>
            </Button>
            <Text> use same username and password</Text>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default LoginScreen;
