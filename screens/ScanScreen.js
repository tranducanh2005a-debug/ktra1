import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Back button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>←</Text>
      </TouchableOpacity>

      {/* Product */}
      <Image
        source={require("../image/glass-bottle-mockups-for-food-and-beverage-packaging-cover 1.png")}
        style={styles.image}
      />

      {/* Product info */}
      <View style={styles.bottomCard}>
        <Image
          source={require("../image/glass-bottle-mockups-for-food-and-beverage-packaging-cover 1.png")}
          style={styles.smallImg}
        />

        <View style={{ flex: 1 }}>
          <Text style={{ color: "gray" }}>Lauren's</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Orange Juice
          </Text>
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <Text style={{ color: "white", fontSize: 20 }}>+</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8D9C5",
    padding: 20
  },

  back: {
    fontSize: 30,
    marginTop: 40
  },

  image: {
    width: "100%",
    height: 450,
    resizeMode: "contain",
    marginTop: 30
  },

  bottomCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 20,
    marginTop: 30
  },

  smallImg: {
    width: 55,
    height: 70,
    borderRadius: 10,
    marginRight: 10
  },

  addBtn: {
    width: 45,
    height: 45,
    backgroundColor: "#4C6EF5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  }
});