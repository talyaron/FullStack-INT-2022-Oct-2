import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import MoviesForRentScreen from "../screens/MoviesForRentScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{ headerShown: false ,headerTitle: ""}} 
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
        options={{ headerShown: false,headerTitle: "",
      }}
      />
      <Stack.Screen
        name="MoviesForRentStack"
        component={MoviesForRentScreen}
        options={{ headerShown: false,headerTitle: "" }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
