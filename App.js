import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Components
import Map from './src/components/Map';
import Contatos from './src/components/Contatos';
import Produtos from './src/components/Produtos';
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
          tabBarIcon : () => (<Icon name='account' size={48}/>)
        }}
        name='Contatos' component={Contatos}/>
        <Stack.Screen
        options={{
          tabBarLabel : 'Produtos',
          tabBarIcon : () => (<Icon name='basket' size={28}/>)
        }}
        name='Produtos' component={Produtos}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}