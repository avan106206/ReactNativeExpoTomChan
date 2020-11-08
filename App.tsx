import React, { Component } from 'react';
import Feed from './component/feed'
import Detail from './component/detail'
import Home from './component/Screen/drawer/Home'
import Contacts from './component/Screen/drawer/Contacts'
import Favorites from './component/Screen/drawer/Favorites'
//import Setting from './component/Screen/drawer/Settings'

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack';
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Provider } from 'react-redux';

import store from './redux'
import Timer from './component/Common/Timer/container';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
//const MaterialBottomTabs = createMaterialBottomTabNavigator();
//const MaterialTopTabs = createMaterialTopTabNavigator();

const App = () =>{
  const Stack = createStackNavigator();
  const createHomeStack = () =>
    <Stack.Screen name="Feed" component={Feed}/>
  

  return(
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={createHomeStack}/>
          <Drawer.Screen name="Contacts" component={Contacts}/>
          <Drawer.Screen name="Favorites" component={Favorites}/>
          <Drawer.Screen name="Timer" component={Timer}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
    
  )
}

export default App;
