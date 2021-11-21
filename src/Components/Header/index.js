import React, { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./style";
import { scale } from "react-native-size-matters";
import Modal from 'react-native-modal';
import { useNavigation, DrawerActions } from "@react-navigation/native";
import theme from "../../Utils/theme";

const Header = ({ Title, ProfileImage }) => {
  const navigation = useNavigation();
  const [isModalVisible, setisModalVisible] = useState(false);
  return (
    <View style={styles.HeaderView}>
      <View style={styles.TitleView}>
        {ProfileImage ?
          (<Pressable onPress={() => navigation.navigate('MyProfile')}>
            <Image />
          </Pressable>)
          : (<Pressable
            onPress={() => navigation.goBack()}>
            <AntDesign
              name={'left'}
              size={scale(20)}
              color={theme.YELLOW} />
          </Pressable>)
        }
        <Text style={styles.ModalText}>{Title}</Text>
        <Pressable onPress={() => setisModalVisible(!isModalVisible)}>
          <Feather
            name={'menu'}
            size={scale(27)}
            color={theme.YELLOW} />
        </Pressable>
        <Modal
          isVisible={isModalVisible}
          swipeDirection={'right'}
          onBackdropPress={() => setisModalVisible(!isModalVisible)}
          style={{margin:0}}
          animationIn="fadeIn"
          backdropColor={theme.BLACK}
          backdropOpacity={0.6}
        >
          <View style={styles.Modalstyle}>
            <Pressable onPress={()=>{
              navigation.navigate("MyProfile"),
              setisModalVisible(!isModalVisible)
            }}>
              <Text style={styles.ModalText}>
                My Profile
              </Text>
            </Pressable>
            <View style={styles.Line} />
            <Pressable onPress={()=>{
              navigation.navigate("MyOrders"),
              setisModalVisible(!isModalVisible)
            }}>
              <Text style={styles.ModalText}>
                My Orders
              </Text>
            </Pressable>
            <View style={styles.Line} />

            <Pressable onPress={()=>{
              navigation.navigate("Settings"),
              setisModalVisible(!isModalVisible)
            }}>
              <Text style={styles.ModalText}>
                Settings
              </Text>
            </Pressable>
            <View style={styles.Line} />
            <Pressable>
              <Text style={styles.ModalText}>
                Log Out
              </Text>
            </Pressable>
            <View style={styles.Line} />

          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Header;
