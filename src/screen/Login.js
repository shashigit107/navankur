import {
    View, Text,Alert, StyleSheet,BackHandler, ImageBackground,
    TextInput,
    TouchableOpacity,
    Dimensions, StatusBar, SafeAreaView
} from 'react-native'
import React,{useEffect} from 'react'
// import { string } from '../Constant/String'
import image from '../Constant/image'
const { width, height } = Dimensions.get("screen")


export default function Login({navigation,...props}) {
    // const navigation=useNavigation()
    useEffect(()=>{
        const backAction=()=>{
            Alert.alert("Stop", "Are you want to exit app",[
            {
                text:"Cancel",
                onPress:()=>null,
                style:"Cancel"
                
            },{
                text: "Yes",
                onPress:()=>BackHandler.exitApp()
            }
            ])
            return true
        }
        const backHandler=BackHandler.addEventListener(
            "hardwareBackPress", backAction
        )
        },[])


    const clickHandler=()=>{
        navigation.navigate("phaseScreen")//Home
    }
    return (
        <SafeAreaView>
            <StatusBar
                translucent backgroundColor='transparent'
            />

            <View style={style.container}>
                <ImageBackground
                    style={{ height: height, width: width }}
                    source={image.tutorial1}
                >
                    <View style={style.containerContent}>
                        <Text style={{ top: -120, alignSelf: "center", color: "black", fontWeight: 'bold', fontSize: 25 }}>CropSense</Text>
                        <TextInput
                            style={style.InputField}

                            placeholder="Enter your email"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <TextInput
                            style={style.InputField}
                            placeholder="Enter your password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}

                        />
                        <TouchableOpacity onPress={clickHandler} style={style.button}>
                            <Text style={style.text}>Login</Text>

                        </TouchableOpacity>

                    </View>


                </ImageBackground>



            </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green"
    },
    containerContent: {
        flex: 1,
        justifyContent: "center",
        alignSelf: 'center'
    },
    button: {

        top: 100,
        backgroundColor: "black",
        width: 110,
        alignSelf: 'center',
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        borderRadius: 8
    },
    text: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center"
    },

    InputField: {
        backgroundColor: "white",
        width: width - 40,
        height: "6%",
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20,
        marginBottom: 20


    },


})