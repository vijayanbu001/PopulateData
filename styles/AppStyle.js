import React,{StyleSheet} from "react-native"

var global = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center"
          },
          subcontainer: {
            flex: 1,
            width: "80%",
            backgroundColor: "#aaa",
            justifyContent: "center",
            alignItems: "center"
          },
          pageStyle: {
            alignItems: "center",
            padding: 20
          }  
    }
);

module.exports = global;
