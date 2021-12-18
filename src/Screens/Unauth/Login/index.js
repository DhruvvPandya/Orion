import React, { useState } from "react";
import { Image, View, Text, TextInput, ScrollView, Pressable } from "react-native";
import { scale } from "react-native-size-matters";
import theme from "src/Utils/theme";
import Snackbar from 'react-native-snackbar';
import styles from "./style";
import Icon from 'react-native-vector-icons/Feather';
import { Switch } from "react-native-switch";
import Button from "src/Components/Button";
import * as Api from "src/Utils/Api";
import ApiConstants from "src/Utils/apiConstants";
import { setSessionData } from "src/Utils/asyncStorage";
import Loader from "src/Components/Loader";
import DeviceInfo from 'react-native-device-info';
const isTablet = DeviceInfo.isTablet();
export const LOGIN_KEY = "LoginToken";
export const SIGN_IN = "SignIn";
export const USER_INFO = "UserInfo";
export const USER_PERMISSION = "UserPermission";

const Login = ({ navigation }) => {

  const [hidePass, setHidePass] = useState(true);
  const [isSignIn, setisSignIn] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onLoginSuccess = async (data) => {
    await setSessionData(LOGIN_KEY, data?.data?.token);
    await setSessionData(USER_INFO, data?.data?.userinfo?.user_store_code);
    await setSessionData(USER_PERMISSION, JSON.stringify(data?.data?.user_permission) );
    isSignIn && await setSessionData(SIGN_IN, "isSignIn");
    setLoading(false)
    data.data.token && data?.data?.user_permission?.login_in_app == '1' ?  navigation.navigate("TabNavigator"): Snackbar.show({
      text: 'Do not have permisson to login',
      duration: Snackbar.LENGTH_SHORT,
    })
  };

  const onLoginSubmit = () => {
    setLoading(true)
    const params = {
      email: username,
      password: password,
    };
    {
      username.length > 0 && password.length > 0? (
        Api.postApicall(
          ApiConstants.BASE_URL + ApiConstants.LOGIN,
          params,
          onLoginSuccess
        )
      ) : Snackbar.show({
        text: 'Enter UserName Or Password',
        duration: Snackbar.LENGTH_SHORT,
      })
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.MainCntainer}>
      <Loader loading={loading} />
      <Image
        source={require('../../../Assets/images/logo.png')}
        style={styles.Logo}
      />
      <Text style={styles.Title}>Sign In to Your Account</Text>
      <View style={styles.DetailsContainer}>
        <View style={styles.Container}>
          <View style={styles.InputContainer}>
            <Image source={require("../../../Assets/images/msg.png")} style={isTablet?styles.msgIcon:{}} />
            <View style={styles.textContainer}>
              <Text style={styles.usernameTitle}>Username</Text>
              <TextInput
                style={styles.usernameDetails}
                placeholder={"Username"}
                placeholderTextColor={theme.WHITE}
                onChangeText={setUsername}
                value={username}
              />
            </View>
          </View>
          <View style={styles.Line} />
        </View>
        <View style={styles.Container}>
          <View style={styles.PwdContainer}>
            <View style={styles.PwdView}>
              <Image source={require("../../../Assets/images/lock.png")} style={isTablet?styles.passIcon:{}} />
              <View style={styles.textContainer}>
                <Text style={styles.usernameTitle}>Password</Text>
                <TextInput
                  style={styles.usernameDetails}
                  placeholder={"Password"}
                  placeholderTextColor={theme.WHITE}
                  secureTextEntry={hidePass ? true : false}
                  onChangeText={setPassword}
                  value={password}
                />
              </View>
            </View>
            <Icon name={hidePass ? 'eye-off' : 'eye'}
              size={isTablet?scale(14):scale(18)}
              style={styles.passwordEye}
              color={theme.WHITE}
              onPress={() => setHidePass(!hidePass)} />
          </View>
          <View style={styles.Line} />
        </View>
        <Pressable onPress={() => navigation.navigate("ForgetPassword")}>
          <Text style={styles.forgetPwdText}>Forget Password?</Text>
        </Pressable>
        <Button Title={"Sign In"} onPress={() => onLoginSubmit()} />
      </View>
      <View style={styles.BottomView}>
        <Text style={styles.usernameDetails}>Stay Sign In</Text>
        <Switch
          value={isSignIn}
          onValueChange={() => setisSignIn(!isSignIn)}
          disabled={false}
          activeText={''}
          inActiveText={''}
          circleSize={isTablet?scale(10):scale(13)}
          barHeight={isTablet?scale(15):scale(20)}
          circleBorderWidth={0}
          backgroundActive={theme.YELLOW}
          backgroundInactive={theme.WHITE}
          circleActiveColor={theme.WHITE}
          circleInActiveColor={theme.YELLOW}
          changeValueImmediately={true}
          switchLeftPx={isTablet?scale(0.7):scale(1.5)}
          switchRightPx={isTablet?scale(0.7):scale(1.5)}
          switchWidthMultiplier={3}
          switchBorderRadius={scale(10)}
        />
      </View>
    </ScrollView>
  );
};

export default Login;
