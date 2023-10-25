import {
  View,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  FlatList,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar
} from 'react-native'
import React from 'react'
import { productItem } from '../Constant/dataHouse'
import image from '../Constant/image'
import { Value } from 'react-native-reanimated'
const { width, height } = Dimensions.get("screen")
// image

export default function Dashboard() {
  const renderHeader = () => {
    return (
      <View>
        <Text style={styles.title}>Marketplace</Text>
        <Text style={styles.text}>In the marketplace section, you can review and manage all product with details</Text>
      </View>
    )
  }
  const renderSearchBar = () => {
    return (

      <View style={styles.inputFields}>
        <View style={styles.icon}><Text>Icon</Text></View>
        <TextInput
          placeholder='Search for product name...'
          style={styles.searchInput}
        />
      </View>


    )
  }

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image resizeMode='cover' style={styles.imageStyle} source={image.tutorial3} />

      </View>
    )
  }
  const renderItems = () => {
    return (
        <>
          {productItem.map((element) => {
            return (

              <View style={styles.productContainer}>
                <View style={[styles.type, { backgroundColor: element.productType=="organic" ? "green" :"yellow" }]}><Text>{element.productType}</Text></View>
                <Image resizeMode='cover' style={styles.imageStyle} source={image.tutorial3} />
                <Text>{element.productName}</Text>
                <Text>{element.price}</Text>

              </View>
            )
          })}
      </>

    )
  }

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent backgroundColor='transparent'
      />
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
      {renderHeader()}
      {renderSearchBar()}
      {/* {renderItems()} */}
      <View style={{flex:1, flexDirection:"row",
      justifyContent:"space-between",
       flexWrap:"wrap"}}>
        {renderItems()}
        

      </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    paddingRight:16,
    marginTop: 50
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10
  },
  text: {
    fontSize: 14
  },
  inputFields: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 10,
  },
  searchInput: {
    // backgroundColor: "white",
    // width: width - 40,
    // height: "6%",
    // borderRadius: 10,
    // padding: 10,
    // paddingHorizontal: 20,
    // marginBottom: 20

  },
  type: {
    position: "absolute",
    zIndex: 999,
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    right: 10,
    top: 4,



  },
  imageStyle: {
    width: 160,//(width / 2) - 30,
    height:150, //(height / 5) - 40
  },
  productContainer: {
    // flex: 1,
    flexDirection: "column",
    marginBottom:10,
  },

  icon: {
    height: 36, width: 35,
    backgroundColor: "grey",
    borderRadius: 17,
    margin: 10,
    justifyContent: "center",
    alignContent: "center",
    // alignSelf:"center",
    alignItems: "center"
  }
})