import { View, Text, StyleSheet,Alert,BackHandler } from 'react-native'
import React,{useEffect} from 'react'
import { Neomorph } from 'react-native-neomorph-shadows';
import ManuComponent from '../component/ManuComponent';
export default function Home({ navigation }) {
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


    return (
        <View style={{ flex: 1, backgroundColor: '#dcdcdc', }}>
            <View style={styles.whiteContainer}>

            </View>
            <View style={{ position: "absolute",
             flexDirection: "column",right:0, top:280 }}>
                <View style={[styles.Icon,{ margin:8}]}><Text>Icon</Text></View>
                <View style={[styles.Icon,{margin:8}]}><Text>Icon</Text></View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                <View style={styles.Icon}><Text>Icon</Text></View>
                <Text style={{ fontSize: 23, color: "black", fontWeight: "bold" }}> IoT Sensor Connected </Text>
            </View>
            <View style={styles.whiteContainerStyle}>
                <View style={{ width: 160, height: 150, }}>
                    <Neomorph
                        darkShadowColor="#c0c0c0"
                        lightShadowColor="white"
                        style={[styles.containerStyle, { width: 160, height: 140 }]}
                    >
                        <Text style={{ color: "green", fontWeight: "700" }}>Weather</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ padding: 10, borderRadius: 18, backgroundColor: 'grey' }} >Icon</Text>
                            <Text style={{ paddingLeft: 20, color: "black", fontSize: 35, fontWeight: "bold" }}>13</Text>
                            <Text style={{ fontSize: 15, color: "black", fontWeight: "bold" }}>°C</Text>

                        </View>

                        <Text style={styles.box3Text}>Sri GnagaNagar, Raj</Text>



                    </Neomorph>

                </View>
                <View style={{ width: 100, left: 30, height: 50 }}>
                    <Neomorph
                        darkShadowColor="#c0c0c0" // <- set this
                        lightShadowColor="white" // <- this
                        style={[styles.containerStyle, { width: 160, height: 70 }]}
                    >
                        <Text style={{ color: "green", fontWeight: "700", paddingBottom: 5 }}>Irigation</Text>
                        <View style={{ height: 13, width: 115, right: -10, borderRadius: 5, backgroundColor: "blue" }} />
                    </Neomorph>
                </View>
                <View>
                    <Neomorph
                        darkShadowColor="#c0c0c0" // <- set this
                        lightShadowColor="white" // <- this
                        style={[styles.containerStyle, { width: 160, height: 160, top: 20 }]}
                    >
                        <View>
                            <Text style={styles.titleText}>Upcoming</Text>
                            <Text style={[styles.titleText, { top: -5 }]}>Tasks/Event</Text>

                            <Text style={styles.box3Text}>Organize season's produce</Text>
                            <Text style={styles.box3Text}>Harvest Axre no. 20</Text>

                        </View>
                    </Neomorph>
                </View>
                <View style={{ position: "absolute", flex: 1, bottom: 140, right: 12 }}>
                    <Neomorph
                        darkShadowColor="#c0c0c0" // <- set this
                        lightShadowColor="white" // <- this
                        style={[styles.containerStyle, { width: 160, height: 110 }]}
                    >
                        <Text style={styles.titleText}>Soil Fertility</Text>

                        <View style={styles.Block4Icon}><Text>Icon</Text></View>
                    </Neomorph>
                </View>
                <View style={{
                    flex: 1, flexDirection: "row",
                    alignSelf: "flex-end", left: 190, bottom: -30, position: "absolute"
                }}>
                    <ManuComponent />
                </View>

            </View>



        </View>



    )
}
const styles = StyleSheet.create({
    titleText: {
        color: "green",
        fontWeight: "700",
        paddingBottom: 5
    },
    containerStyle: {
        shadowOpacity: 1,
        elevation: .6,
        shadowRadius: 5,
        borderRadius: 30,
        backgroundColor: '#dcdcdc',

        marginHorizontal: 10,
        marginVertical: 10,
        padding: 10,
        paddingLeft: 15
    },
    whiteContainerStyle: {
        flex: 1,
        marginTop: 20,
        marginLeft: 10,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    box3Text: {
        fontSize: 15,
        fontWeight: "500",
        paddingVertical: 5

    },
    Block4Icon: {
        width: 120,
        height: 40,
        backgroundColor: "grey",
        borderRadius: 20,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"

    },
    whiteContainer: {
        backgroundColor: "green",
        flex: 1,
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200
    },
    Icon: {
        backgroundColor: 'grey',
        borderRadius: 20,
        width: 35,

        alignItems: 'center',
        justifyContent: "center",
        height: 35,
        
    }

})