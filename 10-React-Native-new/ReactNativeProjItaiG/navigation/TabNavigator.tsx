import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import WatchlistScreen from "../screens/WatchlistScreen";
import MoviesForRentScreen from "../screens/MoviesForRentScreen";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
<Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'HomeTab') {
        iconName = focused ? 'ios-home' : 'ios-home-outline';
      } else if (route.name === 'MoviesForRentTab') {
        iconName = focused ? 'ios-film' : 'ios-film-outline';
      } else if (route.name === 'WatchlistTab') {
        iconName = focused ? 'ios-list' : 'ios-list-outline';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  }}
>
  <Tab.Screen name="HomeTab" component={StackNavigator} />
  <Tab.Screen name="MoviesForRentTab" component={MoviesForRentScreen} />
  <Tab.Screen name="WatchlistTab" component={WatchlistScreen} />
</Tab.Navigator>

  );
};

export default TabNavigator;
