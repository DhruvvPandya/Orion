import React, { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import  Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./style";
import { scale } from "react-native-size-matters";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const Header = ({ Title, ProfileImage,onPress }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.HeaderView}>
      <View style={styles.TitleView}>
        {ProfileImage ?
          (<Pressable onPress={() => navigation.navigate('MyProfile')}>
            <Image />
          </Pressable>)
          : (<Pressable
            onPress={() => navigation.goBack()}>
            <Ionicons
              name={'arrow-back'}
              size={scale(25)}
              color='black' />
          </Pressable>)
        }
        <Text>{Title}</Text>
        <Pressable onPress={onPress}>
          <Ionicons
            name={'menu'}
            size={scale(25)}
            color='black' />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
