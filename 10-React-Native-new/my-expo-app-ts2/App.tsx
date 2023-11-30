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


// Stack navigator
const Stack = createNativeStackNavigator();

// Tab navigation
const Tab = createBottomTabNavigator()

// Drawer navigation

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='Home'>
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
              <Button textColor='white' onPress={() => {navigation.navigate("About",{name: "Yuri"})}}> Go to About </Button>
            )
          }
        }} 
        component={TodoScreen} />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen options={{
          tabBarLabel : "My Home",
          tabBarIcon: ({color, size}) => (
            <Feather name="home" size={24} color="blue" />
          )
        }} name="Home" component={Home} />
        <Tab.Screen
         name="Todo"
         options={{
          tabBarLabel : "Todo List",
          tabBarIcon: ({color, size}) => (
            <Entypo name="add-to-list" size={24} color="red" />
          )
         }}
        component={TodoScreen} />
      </Tab.Navigator>
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
