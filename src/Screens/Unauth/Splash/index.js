import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { useNavigation } from "@react-navigation/native";
const Splash = ({}) => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      navigation.navigate('Login');
    }, 2000);
  }, [navigation]);

  return <></>;
};

export default Splash;
