import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Home';
import TodoDetails from '../Pages/TodoDetails';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Todo-details' component={TodoDetails} />
    </Stack.Navigator>
  )
}

export default StackNavigator;