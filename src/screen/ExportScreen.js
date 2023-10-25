import { View, Text, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { string } from '../Constant/String'
import { useNavigation } from '@react-navigation/native'
import { chatData } from '../Constant/dataHouse'

export default function ExportScreen() {
  const navigation = useNavigation()
  const backHandler = () => {
    navigation.goBack()

  }

  const renderBackButton = () => {
    return (
      <View style={{ flex: .1 }}>
        <TouchableOpacity onPress={backHandler}>
          <Text style={styles.exportText}>{string.export}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  const renderChatArea = () => {
    return (
      <View style={{ flex: .8 }}>
        {
          chatData.map((element, index) => {
            return (
              <View style={styles.chatbox}>
                <View style={{ flexDirection: "column", }}>
                  <View style={{ justifyContent: "center", alignItems: "center", }}>
                    <Text style={styles.icon}>{element.icon}</Text>
                  </View>

                  <Text style={styles.text}>{element.ajentName}</Text>
                </View>
                <View style={styles.messageContainer}><Text style={styles.message}>{element.message}</Text></View>
              </View>
            )
          })
        }
      </View>
    )


  }
  const renderchatInputBox = () => {
    return (
      <View style={{ flex: .1, marginHorizontal: 16 }}>
        <View style={styles.chatInputcontainer}>
          <TextInput
            placeholder='Type here'
            style={{ fontSize: 20, fontWeight: '600' }}
          />
          <View style={{flexDirection:"row"}}>

         
          <View style={styles.icon}><Text>Icon</Text></View>
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.ButtonText}>Send</Text>
          </TouchableOpacity>
          </View>

        </View>

      </View>
    )

  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#dcdcdc" }}>
      <StatusBar
        translucent backgroundColor='transparent'
      />
      {renderBackButton()}
      {renderChatArea()}
      {renderchatInputBox()}
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 25,
    backgroundColor: "grey",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "black"

  },
  messageContainer: {
    backgroundColor: "white",
    marginHorizontal: 10,
    flex: 1,
    padding: 10,
    borderRadius: 20
  },
  message: {
    flexWrap: "wrap",
    fontSize: 16,
    fontWeight: '500'
  },
  exportText: {
    fontSize: 30,
    paddingTop: 40,
    marginLeft: 20
  },
  chatbox: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginVertical: 16
  },
  ButtonText:{
   color:"white",
   fontSize:20
  },
  chatInputcontainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: 'white',
    height: 70,
    top: -20,
    borderRadius: 15,
    padding: 10,
    justifyContent:"space-between",
    alignItems:"center"


  },
  icon:{
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:'grey',
      borderRadius:15,
      width:40,
      height:40,
      marginRight:10,
      alignSelf:"center"
  },
  sendButton:{
    backgroundColor:"green",
    padding:12,
    borderRadius:10,

  }

})