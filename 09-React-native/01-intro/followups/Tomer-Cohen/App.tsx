// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Main from './comp/main';
import LoginPage from './comp/loginPage';
import UrDog from './comp/urDog';
import urDog from './comp/urDog';
import SecondPage from './comp/secondPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'our dogs' }}
        />
        <Stack.Screen
          name="UrDog"
          component={UrDog}
          options={{ title: 'Ur dog' }}
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{ title: 'SecondPage' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
