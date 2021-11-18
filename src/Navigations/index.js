import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  function StackNavigator() {
    return (
      <Stack.Navigator
        initialRouteName={Login}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={'Login'} component={Login} />
      </Stack.Navigator>
    );
  }
  return (
    <>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
};
export default Navigation;
