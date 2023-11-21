/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/screens/HomePage';
import AboutPage from './src/screens/AboutPage';
import Counter from './src/screens/Counter';
import RandomBox from './src/screens/RandomBox';
import ChangeBoxColor from './src/screens/ChangeBoxColor';
import PasswordScreen from './src/screens/PasswordScreen';
import DesignPage from './src/screens/DesignPage';
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="AboutPage" component={AboutPage} />
        <Stack.Screen name="RandomBox" component={RandomBox} />
        <Stack.Screen name="ChangeBoxColor" component={ChangeBoxColor} />
        <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
        <Stack.Screen name="DesignPage" component={DesignPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
