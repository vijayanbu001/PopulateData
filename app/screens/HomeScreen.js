import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Left,
  Body,
  Right,
  Icon,
  Title,
  Card,
  CardItem,
  List,
  ListItem
} from "native-base";
import { StackNavigator } from "react-navigation";
const URL = "https://jsonplaceholder.typicode.com/users";
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      response: []
    };
  }

  componentDidMount() {
    this.fetchData().done();
  }

  async fetchData() {
    fetch(URL)
      .then(response => response.json())
      .then(json => this.setState({ response: json }));
  }
  render() {
    const { goBack } = this.props.navigation;
    return (
      <Container>
        <Content>
          <Header>
            <Left>
              <Button transparent onPress={() => goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Home</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name="ios-search" />
              </Button>
            </Right>
          </Header>
          <View>
          <ScrollView>
            {this.state.response.map(data => {
              return (
                <Card>
                  <CardItem>
                    <Text>{data.name}</Text>
                  </CardItem>
                  <CardItem>
                    <Text>{data.username}</Text>
                  </CardItem>
                  <CardItem>
                    <Text>{data.email}</Text>
                  </CardItem>
                </Card>
              );
            })}
          </ScrollView>
          </View>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
