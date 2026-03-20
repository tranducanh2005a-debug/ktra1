import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import ScanScreen from "../screens/ScanScreen";
import CartScreen from "../screens/CartScreen";

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: "absolute",
          bottom: 10,
          left: 20,
          right: 20,
          height: 100,
          borderRadius: 30,
          backgroundColor: "#fff",
          borderTopWidth: 0,

          elevation: 10,
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 15,
          shadowOffset: { width: 0, height: 8 }
        },

        tabBarItemStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },

        
        tabBarIconStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },

        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === "Home") {
            icon = require("../assets/Group 152.png");
          } else if (route.name === "Bag") {
            icon = require("../assets/Group 153.png");
          } else if (route.name === "Scan") {
            icon = require("../assets/Vector.png");
          } else if (route.name === "History") {
            icon = require("../assets/Group 154.png");
          } else if (route.name === "Cart") {
            icon = require("../assets/Group 161.png");
          }

          return (
            <View
              style={{
                flex: 1, 
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  width: 45,
                  height: 45,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 12,
                  backgroundColor: focused ? "#FDEDE7" : "transparent"
                }}
              >
                <Image
                  source={icon}
                  style={{
                    width: 24,
                    height: 24,
                    resizeMode: "contain",
                    tintColor: focused ? "#f28b54" : "#bbb"
                  }}
                />
              </View>
            </View>
          );
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bag" component={ScanScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="History" component={ScanScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}