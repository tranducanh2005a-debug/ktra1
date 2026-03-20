import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

export default function PaymentScreen({navigation}){

return(
<View style={styles.container}>

{/* Card top */}
<View style={styles.topCard}>

<TouchableOpacity>
<Text style={styles.back}>←</Text>
</TouchableOpacity>

<View style={styles.header}>
<Text style={styles.checkout}>Checkout 💳</Text>
<Text style={styles.price}>₹ 1,527</Text>
</View>

<Text style={styles.gst}>Including GST (18%)</Text>

<View style={styles.payRow}>

<TouchableOpacity style={styles.creditBtn}>
<Image
source={require("../assets/Active tab.png")}
style={styles.icon}
/>
<Text style={styles.creditText}>Credit card</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.appleBtn}>
<Image
 source={require("../assets/Apple icon.png")}
style={styles.icon}
/>
<Text>Apple Pay</Text>
</TouchableOpacity>

</View>

</View>

{/* Form */}

<Text style={styles.label}>Card number</Text>

<View style={styles.cardInput}>

<TextInput
placeholder="5261 4141 0151 8472"
style={styles.cardText}
/>

<View style={styles.icons}>

<Image
source={require("../assets/Master Card Logo.png")}
style={styles.icon}
/>

<Image
source={require("../assets/Card Icon.png")}
style={styles.icon}
/>

</View>

</View>
<Text style={styles.label}>Cardholder name</Text>
<TextInput style={styles.input} placeholder="Christie Doe"/>

<View style={styles.row}>

<View style={{flex:1}}>
<Text style={styles.label}>Expiry date</Text>
<TextInput style={styles.input} placeholder="06 / 2024"/>
</View>

<View style={{flex:1,marginLeft:10}}>
<Text style={styles.label}>CVV / CVC</Text>
<TextInput style={styles.input} placeholder="915"/>
</View>

</View>

<Text style={styles.note}>
We will send you an order details to your email after the successful payment
</Text>

<TouchableOpacity
style={styles.payBtn}
onPress={()=>navigation.navigate("Success")}
>
<Text style={styles.payText}>Pay for the order</Text>
</TouchableOpacity>

</View>
);
}

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f5f6f8",
padding:20
},

topCard:{
backgroundColor:"#fff",
padding:20,
borderRadius:25,
shadowColor:"#000",
shadowOpacity:0.1,
shadowRadius:10,
marginBottom:20
},

back:{
fontSize:20
},

header:{
flexDirection:"row",
justifyContent:"space-between",
marginTop:10
},

checkout:{
fontSize:20,
fontWeight:"bold"
},

price:{
fontSize:18,
color:"#2ecc71",
fontWeight:"bold"
},

gst:{
color:"gray",
marginTop:3
},

payRow:{
flexDirection:"row",
marginTop:20
},

creditBtn:{
backgroundColor:"#2ecc71",
flexDirection:"row",
alignItems:"center",
padding:12,
borderRadius:15,
marginRight:10
},

creditText:{
color:"#fff",
marginLeft:5
},

appleBtn:{
backgroundColor:"#eee",
flexDirection:"row",
alignItems:"center",
padding:12,
borderRadius:15
},

icon:{
width:22,
height:22,
resizeMode:"contain"
},

label:{
marginTop:10,
fontWeight:"500"
},

input:{
backgroundColor:"#fff",
padding:15,
borderRadius:12,
marginTop:5
},

row:{
flexDirection:"row",
marginTop:10
},

note:{
textAlign:"center",
color:"gray",
fontSize:12,
marginTop:15
},

payBtn:{
backgroundColor:"#2ecc71",
padding:18,
borderRadius:20,
marginTop:20,
alignItems:"center"
},

payText:{
color:"#fff",
fontWeight:"bold",
fontSize:16
},

cardInput:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#fff",
paddingHorizontal:15,
borderRadius:12,
marginTop:5
},

cardText:{
flex:1,
paddingVertical:15
},

icons:{
flexDirection:"row"
},

cardIcon:{
width:30,
height:20,
resizeMode:"contain",
marginLeft:10
}

});