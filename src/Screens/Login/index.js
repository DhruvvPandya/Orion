import React, { useState } from 'react';
import { Image, View, Text, TextInput, ScrollView } from 'react-native';
import { scale } from "react-native-size-matters";
import theme from '../../Utils/theme';
import styles from './style';
import { Switch } from "react-native-switch";
import Button from '../../Components/Button';

const Login = () => {
  const [hidePass, setHidePass] = useState(true);
  const [isSignIn, setisSignIn] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.MainCntainer}>
      <Image
        source={require("../../Assets/images/logo.png")}
        style={styles.Logo}
      />
      <Text style={styles.Title}>Sign In to Your Account</Text>
      <View style={styles.DetailsContainer}>
        <View>
          <View style={styles.InputContainer}>
            <Image source={require('../../Assets/images/msg.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.usernameTitle}>Username</Text>
              <TextInput
                style={styles.usernameDetails}
                placeholder={'Username'}
                placeholderTextColor={theme.WHITE}
              />
            </View>
          </View>
          <View style={styles.Line} />
        </View>
        <View>
          <View style={styles.InputContainer}>
            <Image source={require('../../Assets/images/lock.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.usernameTitle}>Password</Text>
              <TextInput
                style={styles.usernameDetails}
                placeholder={'Password'}
                placeholderTextColor={theme.WHITE}
                secureTextEntry={hidePass ? true : false}
              />
            </View>
          </View>
          <View style={styles.Line} />
        </View>
        <Button Title={'Sign In'} />
      </View>
      <View style={styles.BottomView}>
        <Text style={styles.usernameDetails}>Stay Sign In</Text>
        <Switch
          value={isSignIn}
          onValueChange={() => setisSignIn(!isSignIn)}
          disabled={false}
          activeText={""}
          inActiveText={""}
          circleSize={scale(13)}
          barHeight={scale(20)}
          circleBorderWidth={0}
          backgroundActive={theme.YELLOW}
          backgroundInactive={theme.WHITE}
          circleActiveColor={theme.WHITE}
          circleInActiveColor={theme.YELLOW}
          changeValueImmediately={true}
          switchLeftPx={scale(1.5)}
          switchRightPx={scale(1.5)}
          switchWidthMultiplier={3}
          switchBorderRadius={scale(10)}
        />
      </View>
    </ScrollView>
  );
};

export default Login;
