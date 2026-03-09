import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>

        <Image
          source={require("../image/Mask Group.png")}
          style={styles.avatar}
        />
      </View>

      <Text style={styles.title}>Your Insights</Text>

      {/* Grid */}
      <View style={styles.grid}>

        {/* Scan */}
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Scan")}
            >
            <View style={[styles.iconBox, { backgroundColor: "#E8F0FE" }]}>
                <Image
                source={require("../image/Vector.png")}
                style={styles.icon}
                />
            </View>

            <Text style={styles.cardTitle}>Scan new</Text>
            <Text style={styles.cardSub}>Scanned 483</Text>
        </TouchableOpacity>

        {/* Counterfeit */}
        <View style={styles.card}>
            <View style={[styles.iconBox, { backgroundColor: "#FFEAEA" }]}>
                <Image
                source={require("../image/Frame.png")}
                style={styles.icon}
                />
            </View>

            <Text style={styles.cardTitle}>Counterfeits</Text>
            <Text style={styles.cardSub}>Counterfeited 32</Text>
        </View>

        {/* Success */}
        <View style={styles.card}>
            <View style={[styles.iconBox, { backgroundColor: "#E9F9EE" }]}>
                <Image
                source={require("../image/Group 158.png")}
                style={styles.icon}
                />
            </View>

            <Text style={styles.cardTitle}>Success</Text>
            <Text style={styles.cardSub}>Checkouts 8</Text>
        </View>
        {/* History */}
        <View style={styles.card}>
            <View style={[styles.iconBox, { backgroundColor: "#FFF5E6" }]}>
                <Image
                source={require("../image/Group 151.png")}
                style={styles.icon}
                />
            </View>

            <Text style={styles.cardTitle}>Directory</Text>
            <Text style={styles.cardSub}>History 26</Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
    padding: 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40
  },

  hello: {
    fontSize: 22,
    fontWeight: "bold"
  },

  name: {
    color: "gray"
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },

  title: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: "600"
  },

  grid: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },

  card: {
    width: "48%",
    height: 160,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3
  },
  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: "contain"
  },

  cardTitle: {
    fontWeight: "bold",
    fontSize: 15
  },

  cardSub: {
    color: "gray",
    fontSize: 12,
    marginTop: 3
  }
});