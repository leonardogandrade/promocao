import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Components
import Map from './src/components/Map';
import Contatos from './src/components/Contatos';
import Camera from './src/components/Camera';
import Sensores from './src/components/Sensores';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator
        tabBarOptions={{
          activeTintColor : 'red',
          inactiveTintColor : 'gray'
        }}>
        <Stack.Screen
        options={{
          tabBarLabel : 'Gps',
          tabBarIcon : () => (<Icon name='map-marker' size={28}/>)
        }}
        name='Gps' component={Map}/>
        <Stack.Screen
        options={{
          tabBarLabel : 'Contatos',
          tabBarIcon : () => (<Icon name='account' size={28}/>)
        }}
        name='Contatos' component={Contatos}/>
        <Stack.Screen
        options={{
          tabBarLabel : 'Camera',
          tabBarIcon : () => (<Icon name='camera' size={28}/>)
        }}
        name='Camera' component={Camera}/>
        <Stack.Screen
        options={{
          tabBarLabel : 'Sensores',
          tabBarIcon : () => (<Icon name='wifi' size={28}/>)
        }}
        name='Sensores' component={Sensores}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}