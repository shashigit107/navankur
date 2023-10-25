import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function CustomBottom({
  buttomNme=false,
  style=false
}) {
  return (
       <View style={{marginHorizontal:16}}>
       <TouchableOpacity style={{...styles.container,...style}}>
          <Text style={styles.buttonText}>{buttomNme}</Text>
       </TouchableOpacity>
       </View>
    
  )
}
const styles=StyleSheet.create({
container:{
    width:"100%",
    height:50,
    backgroundColor:'green',
    justifyContent:"center",
    alignSelf:"center",
    alignItems:"center",
    borderRadius:10,
},
buttonText:{
  color:"white",
  fontSize:20,
  fontWeight:"600"
}
})