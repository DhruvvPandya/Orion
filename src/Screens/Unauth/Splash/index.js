import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { getSessionData } from "src/Utils/asyncStorage";

const Splash = () => {
  const navigation = useNavigation();
  useEffect( () => {
    setTimeout(async () => {
      await SplashScreen.hide();
      const getLoginToken =  await getSessionData('SignIn');
      console.log('getLoginToken', getLoginToken)
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
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: 'TabNavigator' }]
          })
        );
      } 
    }, 2000);
  }, [navigation]);

  return <></>;
};

export default Splash;
