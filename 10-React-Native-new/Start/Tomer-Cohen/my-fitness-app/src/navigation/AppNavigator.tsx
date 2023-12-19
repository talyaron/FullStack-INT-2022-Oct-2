import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExerciseLibraryScreen from '../screens/ExerciseLibraryScreen';
import CustomWorkoutScreen from '../screens/CustomWorkoutScreen';
import ProgressScreen from '../screens/ProgressScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
  
            if (route.name === 'Home') {
              iconName = 'home-outline'; 
            } else if (route.name === 'Library') {
              iconName = 'fitness-outline'; 
            } else if (route.name === 'Custom') {
              iconName = 'create-outline';
            } else if (route.name === 'Progress') {
              iconName = 'stats-chart-outline'; 
            } else if (route.name === 'Profile') {
              iconName = 'person-outline';
            }
  
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Library" component={ExerciseLibraryScreen} />
        <Tab.Screen name="Custom" component={CustomWorkoutScreen} />
        <Tab.Screen name="Progress" component={ProgressScreen} />
        <Tab.Screen name="Profile" component={UserProfileScreen} />
      </Tab.Navigator>
    );
  };
  
  export default AppNavigator;
  
