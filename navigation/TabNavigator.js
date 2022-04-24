import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import SportsPerson from '../screens/SportsPerson';
import TipsAndTricks from '../screens/TipsAndTricks';

const Tab=createMaterialBottomTabNavigator();

export default class TabNavigator extends Component {
  constructor(props){
      super(props)
      this.state={
          light_theme:false
      }
  }
  
    render() {

    return (
        <Tab.Navigator
        labeled={false}
        barStyle={
          this.state.light_theme
            ? styles.bottomTabStyleLight
            : styles.bottomTabStyle
        }
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "SportsPerson") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Tips&Tricks") {
              iconName = focused ? "american-football" : "american-football-outline";
            }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                style={styles.icons}
              />
            );
          }
        })}
        activeColor={"white"}
        inactiveColor={"blue"}
      >
        <Tab.Screen
          name="SportsPerson"
          component={SportsPerson}
          options={{ unmountOnBlur: true }}
        />
        <Tab.Screen
          name="Tips&Tricks"
          component={TipsAndTricks}
          options={{ unmountOnBlur: true }}
        />
      </Tab.Navigator>
    )
  }
}

const styles = StyleSheet.create({
    bottomTabStyle: {
      backgroundColor: "black",
      height: "8%",
      borderTopLeftRadius: RFValue(30),
      borderTopRightRadius: RFValue(30),
      overflow: "hidden",
      position: "absolute"
    },
    bottomTabStyleLight: {
      backgroundColor: "#eaeaea",
      height: "8%",
      borderTopLeftRadius: RFValue(30),
      borderTopRightRadius: RFValue(30),
      overflow: "hidden",
      position: "absolute"
    },
    icons: {
      width: RFValue(30),
      height: RFValue(30)
    }
  });

