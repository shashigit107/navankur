import { View,
    Text,
    StyleSheet, 
    Image,
     ScrollView, 
     TouchableOpacity, 
   
     Animated } from 'react-native'
 import React, { useRef, useState } from 'react'
 import { useNavigation } from '@react-navigation/native';
 
//  import ManuComponent from '../component/ManuComponent';

export default function ManuComponent() {
    const navigation=useNavigation()
    console.log("=============",navigation)
    const animation = useRef(new Animated.Value(0)).current;
  const [clicked, setClicked]=useState(false)
    const startAnimation=()=>{
        console.log("click",clicked)
         const toValue=clicked?0:1
         Animated.spring(animation,{
          toValue,
          friction:10,
          useNativeDriver:true
         }).start()
         console.log(toValue)
         setClicked(!clicked)
      }
      console.log("=======",animation)
    
      const button0Style = {
        transform: [
          { scale: animation },
          {
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -100]
            }
            )
          },
          
         
        ]
      }
      const button1Style = {
        transform: [
          { scale: animation },
          {
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -70]
            }
            )
          },
          {
            translateX: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -100]
            }
            )
            
          },
         
        ]
      }
      const button2Style = {
        transform: [
          { scale: animation },
         
          {
            translateX: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -110]
            }
            )
            
          },
          {
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 24]
            }
            )
            
          }
         
        ]
      }
    
      
        const rotation = {
          transform: [
            {
              rotate: animation.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "90deg"],
              }),
            },
      
          ],
        
      }


      const profileScreen=()=>{
       
        navigation.navigate("ProfileScreen")
        startAnimation()
        
      }
      const mainMainScreen=()=>{
       
        navigation.navigate("MainMenu")
        startAnimation()
      }
      const exportScreen=()=>{
       
        navigation.navigate("ExportScreen")
        startAnimation()
      }
    const renderMenu = () => {
        return (
          <View style={{ flex: 1 }}>
    
            <View style={{ position: "absolute", alignSelf: "center" }}>
    
              <Animated.View style={[{ bottom: 100, position: "absolute" , left:100},button0Style]}>
                <TouchableOpacity onPress={profileScreen} style={{ justifyContent:"center", alignItems:"center" }}>
                  <View style={{ width: 60, height: 60,
                  justifyContent:"center",alignItems:'center' ,
                     borderRadius: 30, backgroundColor: "white" }} >
                    <Text style={{ padding:8, fontSize:16, color:"black", fontWeight:"bold" }}>Icon</Text>
                  </View>
                  <Text style={{fontSize:16,color:"grey", fontWeight:"bold"}}>Profile</Text>
                </TouchableOpacity>
              </Animated.View>
    
    
              <Animated.View style={[{ bottom: 100, position: "absolute" , left:100},button1Style]}>
                <TouchableOpacity onPress={mainMainScreen} style={{ justifyContent:"center", alignItems:"center" }}>
                  <View style={{ width: 60, height: 60,
                  justifyContent:"center",alignItems:'center' ,
                     borderRadius: 30, backgroundColor: "white" }} >
                    <Text style={{ padding:8, fontSize:16, color:"black", fontWeight:"bold" }}>Icon</Text>
                  </View>
                  <Text style={{fontSize:16,color:"grey", fontWeight:"bold"}}>Main Menu</Text>
                </TouchableOpacity>
              </Animated.View>
    
    
              <Animated.View style={[{ bottom: 100, position: "absolute" , left:100},button2Style]}>
                <TouchableOpacity onPress={exportScreen} style={{ justifyContent:"center", alignItems:"center" }}>
                  <View style={{ width: 60, height: 60,
                  justifyContent:"center",alignItems:'center' ,
                     borderRadius: 30, backgroundColor: "white" }} >
                    <Text style={{ padding:8, fontSize:16, color:"black", fontWeight:"bold" }}>Icon</Text>
                  </View>
                  <Text style={{fontSize:16,color:"grey", fontWeight:"bold"}}>Export</Text>
                </TouchableOpacity>
              </Animated.View>
    
    
              <Animated.View style={[{ bottom: 100, position: "absolute" , left:100},rotation]}>
                <TouchableOpacity onPress={startAnimation} style={{ justifyContent:"center", alignItems:"center" }}>
                  <View style={{ width: 60, height: 60,
                  justifyContent:"center",alignItems:'center' ,
                     borderRadius: 30, backgroundColor: "white" }} >
                    <Text style={{ padding:8, fontSize:16, color:"black", fontWeight:"bold" }}>Menu</Text>
                  </View>
                 
                </TouchableOpacity>
              </Animated.View>
    
    
    
    
    
    
            </View>
          </View>
        )
      }
  return (
    <View>
      {renderMenu()}
    </View>
  )
}