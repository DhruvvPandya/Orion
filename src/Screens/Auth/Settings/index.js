import React, { useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../../../Utils/theme';
import Header from 'src/Components/Header';
import Button from "src/Components/Button";
import styles from './style';
import { scale } from 'react-native-size-matters';

const Settings = () => {
  const [hidePass, setHidePass] = useState(true);

  return (
    <SafeAreaView style={styles.MainCntainer}>
      <Header Title={'Settings'} />
      <View style={[styles.PwdContainer, {
        marginTop: scale(18)
      }]}>
        <View style={styles.PwdView}>
          <Image source={require("src/Assets/images/lock.png")} style={styles.IconStyle} />
          <View style={styles.textContainer}>
            <Text style={styles.TitleText}>Password</Text>
            <TextInput
              style={styles.DetailsText}
              placeholder={"Password"}
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
            <Text style={styles.TitleText}>Password</Text>
            <TextInput
              style={styles.DetailsText}
              placeholder={"Password"}
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
            <Text style={styles.TitleText}>Password</Text>
            <TextInput
              style={styles.DetailsText}
              placeholder={"Password"}
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
      <Button Title={"Submit"} />

      <Button />
    </SafeAreaView>
  );
};

export default Settings;
