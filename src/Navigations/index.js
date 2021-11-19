import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screens/Unauth/Login";
import ForgetPassword from "../Screens/Unauth/ForgetPassword";
import Splash from "../Screens/Unauth/Splash";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyProfile from "../Screens/Auth/MyProfile";
import MyOrders from "../Screens/Auth/MyOrders";
import Settings from "../Screens/Auth/Settings";
import Login from "../Screens/Login";
import Home from "../Screens/Home";

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  function DrawerNavigator() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name={"MyProfile"} component={MyProfile} />
        <Drawer.Screen name={"MyOrders"} component={MyOrders} />
        <Drawer.Screen name={"Settings"} component={Settings} />
      </Drawer.Navigator>
    );
  }
  function StackNavigator() {
    return (
      <Stack.Navigator
        initialRouteName={DrawerNavigator}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={"Splash"} component={Splash} />
        <Stack.Screen name={"Login"} component={Login} />
        <Stack.Screen name={"ForgetPassword"} component={ForgetPassword} />
        <Stack.Screen name={"DrawerNavigator"} component={DrawerNavigator} />
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
