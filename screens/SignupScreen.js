

import { View, Text, Image, StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const SignupScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullName, setFullName] = useState("")
    const [username, setUsername] = useState("")
  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
      <Image  
      source={require("../assets/thread_logo.png")}
      style={{width:90, height: 100, marginBottom:25}}
      />
      <TextInput 
      value={email}
      onChangeText={(text) => setEmail(text)}
      placeholder='Enter your email'
      style ={styles.textInput}
      />
      <TextInput 
      value={password}
      onChangeText={(text) => setPassword(text)}
      placeholder='Enter your password'
      style ={styles.textInput}
      />
      <TextInput 
      value={fullName}
      onChangeText={(text) => setFullName(text)}
      placeholder='Enter your full name'
      style ={styles.textInput}
      />
      <TextInput 
      value={username}
      onChangeText={(text) => setUsername(text)}
      placeholder='Enter your username'
      style ={styles.textInput}
      />
    
    <TouchableOpacity onPress={()=>{}}  style={styles.button}>
        <Text style={styles.text}>Sign up</Text>
    </TouchableOpacity>

    <View style={{position: 'absolute', bottom:0, marginBottom:40}}>
    <TouchableOpacity onPress={()=>{}} >
        <Text>Already have an account? Sign in</Text>
    </TouchableOpacity> 
    </View>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
    textInput:{
     height: 45,
     borderColor:"gray",
     borderWidth:1,
     width:350,
     marginBottom:20,
     padding:12,
     borderRadius:5
    },
    button:{
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:10,
        paddingHorizontal:32,
        borderRadius:4,
        backgroundColor:"black",
        width:350,
        marginTop:20,
    },

    text:{
        fontSize:16,
        fontWeight:'bold',
        color:"white",
        letterSpacing:0.25,
        lineHeight:21
    }
});