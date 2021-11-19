import React from "react";
import { Image, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { scale } from 'react-native-size-matters'
import Login from "../Screens/Unauth/Login";
import ForgetPassword from "../Screens/Unauth/ForgetPassword";
import Splash from "../Screens/Unauth/Splash";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyProfile from "src/Screens/Auth/MyProfile";
import MyOrders from "src/Screens/Auth/MyOrders";
import Settings from "src/Screens/Auth/Settings";
import DashBoard from "src/Screens/Auth/DashBoard";
import OrderRequest from "src/Screens/Auth/OrderRequest";
import ActiveOrder from "src/Screens/Auth/ActiveOrder";
import theme from 'src/Utils/theme'
import fonts from "src/Utils/fonts";
import DrawerView from "src/Components/DrawerView";

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  function TabNavigator() {
    return (
      <Tab.Navigator
        initialRouteName={DashBoard}
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: fonts.JosefinSans_Regular,
            fontSize: scale(12),
            margin: 0
          },
          tabBarActiveTintColor: theme.YELLOW,
          tabBarInactiveTintColor: theme.WHITE,
          tabBarStyle: {
            backgroundColor: theme.BACKGROUND,
            height: scale(65),
            padding: 0
          },
          tabStyle: {
          },
        }}>
        <Tab.Screen name={'DashBoard'} component={DashBoard}
          options={{
            tabBarLabel: 'DashBoard',
            tabBarIcon: ({ focused }) => {
              return (
                // <View style={{
                //   alignItems: 'center',
                //   width: '100%',
                //   borderTopWidth: 3,
                //   borderColor: theme.YELLOW,
                // }}>
                <Image
                  source={require('src/Assets/images/dashboard.png')}
                  style={{
                    tintColor: focused ? theme.YELLOW : theme.WHITE,
                    height: scale(18),
                    width: scale(18),
                    padding: 0
                  }} />
                // </View>
              )
            }
          }} />
        <Tab.Screen name={'OrderRequest'} component={OrderRequest}
          options={{
            tabBarLabel: 'Order Request',
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require('src/Assets/images/order.png')}
                  style={{
                    tintColor: focused ? theme.YELLOW : theme.WHITE,
                    height: scale(18),
                    width: scale(18)
                  }} />
              )
            }
          }} />
        <Tab.Screen name={'ActiveOrder'} component={ActiveOrder}
          options={{
            tabBarLabel: 'Request Response',
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require('src/Assets/images/request.png')}
                  style={{
                    tintColor: focused ? theme.YELLOW : theme.WHITE,
                    height: scale(20),
                    width: scale(20)
                  }} />
              )
            }
          }} />
      </Tab.Navigator>
    )
  }

  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        drawerContent={({ props, navigation }) => <DrawerView {...props} navigation={navigation} />}
        screenOptions={{
          headerShown: false,
          drawerPosition: 'right',
        }}>
          <Drawer.Screen name={'DashBoard'} component={DashBoard} />
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
        <Stack.Screen name={'TabNavigator'} component={TabNavigator} />
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
