import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dogs from "./pages/Dogs";
import Test from "./pages/Test";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="dogs"
          component={Dogs}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
