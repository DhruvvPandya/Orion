import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Unauth/Login';
import ForgetPassword from '../Screens/Unauth/ForgetPassword';
import Splash from '../Screens/Unauth/Splash';

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
        <Stack.Screen name={'Splash'} component={Splash}/>
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'ForgetPassword'} component={ForgetPassword} />

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
