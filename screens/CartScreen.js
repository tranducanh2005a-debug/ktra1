import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";

export default function CartScreen({ navigation }) {

  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Orange Juice",
      brand: "Lauren’s",
      price: 149,
      qty: 2,
      image: require("../assets/glass-bottle-mockups-for-food-and-beverage-packaging-cover 1.png")
    },
    {
      id: 2,
      name: "Skimmed Milk",
      brand: "Baskin’s",
      price: 129,
      qty: 2,
      image: require("../assets/Rectangle 31.png")
    },
    {
      id: 3,
      name: "Aloe Vera Lotion",
      brand: "Marley’s",
      price: 1249,
      qty: 2,
      image: require("../assets/Rectangle 36.png")
    }
  ]);

  const increase = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decrease = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    ));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <View style={styles.container}>

      {/* Header */}
      <TouchableOpacity style={styles.back}>
        <Text style={{ fontSize: 18 }}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Your Cart 👍🏼</Text>

      {/* List */}
      {cart.map((item, index) => (
        <View
          key={item.id}
          style={[
            styles.card,
            index === 1 && styles.activeCard // highlight item giữa
          ]}
        >

          <Image source={item.image} style={styles.image} />

          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.brand}>{item.brand}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>₹ {item.price}</Text>
          </View>

          {/* Quantity */}
          <View style={styles.qtyBox}>

            <TouchableOpacity onPress={() => decrease(item.id)}>
              <Text style={styles.qtyBtn}>−</Text>
            </TouchableOpacity>

            <Text style={styles.qty}>{item.qty}</Text>

            <TouchableOpacity onPress={() => increase(item.id)}>
              <Text style={styles.qtyBtn}>+</Text>
            </TouchableOpacity>

          </View>

        </View>
      ))}

      {/* Total */}
      <View style={styles.totalRow}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalPrice}>₹ {total}</Text>
      </View>

      {/* Button */}
      <TouchableOpacity
        style={styles.checkoutBtn}
        onPress={() => navigation.navigate("Payment")}
      >
        <Text style={styles.checkoutText}>Procee to checkout</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
    padding: 20
  },

  back: {
    marginTop: 40,
    marginBottom: 10
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 20,
    marginBottom: 15
  },

  activeCard: {
    borderWidth: 2,
    borderColor: "#3b82f6",
    backgroundColor: "#fff"
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 15,
    resizeMode: "contain"
  },

  brand: {
    fontSize: 12,
    color: "gray"
  },

  name: {
    fontWeight: "bold"
  },

  price: {
    color: "#ff7f50",
    marginTop: 3
  },

  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5
  },

  qtyBtn: {
    fontSize: 18,
    paddingHorizontal: 10
  },

  qty: {
    fontWeight: "bold"
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },

  totalText: {
    fontSize: 18,
    fontWeight: "bold"
  },

  totalPrice: {
    fontSize: 18,
    color: "#ff7f50",
    fontWeight: "bold"
  },

  checkoutBtn: {
    backgroundColor: "#f28b54",
    padding: 18,
    borderRadius: 20,
    marginTop: 20,
    alignItems: "center"
  },

  checkoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }

});