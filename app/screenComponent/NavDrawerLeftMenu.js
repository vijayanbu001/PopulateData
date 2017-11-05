import React, { Component } from "react";
import { Button, Left, Icon } from "native-base";

class DrawerLeftMenu extends Component {
  render() {
    return (
      <Left>
        <Button transparent>
          <Icon name="menu"/>
        </Button>
      </Left>
    );
  }
}
export default DrawerLeftMenu;
