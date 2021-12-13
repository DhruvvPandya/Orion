import React, { useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../../../Utils/theme';
import Header from 'src/Components/Header';
import Button from "src/Components/Button";
import styles from './style';
import { scale } from 'react-native-size-matters';
import Loader from "src/Components/Loader";
import Snackbar from 'react-native-snackbar';
import * as Api from "src/Utils/Api";
import ApiConstants from "src/Utils/apiConstants";

const Settings = () => {
  const [hidePass, setHidePass] = useState(true);
  const [hideNewPass, setHideNewPass] = useState(true);
  const [hideReNewPass, setHideReNewPass] = useState(true);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reNewpassword, setReNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onUpdatePasswordSucess = async (data) => {
    {  Snackbar.show({
      text: data?.message,
      duration: Snackbar.LENGTH_SHORT,
    })}
  };

  const onUpdatePassword = () => {
  {  oldPassword.length > 0 && newPassword.length > 0 && reNewpassword.length > 0 && newPassword === reNewpassword ? (
    Api.postApicallToken(
      ApiConstants.BASE_URL+ApiConstants.UPDATE_PASSWORD+'?old_password=' + `${oldPassword}`+'&new_password='+`${newPassword}`,
      null,
      onUpdatePasswordSucess(),
      null
    )
    ) : Snackbar.show({
      text: newPassword == reNewpassword ? 'Password filed can not be null' :  'Re-enter Password Does Not Match' ,
      duration: Snackbar.LENGTH_SHORT,
    })}
  }

  return (
    <SafeAreaView style={styles.MainCntainer}>
      <Header Title={'Settings'} />
      <View style={[styles.PwdContainer, {
        marginTop: scale(18)
      }]}>
        <View style={styles.PwdView}>
          <Image source={require("src/Assets/images/lock.png")} style={styles.IconStyle} />
          <View style={styles.textContainer}>
            <Text style={styles.TitleText}>Enter Old Password</Text>
            <TextInput
              style={styles.DetailsText}
              placeholder={"Password"}
              onChangeText={setOldPassword}
              value={oldPassword}
              placeholderTextColor={theme.BLACK}
              secureTextEntry={hidePass ? true : false}
            />
          </View>
        </View>
        <Icon name={hidePass ? 'eye-off' : 'eye'}
          size={scale(18)}
          style={styles.passwordEye}
          color={theme.DARK_BLUE}
          onPress={() => setHidePass(!hidePass)} />
      </View>
      <View style={styles.Line} />
      <View style={styles.PwdContainer}>
        <View style={styles.PwdView}>
          <Image source={require("src/Assets/images/lock.png")} style={styles.IconStyle} />
          <View style={styles.textContainer}>
            <Text style={styles.TitleText}>Enter New Password</Text>
            <TextInput
              style={styles.DetailsText}
              placeholder={"Password"}
              placeholderTextColor={theme.BLACK}
              secureTextEntry={hideNewPass ? true : false}
              onChangeText={setNewPassword}
              value={newPassword}
            />
          </View>
        </View>
        <Icon name={hideNewPass ? 'eye-off' : 'eye'}
          size={scale(18)}
          style={styles.passwordEye}
          color={theme.DARK_BLUE}
          onPress={() => setHideNewPass(!hideNewPass)} />
      </View>
      <View style={styles.Line} />
      <View style={styles.PwdContainer}>
        <View style={styles.PwdView}>
          <Image source={require("src/Assets/images/lock.png")} style={styles.IconStyle} />
          <View style={styles.textContainer}>
            <Text style={styles.TitleText}>Re-enter New Password</Text>
            <TextInput
              style={styles.DetailsText}
              placeholder={"Password"}
              placeholderTextColor={theme.BLACK}
              secureTextEntry={hideReNewPass ? true : false}
              onChangeText={setReNewPassword}
              value={reNewpassword}
            />
          </View>
        </View>
        <Icon name={hideReNewPass ? 'eye-off' : 'eye'}
          size={scale(18)}
          style={styles.passwordEye}
          color={theme.DARK_BLUE}
          onPress={() => setHideReNewPass(!hideReNewPass)} />
      </View>
      <View style={styles.Line} />
      <View style={{ marginHorizontal: scale(20)}}>
      <Button Title={"Save"} onPress={() => onUpdatePassword()} />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
