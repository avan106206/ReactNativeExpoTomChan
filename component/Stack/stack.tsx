import React from 'react';
import { View, Text } from 'react-native';
//import { styles } from '../../styles/styles'
import HomeScreen from '../Screen/drawer/Home'
import { createStackNavigator } from '@react-navigation/stack';

function MyStack() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    );
  }