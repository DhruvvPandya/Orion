import React from "react";
import { Image, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { scale } from 'react-native-size-matters'
import Login from "../Screens/Unauth/Login";
import ForgetPassword from "../Screens/Unauth/ForgetPassword";
import Splash from "../Screens/Unauth/Splash";
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
  const DashBoardStack = createNativeStackNavigator();
  const OrderRequestStack = createNativeStackNavigator();
  const ActiveOrderStack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  function DashBoardNavigator(){
    return(
      <DashBoardStack.Navigator
      initialRouteName={DashBoard}
      screenOptions={{
        headerShown: false
      }}
      >
        <DashBoardStack.Screen 
        name={'DashBoard'} component={DashBoard}
        />
        <DashBoardStack.Screen name={"MyProfile"} component={MyProfile} />
        <DashBoardStack.Screen name={"MyOrders"} component={MyOrders} />
        <DashBoardStack.Screen name={"Settings"} component={Settings} />

      </DashBoardStack.Navigator>

    )
  }

  function OrderRequestNavigator(){
    return(
      <OrderRequestStack.Navigator
      initialRouteName={OrderRequest}
      screenOptions={{
        headerShown: false
      }}
      >
        <OrderRequestStack.Screen 
        name={'OrderRequest'} component={OrderRequest}
        />
        <OrderRequestStack.Screen name={"MyProfile"} component={MyProfile} />
        <OrderRequestStack.Screen name={"MyOrders"} component={MyOrders} />
        <OrderRequestStack.Screen name={"Settings"} component={Settings} />

      </OrderRequestStack.Navigator>

    )
  }

  function ActiveOrderNavigator(){
    return(
      <ActiveOrderStack.Navigator
      initialRouteName={OrderRequest}
      screenOptions={{
        headerShown: false
      }}
      >
        <ActiveOrderStack.Screen 
        name={'ActiveOrder'} component={ActiveOrder}
        />
        <ActiveOrderStack.Screen name={"MyProfile"} component={MyProfile} />
        <ActiveOrderStack.Screen name={"MyOrders"} component={MyOrders} />
        <ActiveOrderStack.Screen name={"Settings"} component={Settings} />

      </ActiveOrderStack.Navigator>

    )
  }

  function TabNavigator() {
    return (
      <Tab.Navigator
        initialRouteName={DashBoardNavigator}
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
            height: scale(55),
            padding: 0
          },
          tabStyle: {
          },
        }}>
        <Tab.Screen name={'DashBoardNavigator'} component={DashBoardNavigator}
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
        <Tab.Screen name={'OrderRequestNavigator'} component={OrderRequestNavigator}
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
        <Tab.Screen name={'ActiveOrderNavigator'} component={ActiveOrderNavigator}
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

 
  function StackNavigator() {
    return (
      <Stack.Navigator
        initialRouteName={TabNavigator}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={"Splash"} component={Splash} />
        <Stack.Screen name={"Login"} component={Login} />
        <Stack.Screen name={"ForgetPassword"} component={ForgetPassword} />
        <Stack.Screen name={'TabNavigator'} component={TabNavigator} />
        <Stack.Screen name={'MyProfile'} component={MyProfile} />
        <Stack.Screen name={'MyOrders'} component={MyOrders} />
        <Stack.Screen name={'Settings'} component={Settings} />

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
