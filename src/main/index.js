import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Calculator from '../screens/Calculator';
import Memory from '../screens/Memory';
import Credits from '../screens/Credits';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#e0554a',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'normal',
            },
          }}
          name="Home"
          component={Home}
        />

        <Stack.Screen 
          options={{
            headerStyle: {
              backgroundColor: '#e0554a',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'normal',
            },
          }}
          name="Calculator" 
          component={Calculator} 
        />

        <Stack.Screen 
          options={{
            headerStyle: {
              backgroundColor: '#e0554a',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'normal',
            },
          }}
          name="Memory" 
          component={Memory} 
        />

        <Stack.Screen 
          options={{
            headerStyle: {
              backgroundColor: '#e0554a',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'normal',
            },
          }}
          name="Credits" 
          component={Credits} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;