import React, { useEffect, useState } from "react";
import { Image } from 'react-native';
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
import DeviceInfo from 'react-native-device-info';
import OrderDetails from "../Screens/Auth/OrderDetails";
import PreviewOrder from "../Screens/Auth/PreviewOrder";
import { getSessionData } from "src/Utils/asyncStorage";
import * as Api from "src/Utils/Api";
import ApiConstants from "src/Utils/apiConstants";
import Snackbar from 'react-native-snackbar';

const hasNotch = DeviceInfo.hasNotch();

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const DashBoardStack = createNativeStackNavigator();
  const OrderRequestStack = createNativeStackNavigator();
  const ActiveOrderStack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();
  const [permission, setPermission] = useState("");

  const onDashBoardSuccess = async (data) => {
    console.log("data", data?.data?.user_permission);
    setPermission(data?.data?.user_permission)
  };

  const getPermissionList = () => {
    Api.getApicall(
      ApiConstants.BASE_URL + ApiConstants.ALL_SETTINGS,
      onDashBoardSuccess
    );
  };

  useEffect(() => {
    getPermissionList();
  }, []);

  console.log(' permission===tab', permission)
  function DashBoardNavigator() {
    return (
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

  function OrderRequestNavigator() {
    return (
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
        <OrderRequestStack.Screen name={'PreviewOrder'} component={PreviewOrder} />
      </OrderRequestStack.Navigator>

    )
  }

  function ActiveOrderNavigator() {
    return (
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
            height: Platform.OS === 'ios' && hasNotch ? scale(70) : scale(55),
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
                <Image
                  source={require('src/Assets/images/dashboard.png')}
                  style={{
                    tintColor: focused ? theme.YELLOW : theme.WHITE,
                    height: scale(18),
                    width: scale(18),
                    padding: 0
                  }} />
              )
            }
          }} />
        <Tab.Screen name={'OrderRequestNavigator'} component={OrderRequestNavigator}
          listeners={{
            tabPress: (e) => {
              !permission?.create_order_from_app && e.preventDefault('DashBoardNavigator'); // Use this to navigate somewhere else
              !permission?.create_order_from_app && Snackbar.show({
                text: 'Do not have permisson to Create Order',
                duration: Snackbar.LENGTH_SHORT,
              })
            },
          }}
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
            },
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
        <Stack.Screen name={'OrderDetails'} component={OrderDetails} />

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
