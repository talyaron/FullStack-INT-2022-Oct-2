import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Login from './pages/Login';


const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <div>
      <Stack.Navigator>
        <Stack.Group>
            <Stack.Screen name='test' component={Login}/>
        </Stack.Group>
      </Stack.Navigator>
    </div>
  )
}

export default StackNavigator
