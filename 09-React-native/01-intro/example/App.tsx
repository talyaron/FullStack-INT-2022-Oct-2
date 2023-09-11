import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Breeds from './Breeds';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="breeds" component={Breeds} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;