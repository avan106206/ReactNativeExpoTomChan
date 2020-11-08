import React from 'react';
import { Button, View, Text } from 'react-native';
import { styles } from '../../styles/styles'
import Contacts from './Contacts'
import { createStackNavigator } from '@react-navigation/stack';



const Home = () => {  
  const Stack = createStackNavigator();
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Stack.Navigator>
            <Stack.Screen name = "Contacts" component = {Contacts}/>
        </Stack.Navigator>
        <Button
            title="Go to Profile"
            onPress={() => this}
        />
    </View>
        
  )
}

export default Home;