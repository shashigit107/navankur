import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { string } from '../Constant/String'
import { useNavigation } from '@react-navigation/native'
import image from '../Constant/image'
import CustomInput from '../component/CustomInput'
import CustomButton from '../component/CustomButton'

export default function ProfileScreen() {
  const navigation = useNavigation()
  const backHandler = () => {
    navigation.goBack()

  }
  const renderHeader = () => {
    return (
      <View style={styles.headerStyle}>
        <TouchableOpacity onPress={backHandler}>
          <Text style={styles.backIcon}>{string.profile}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  const renderProfile = () => {
    return (
      <View style={{ alignSelf: "center", top: -70 }}>
        <Image resizeMode='cover' style={styles.imageStyle} source={image.tutorial3} />
        <Text style={styles.profileText}>Change Picture</Text>
      </View>
    )
  }
  const renderInputField = () => {
    return (
      <View style={styles.inputContainer}>
        <CustomInput
          userName="shashi Ranjan"
          containerStyle={styles.customInput}
          userType="User name"
        />
        <CustomInput
          userName="shashi.vais12@gmail.com"
          containerStyle={styles.customInput}
          userType="Email I'd"
        />
        <CustomInput
          userName="8789567265"
          containerStyle={styles.customInput}
          userType="Phone Number"
        />
        <CustomInput
          userName="Location"
          containerStyle={styles.customInput}
          userType="Aravali Apartment"
        />
      </View>
    )
  }
  const renderBottom = () => {
    return (
      <View style={{ flex: .1 , }}>
        <CustomButton 
        buttomNme="Update"
        style={{ top:-20,marginHorizontal:16}}
        />
      </View>
    )

  }
  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderProfile()}
      {renderInputField()}
      {renderBottom()}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    flex: .6,
    bottom: 40
  },
  backIcon: {
    fontSize: 30, marginTop: 40, marginLeft: 20, color: "white"
  },
  imageStyle: {
    width: 150, height: 150,
    borderRadius: 75,
    borderWidth: 6,
    borderColor: "white"
  },
  profileText: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
    alignSelf: "center"
  },
  customInput: {
    marginHorizontal: 16
  },
  headerStyle: {
    backgroundColor: "green",
    flex: .3,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 100,
    borderTopRightRadius: 130,
  }

})