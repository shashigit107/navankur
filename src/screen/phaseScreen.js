import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { JumpingTransition } from 'react-native-reanimated'

export default function phaseScreen({navigation,...props}) {
    const phase1=()=>{
        navigation.navigate("Home")
    }
    const phase2=()=>{
        navigation.navigate("MyTabs")
    }
  return (
    <View style={{flex:1,justifyContent:"center", alignSelf:"center"}}>
        
        <TouchableOpacity onPress={phase1}>
        <Text style={{padding:20}}>phaseScreen1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={phase2}>
        <Text style={{padding:20}}>phaseScreen2</Text>
        </TouchableOpacity>
     
      


    </View>
  )
}