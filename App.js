import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLogInScreen from './screens/SignupLoginScreen';
import ExchangeScreen from './screens/exchangeScreen';
import HomeScreen from './screens/homeScreen';
import {createAppContainer,switchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <SignUpLogInScreen/>
      <Tab.Navigator>
        <Tab.Screen name="Home Screen" component={HomeScreen} />
        <Tab.Screen name="Exchange Screen" component={ExchangeScreen} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavigator = createBottomTabNavigator({
  HomeScreen: HomeScreen,
  ExchangeScreen: ExchangeScreen,
})
const AppContainer = createAppContainer({switchNavigator})