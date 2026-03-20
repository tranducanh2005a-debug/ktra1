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

        // 🔥 TAB STYLE ĐẸP HƠN
        tabBarStyle: {
          position: "absolute",
          bottom: 15,
          left: 15,
          right: 15,
          height: 75,
          borderRadius: 30,
          backgroundColor: "#fff",
          borderTopWidth: 0,

          // shadow mượt
          elevation: 10,
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 15,
          shadowOffset: { width: 0, height: 8 }
        },

        // 🔥 ICON
        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === "Home") {
            icon = require("../assets/Group 152.png");
          } else if (route.name === "Scan") {
            icon = require("../assets/Group 153.png");
          } else if (route.name === "Bag") {
            icon = require("../assets/Vector.png");
          } else if (route.name === "History") {
            icon = require("../assets/Group 154.png");
          } else if (route.name === "Cart") {
            icon = require("../assets/Group 161.png");
          }

          return (
            <View
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",

                // active effect
                backgroundColor: focused ? "#FDEDE7" : "transparent",
                borderRadius: 15,
                transform: [{ scale: focused ? 1.1 : 1 }] // phóng to nhẹ
              }}
            >
              <Image
                source={icon}
                style={{
                  width: 26,
                  height: 26,
                  resizeMode: "contain",
                  tintColor: focused ? "#f28b54" : "#bbb"
                }}
              />
            </View>
          );
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Bag" component={ScanScreen} />
      <Tab.Screen name="History" component={ScanScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}