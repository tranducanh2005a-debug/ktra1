import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function SuccessScreen(){

return(
<View style={styles.container}>

<TouchableOpacity style={styles.back}>
<Text>←</Text>
</TouchableOpacity>

<Image
source={require("../assets/Group 167.png")}
style={styles.image}
/>

<Text style={styles.title}>
Payment Success, Yayy!
</Text>

<Text style={styles.desc}>
we will send order details and invoice in your contact no and registered email
</Text>

<TouchableOpacity>
<Text style={styles.link}>Check Details →</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.btn}>
<Text style={styles.btnText}>Download Invoice</Text>
</TouchableOpacity>

</View>
);
}

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:"#fff",
alignItems:"center",
padding:30
},

back:{
alignSelf:"flex-start",
marginTop:20
},

image:{
width:200,
height:200,
resizeMode:"contain",
marginTop:40
},

title:{
fontSize:22,
fontWeight:"bold",
marginTop:20
},

desc:{
textAlign:"center",
color:"gray",
marginTop:10
},

link:{
color:"#5b6cff",
marginTop:15
},

btn:{
backgroundColor:"#5b6cff",
padding:18,
borderRadius:20,
marginTop:30,
width:"100%",
alignItems:"center"
},

btnText:{
color:"#fff",
fontWeight:"bold"
}

});