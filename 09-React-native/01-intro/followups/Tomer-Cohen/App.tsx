// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import SecondPage from './comp/secondPage';
import LoginPage from './comp/loginPage';

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
          name="SecondPage"
          component={SecondPage}
          options={{ title: 'Second Page' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
