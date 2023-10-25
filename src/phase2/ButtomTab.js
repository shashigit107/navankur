import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './Dashboard';
import Order from './Order';
import Payment from './Payment';
import Product from './Product';
const Tab = createBottomTabNavigator();
// options={{
//     tabBarLabel: "Home",
//     tabBarIcon: ({ color }) => (
//       <MaterialCommunityIcons name="home" color={color} size={26} />
//     ),
//   }}
export default function MyTabs() {
    return (
        <Tab.Navigator
        
          screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBarStyle,
            tabBarHideOnKeyboard: true,
          }}
          initialRouteName={'Dashboard'}
        >
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, tintColor }) => {
                      return <View style={styles.icon}><Text style={styles.text}>Icon</Text></View>
                    }
                  }}
            />
            <Tab.Screen
                name="Order"
                component={Order}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, tintColor }) => {
                      return <View style={styles.icon}><Text style={styles.text}>Icon</Text></View>
                    }
                  }} 
                />
            <Tab.Screen
                name="Payment"
                component={Payment} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, tintColor }) => {
                      return <View style={styles.icon}><Text style={styles.text}>Icon</Text></View>
                    }
                  }}
                />
            <Tab.Screen
                name="Product"
                component={Product}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, tintColor }) => {
                      return <View style={styles.icon}><Text style={styles.text}>Icon</Text></View>
                    }
                  }}
                 />

        </Tab.Navigator>
    );
}

const styles=StyleSheet.create({
    icon:{
        height:40,width:40,
         backgroundColor:"grey",
         borderRadius:20,
         margin:10,
         justifyContent:"center",
         alignContent:"center",
         alignSelf:"center",
         alignItems:"center"
    },
    text:{
      fontWeight:"bold",
    },
    tabBarStyle:{
        width:"100%",
        height:80,
        paddingBottom:8,
        
    }
})