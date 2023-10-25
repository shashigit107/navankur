import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenu from '../screen/MainMenu';
// import login from '../screen/Login';
import Login from '../screen/Login';
import Tutorial from '../screen/Tutorial';
import Home from '../screen/Home';
import ExportScreen from '../screen/ExportScreen';
import ProfileScreen from '../screen/ProfileScreen';
import MyTabs from '../phase2/ButtomTab';
import phaseScreen from '../screen/phaseScreen';





const Stack = createNativeStackNavigator();


function Navigation() {
    console.log("hey-----")
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                }}

            >
                <Stack.Screen name="Tutorial" component={Tutorial} />
                <Stack.Screen name="MainMenu" component={MainMenu} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ExportScreen" component={ExportScreen} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                <Stack.Screen name="MyTabs" component={MyTabs} />
                <Stack.Screen name="phaseScreen" component={phaseScreen} />




            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigation