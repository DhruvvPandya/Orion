import React, { useState } from "react";
import { Image, View, Text, TextInput, ScrollView, Pressable } from "react-native";
import { scale } from 'react-native-size-matters';
import theme from "../../../Utils/theme";
import styles from "./style";
import { Switch } from 'react-native-switch';
import Button from "../../../Components/Button";

const ForgetPassword = () => {
  const [hidePass, setHidePass] = useState(true);
  const [isSignIn, setisSignIn] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.MainCntainer}>
      <Image
        source={require('../../../Assets/images/logo.png')}
        style={styles.Logo}
      />
      <Text style={styles.Title}>Forgot Password?</Text>
      <Text style={styles.SubTitle}>
        To reset you password, please enter your email address.
      </Text>

      <View style={styles.DetailsContainer}>
        <View style={styles.Container}>
          <View style={styles.InputContainer}>
            <Image source={require('../../../Assets/images/msg.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.usernameTitle}>Email</Text>
              <TextInput
                style={styles.usernameDetails}
                placeholder={"Email"}
                placeholderTextColor={theme.WHITE}
              />
            </View>
          </View>
          <View style={styles.Line} />
        </View>
        <Button Title={"Submit"} />
      </View>
      <Pressable style={styles.BottomText}>
      <Text style={styles.SubTitle}>Remember password? <Text style={styles.Textcolor}>Sign In</Text></Text>
      </Pressable>
    </ScrollView>
  );
};

export default ForgetPassword;
