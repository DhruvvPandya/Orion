import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { getSessionData } from "src/Utils/asyncStorage";

const Splash = () => {
  const navigation = useNavigation();
  useEffect( () => {
    setTimeout(async () => {
      await SplashScreen.hide();
      const getLoginToken =  await getSessionData('LoginToken');
      if (getLoginToken === null) {
        console.log('getAuthorizeToken');
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: 'Login' }]
          })
        );
      }
      if (getLoginToken !== null) {
        console.log('123');
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: 'DrawerNavigator' }]
          })
        );
      } 
    }, 2000);
  }, [navigation]);

  return <></>;
};

export default Splash;
