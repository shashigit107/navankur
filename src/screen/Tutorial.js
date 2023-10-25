import { View, Text, StyleSheet, Animated,SafeAreaView, StatusBar,
     FlatList, Dimensions, TouchableOpacity, Alert, BackHandler } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Navigation from '../navigation/Navigation';
// import Animated from 'react-native-reanimated'
const { width, height } = Dimensions.get("window")
import { PanGestureHandler , GestureHandlerRootView} from 'react-native-gesture-handler';


export default function Tutorial({ navigation }) {
    const swipe = useRef(new Animated.Value(0)).current
    const animation = useRef(new Animated.Value(0)).current;
    const [count, setCount] = useState(0)
    const animation2 = useRef(new Animated.Value(0)).current
    const scrolx = useRef(new Animated.Value(0)).current
    const [indexValue, setIndexValue] = useState(0)
    const [startSwipe, setStartSwipe] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            Animated.timing(animation2, {
                
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }).start()
        }, 1500)


    }, [])

// useEffect(()=>{
// const backAction=()=>{
//     Alert.alert("Stop, Are you want to exit app",[
//     {
//         text:"Cancel",
//         onPress:()=>null,
//         style:"Cancel"
        
//     },{
//         text: "Yes",
//         onPress:()=>BackHandler.exitApp()
//     }
//     ])
//     return true
// }
// const backHandler=BackHandler.addEventListener(
//     "hardwareBackPress", backAction
// )
// },[])







    const rotation = {
        transform: [
            {
                rotate: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "90deg"],
                }),
            },
            {
                translateY: animation2.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 350]
                }
                )

            }

        ],

    }
    const textUpAnimation = {
        transform: [
            {
                translateY: animation2.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -340]
                }
                )

            }

        ]
    }

    const swipeUpAnimation = {
        transform: [
            {
                translateY: swipe.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -90]
                }
                )

            }

        ]
    }
    const textDescriptionAnimation = {
        transform: [
            {
                translateY: animation2.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -310]
                }
                )
            }
        ]
    }

    const animatedPagination = {
        transform: [
            {
                translateY: animation2.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -40]
                }
                )
            }
        ]
    }





    const cercle1 = () => {
        return (
            <View style={{
                width: 400, height: 400,
                backgroundColor: '#f5f5f5', borderWidth: 15, borderColor: "#dcdcdc",
                borderRadius: 200
            }}>

            </View>
        )
    }
    const cercle2 = (color) => {
        return (
            <View style={{
                width: 220, height: 220, elevation: 12,
                backgroundColor: color, borderWidth: 10, borderColor: "white",
                borderRadius: 110
            }}>

            </View>
        )

    }
    const swiperStartAnimation = () => {
        console.log("hey i am click ")
        if (count < 3) {
            let toValue = count + 1
            Animated.spring(animation, {
                toValue,
                friction: 10,
                useNativeDriver: true
            }).start()
            setCount(toValue)
        }
    }
    const rotateAnimation = () => {
        return (

            <Animated.View style={[{}, rotation]}>
                <View style={[{ flex: 1, alignItems: "center", top: -550, backgroundColor: "#f5f5f5" }]}>
                    <View style={{ flex: 1, position: "absolute", }}>
                        {cercle1()}
                    </View>

                    <View style={{ flex: 1, position: "absolute", left: -150, top: 75 }}>
                        {cercle2("red")}
                    </View>
                    <View style={{ flex: 1, position: "absolute", top: -125 }}>
                        {cercle2("blue")}
                    </View>
                    <View style={{ flex: 1, position: "absolute", right: -150, top: 75 }}>
                        {cercle2("green")}
                    </View>
                    <View style={{ flex: 1, position: "absolute", top: 300, }}>
                        {cercle2("yellow")}
                    </View>

                </View>
            </Animated.View>


        )
    }
    const renderSlideUpAnimation = () => {
        return (
            <Animated.View style={[{
                flexDirection: "column", flex: 1, position: "absolute",
                bottom: height/2,
                justifyContent:"center",
                alignItems:"center",
                alignSelf: "center"
            },textUpAnimation]}>
                <Text style={{ fontSize: 18, fontWeight: '800', color: "black", fontStyle: "italic" }}>CropSense</Text>
            </Animated.View>
        )
    }
    const renderSlideTextDescriptionAnimation = () => {
        return (
            <Animated.View style={[{
                flexDirection: "column", flex: 1, position: "absolute",
                bottom: -230,
                alignSelf: "center"
            }, textDescriptionAnimation]}>
                <Text style={{ paddingBottom: 20, alignSelf: "center", fontSize: 30, color: "green", fontStyle: "italic" }}>Stay informed</Text>

                <Text style={{ padding: 16, fontSize: 20, fontWeight: "500", fontStyle: 'italic' }}>Our platForm includes
                    a notification system thst Keeps
                    your informed of critical updates, including timely implement
                    of fertilization schedules, irrigation adjustments, and pest control measures.
                </Text>

            </Animated.View>
        )
    }

    const renderElement = () => {
        return (
            <View style={{ flex: 1, height: height, width: width, backgroundColor: "tranparent" }}>
                <TouchableOpacity onPress={swiperStartAnimation}>
                    <Text>{ }</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const handleScrollPagination = (event) => {
        const scrolling = event.nativeEvent.contentOffset.x;
        let index = scrolling / width

        setIndexValue(Math.round(index))

    }
    const renderInvisibleFlatlist = () => {
        return (
            <FlatList
                onScrollEndDrag={() => swiperStartAnimation()}
                onScroll={handleScrollPagination}
                // ref={scrolx}
                horizontal={true}
                pagingEnabled={true}
                data={["1", "2", "3", "4"]}
                renderItem={renderElement}
                showsHorizontalScrollIndicator={false}
            />
        )
    }

    const renderBottomPagination = (data) => {
        if (startSwipe == false) {
            if (indexValue == 3) {
                setTimeout(() => {
                    setStartSwipe(true)
                }, 1000);
            }

            return (
                <Animated.View style={[{ flex: 1, position: "absolute",bottom:-10, flexDirection: "row", alignSelf: "center" }, animatedPagination]}>
                    {
                        data.map((_, index) => {
                            console.log("index----", index, indexValue)
                            if (indexValue == index) {
                                return <View style={{ width: 20, marginHorizontal: 5, borderRadius: 4, height: 8, backgroundColor: "green" }}></View>

                            } else {
                                return (
                                    <View style={{ width: 20, marginHorizontal: 5, borderRadius: 4, height: 8, backgroundColor: "grey" }}></View>

                                )
                            }

                        })
                    }

                </Animated.View>
            )

        }

    }
   
    const [translationY, setY]=useState(new Animated.Value(0))
  
 
    

console.log(" ",translationY)
   const onPanGesturevent=Animated.event(
    // console.log("hey---gesture")
    [
        {
            nativeEvent:{
                translationY:translationY
                
            }
        }
    ],
    {
      listener:(event)=>{
       
        console.log(Math.abs(Math.floor(event.nativeEvent.translationY)))
       if(Math.floor(event.nativeEvent.translationY)<75){
        setY(new Animated.Value(0))
        navigation.navigate("Login")
       }

      }
    },
    {
        useNativeDriver: true
    }
   )
    const swipeUp = () => {
        Animated.spring(swipe, {
            toValue: 1,
            friction: 10,

            useNativeDriver: true
        }).start()

        return (
          
            
            <Animated.View style={[{
                position: "absolute", flex: 1,
                bottom: -53, alignSelf: "center",

                flexDirection: "column"
            }, swipeUpAnimation]}>
                  <GestureHandlerRootView>
                <PanGestureHandler onGestureEvent={onPanGesturevent}>
                <Animated.View style={[{
                    transform:[
                        {
                            translateY:translationY
                        }
                    ]
                }]}>
                    <Text style={{ alignSelf: "center", top: 40, fontSize: 25, fontWeight: "600" }}>^</Text>
                    <Text style={{ alignSelf: "center", top: 20, fontSize: 30, fontWeight: "600" }}>^</Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Swipe up</Text>
                </Animated.View>
                </PanGestureHandler>
                </GestureHandlerRootView>

            </Animated.View>
            
           
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          translucent backgroundColor='transparent'
        />
        
        <View style={{ flex: 1, }}>
            {rotateAnimation()}
            {renderSlideUpAnimation()}
            {renderSlideTextDescriptionAnimation()}
            {renderInvisibleFlatlist()}

            {startSwipe ? swipeUp() : renderBottomPagination(["1", "2", "3", "4"])}


        </View>
        </SafeAreaView>






    )
}

const styles = StyleSheet.create({

});