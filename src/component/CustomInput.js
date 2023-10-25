import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get("screen")

export default function CustomInput({
    userName=false,
    containerStyle={defaultStyle},
    userType=false
}) {
    return (
        <View style={{ flex: 1, ...containerStyle}}>
            <Text style={styles.text}>{userType}</Text>
            <TextInput
                placeholder='default'
                style={styles.input}
                editable={false}
                // onChangeText={onChangeNumber}
                value={userName}
                keyboardType="numeric"
            >

            </TextInput>

        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        width:"100%",
        // backgroundColor: "grey",
        borderWidth: 1,
        borderColor: "grey",
        padding: 10,
        borderRadius: 8,
        fontSize:16,
        color:"black",
        fontWeight:"500"
    },
    text:{
        fontSize:18,
        fontWeight:"bold",
        color:"black",
        paddingBottom:6,
        },
    defaultStyle:{
     marginHorizontal:16
    }
})