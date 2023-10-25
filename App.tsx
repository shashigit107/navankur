/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Home from './src/screen/MainMenu';
import Navigation from './src/navigation/Navigation';




function App() {
 

  const backgroundStyle = {
    backgroundColor: "white"
  };

  return (
   
      <Navigation/>
   
  );
}
 



export default App;
