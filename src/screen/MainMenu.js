import { View,
   Text,
   StyleSheet, 
   Image,
    ScrollView, 
   
    Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { string } from '../Constant/String'
import LinearGradient from 'react-native-linear-gradient';
import { agriProduct } from '../Constant/dataHouse';
import ManuComponent from '../component/ManuComponent';



export default function MainMenu({navigation}) {
  
  const backHandler=()=>{
    navigation.navigate("Home")
  }

  
  const renderHeader = () => {

    return (
      <LinearGradient
        start={{ x: 1, y: .05 }}
        end={{ x: 1, y: .8 }}
        locations={[0.08, .1]}
        colors={['white', "#dcdcdc"]} style={{ height: "100%",paddingTop:40 }}>

        <Text onPress={backHandler} style={[style.header, { height: "5%" }]}>
          {string.Main_Menu}
        </Text>
        <View style={{ height: "95%" }}>
          {renderCard()}
        </View>
       
        <ManuComponent/>
      </LinearGradient>
    )
  }
  const renderCardContent = (data) => {

    return (
      <>
        <View style={{
          width: 40, height: 20,
          borderRadius: 12,
          backgroundColor: `${data.color}`,
          // paddingVertical:6
        }}>

        </View>
        {data.image && <Image style={{
          height: 80, width: 70,
          marginVertical: 20,
          borderRadius: 10,
        }}
          source={{
            uri: data.image,
          }}
        />}

        <Text style={{ fontSize: 18, paddingVertical: 10, fontWeight: '600' }}>{data.text}</Text>
      </>
    )
  }
  const renderCard = () => {
    return (
      <ScrollView>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {agriProduct.map((element) => {
            return (
              <View style={style.cardContainer}>
                {renderCardContent(element)}
              </View>
            )
          })}

        </View>
      </ScrollView>

    )
  }

  return (
    <View style={style.container}>
      {renderHeader()}
    </View>
  )
}
const style = StyleSheet.create({
  cardContainer: {
    marginHorizontal: "5%", marginVertical: "6%",
    width: "40%",
    backgroundColor: "white",
    paddingTop: "7%",
    paddingBottom: "15%",
    borderRadius: 80,
    paddingHorizontal: "10%"

  },
  menuConatiner: {
    position: 'relative',
    marginRight: 17,
    zIndex: 999,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  menuStyle: {

    left: 0, top: "-45%",
    backgroundColor: "grey",
    paddingVertical: 27,
    paddingHorizontal: 15,
    // fontSize: 20,
    // fontWeight: "bold",
    borderRadius: 40,

  },
  container: {
    flex:1,
    
    height: "100%",
    width: "100%",
  
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 17
  }
})