import React, { Component } from "react";
import { View, Image } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import styles from "./../styles/AppStyle";
const routes = ["Home", "Login", "Profile"];

class SideBar extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <Image
            style={styles.sideBarImage}
            source={{
              uri: "https://i.imgur.com/AMf9X7E.jpg"
            }}
          >
            <Image
              style={styles.profileImage}
              source={{
                uri: "http://heliospark.in/images/login.png"
              }}
            />
          </Image>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem button onPress={() => navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
export default SideBar;
