// AppNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/home/Home';
import Signin from './src/screens/auth/signin/Signin';
import SignUp from './src/screens/auth/signup/Signup';
import Add from './src/screens/add/Add';
import Update from './src/screens/update/Update';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName={user ? 'Home' : 'Signin'}>
        <Stack.Screen name="Update" component={Update} options={{ headerShown: false }} />
        <Stack.Screen name="Add" component={Add} options={{ headerShown: false }} />
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
