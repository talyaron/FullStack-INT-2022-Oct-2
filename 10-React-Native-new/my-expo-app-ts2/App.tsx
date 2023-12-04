import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoScreen from './screen/TodoScreen';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import About from './screen/About';
import Home from './screen/HomeScreen';
import { Button } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';



// Stack navigator
const Stack = createNativeStackNavigator();

// Tab navigation
// const Tab = createBottomTabNavigator()
const Tab = createMaterialBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();


// Drawer navigation
const Drawer = createDrawerNavigator();

const TabsStack = () => {
  return (
    <Tab.Navigator
        initialRouteName="Home Screen"
        shifting={true}
        labeled={false}
        sceneAnimationEnabled={false}
        activeColor="#00aea2"
        inactiveColor="#95a5a6"
        barStyle={{ backgroundColor: '#ffff' }}
        // activeColor="#f0edf6"
        // inactiveColor="#3e2465"
        // barStyle={{ backgroundColor: barColor }}
      >
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: "My Home",
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" size={24} color="blue" />
            )
          }} name="Home screen" component={HomeStack} />
        <Tab.Screen
          name="Todo Screen"
          options={{
            tabBarLabel: "Todo List",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="add-to-list" size={24} color="red" />
            )
          }}
          component={TodoScreen} />
      </Tab.Navigator>
  );
}

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Home"
        options={{
          headerShown: false,
        }}
        component={Home} />
      <Stack.Screen name="Todo App"
        options={{
          title: "Todo List",
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "white",
          headerRight: () => {
            const navigation: any = useNavigation()
            return (
              <Button textColor='white' onPress={() => { navigation.navigate("About", { name: "Yuri" }) }}> Go to About </Button>
            )
          }
        }}
        component={TodoScreen} />
    </Stack.Navigator>
  )
}

export default function App({}) {
  const [barColor, setBarColor] = useState("tomato")


  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen options={{ drawerLabel: 'Home' }} name="Home Screen" component={TabsStack} />
        <Drawer.Screen options={{ drawerLabel: 'Todo' }} name="Todo Screen" component={TabsStack} />
      </Drawer.Navigator>
      {/* <Tab.Navigator
        initialRouteName="Home"
        shifting={true}
        labeled={false}
        sceneAnimationEnabled={false}
        activeColor="#00aea2"
        inactiveColor="#95a5a6"
        barStyle={{ backgroundColor: '#ffff' }}
        // activeColor="#f0edf6"
        // inactiveColor="#3e2465"
        // barStyle={{ backgroundColor: barColor }}
        style={{ marginTop: 20 }}
      >
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: "My Home",
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" size={24} color="blue" />
            )
          }} name="Home screen" component={HomeStack} />
        <Tab.Screen
          name="Todo"
          options={{
            tabBarLabel: "Todo List",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="add-to-list" size={24} color="red" />
            )
          }}
          component={TodoScreen} />
      </Tab.Navigator> */}
      <StatusBar style='auto' />
    </NavigationContainer>
    // <View style={styles.container}>
    //   {/* <TodoScreen/> */}
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "row",
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
});
