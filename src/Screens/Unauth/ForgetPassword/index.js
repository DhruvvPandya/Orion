import React, { useState } from "react";
import { Image, View, Text, TextInput, ScrollView, Pressable } from "react-native";
import Snackbar from 'react-native-snackbar';
import theme from "../../../Utils/theme";
import styles from "./style";
import Button from "../../../Components/Button";
import Loader from "src/Components/Loader";
import * as Api from "src/Utils/Api";
import ApiConstants from "src/Utils/apiConstants";
import DeviceInfo from 'react-native-device-info';
const isTablet = DeviceInfo.isTablet();

const ForgetPassword = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmitSuccess = () => {
    setLoading(false)
    navigation.goBack()
  };

  const onSubmit = () => {
    setLoading(true)
    const params = {
      email: email,
    };
    {email.length> 0 ?  Api.postApicall(
      ApiConstants.BASE_URL + ApiConstants.FORGOT_PASSWORD,
      params,
      onSubmitSuccess
    ) : Snackbar.show({
      text: 'Enter Email',
      duration: Snackbar.LENGTH_SHORT,
    }),
  setLoading(false) }
   
  };

  return (
    <ScrollView contentContainerStyle={styles.MainCntainer}>
      <Loader loading={loading} />
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
            <Image source={require('../../../Assets/images/msg.png')} style={isTablet?styles.msgIcon:{}} />
            <View style={styles.textContainer}>
              <Text style={styles.usernameTitle}>Email</Text>
              <TextInput
                style={styles.usernameDetails}
                placeholder={"Email"}
                placeholderTextColor={theme.WHITE}
                onChangeText={setEmail}
                value={email}
              />
            </View>
          </View>
          <View style={styles.Line} />
        </View>
        <Button Title={"Submit"} onPress={()=> onSubmit()}/>
      </View>
      <Pressable style={styles.BottomText}>
      <Text style={styles.SubTitle}>Remember password? <Text style={styles.Textcolor} onPress={()=>navigation.goBack()}>Sign In</Text></Text>
      </Pressable>
    </ScrollView>
  );
};

export default ForgetPassword;
