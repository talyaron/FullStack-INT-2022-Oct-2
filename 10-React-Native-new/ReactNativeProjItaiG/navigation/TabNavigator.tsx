import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import WatchlistScreen from "../screens/WatchlistScreen";
import MoviesForRentScreen from "../screens/MoviesForRentScreen";
import RentedMoviesScreen from "../screens/RentedMoviesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        headerTitle: "",
        headerTransparent: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'ios-home' : 'ios-home-outline';
              break;
            case 'MoviesForRent':
              iconName = focused ? 'ios-film' : 'ios-film-outline';
              break;
            case 'Watchlist':
              iconName = focused ? 'ios-list' : 'ios-list-outline';
              break;
            case 'RentedMovies':
              iconName = focused ? 'ios-checkmark-circle' : 'ios-checkmark-circle-outline';
              break;
            case 'Settings':
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
              break;
            default:
              iconName = 'ios-alert';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="MoviesForRent" component={MoviesForRentScreen} />
      <Tab.Screen name="Watchlist" component={WatchlistScreen} />
      <Tab.Screen name="RentedMovies" component={RentedMoviesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
