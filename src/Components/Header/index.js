import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Image, Modal } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./style";
import { scale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import theme from "../../Utils/theme";
import * as Api from "src/Utils/Api";
import ApiConstants from "src/Utils/apiConstants";
import { clearSession, getSessionData } from "src/Utils/asyncStorage";
import DeviceInfo from 'react-native-device-info';
const isTablet = DeviceInfo.isTablet();
const Header = ({ Title, ProfileImage }) => {
  const navigation = useNavigation();
  const [isModalVisible, setisModalVisible] = useState(false);
  const [LogOutModal, setLogOutModal] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const [permission, setPermission] = useState("");

  const onUserInfoSuccess = async (data) => {
    setUserInfo(data?.data);
  };

  const onUserInfo = () => {
    Api.getApicall(
      ApiConstants.BASE_URL + ApiConstants.USER,
      onUserInfoSuccess
    );
  };

  const onLogoutSuccess = () => {
    clearSession();
    navigation.navigate("Login");
  };

  const onLogout = () => {
    Api.postApicallToken(
      ApiConstants.BASE_URL + ApiConstants.LOGOUT,
      onLogoutSuccess()
    );
  };

  useEffect(() => {
    onUserInfo();
  }, [userInfo?.profile_photo_url]);

  useEffect(() => {
    async function fetchData() {
      let getuserPermission = await getSessionData("UserPermission");
      setPermission(JSON.parse(getuserPermission));
    }
    fetchData();
  }, []);
  console.log(" permission", permission);
  return (
    <View style={styles.HeaderView}>
      <View style={styles.TitleView}>
        {ProfileImage ? (
          <Pressable onPress={() => navigation.navigate("MyProfile")}>
            <Image
              style={styles.Image}
              source={{ uri: userInfo?.profile_photo_url }}
            />
          </Pressable>
        ) : (
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name={"left"} size={scale(20)} color={theme.YELLOW} />
          </Pressable>
        )}
        <Text style={styles.ModalText}>{Title}</Text>
        <Pressable
          onPress={() => {
            setisModalVisible(true);
          }}
        >
          <Feather name={"menu"} size={isTablet?scale(21):scale(27)} color={theme.YELLOW} />
        </Pressable>
        
        <Modal animationType="slide" transparent visible={isModalVisible}>
          <Pressable
            style={styles.drawerContainer}
            onPress={() => {
              setisModalVisible(!isModalVisible);
            }}
          >
            <View style={styles.Modalstyle}>
              {permission?.change_profile_from_app === "1" && (
                <>
                  <Pressable
                    onPress={() => {
                      navigation.navigate("MyProfile"),
                        setisModalVisible(!isModalVisible);
                    }}
                  >
                    <Text style={styles.ModalText}>My Profile</Text>
                  </Pressable>
                  <View style={styles.Line} />
                </>
              )}
              <Pressable
                onPress={() => {
                  navigation.navigate("MyOrders"),
                    setisModalVisible(!isModalVisible);
                }}
              >
                <Text style={styles.ModalText}>My Orders</Text>
              </Pressable>
              <View style={styles.Line} />

              {permission?.change_password_from_app === "1" && (
                <>
                  <Pressable
                    onPress={() => {
                      navigation.navigate("Settings"),
                        setisModalVisible(!isModalVisible);
                    }}
                  >
                    <Text style={styles.ModalText}>Settings</Text>
                  </Pressable>
                  <View style={styles.Line} />
                </>
              )}
              <Pressable
                onPress={() => {
                  setisModalVisible(!isModalVisible),
                    setLogOutModal(!LogOutModal);
                }}
              >
                <Text style={styles.ModalText}>Log Out</Text>
              </Pressable>
              <View style={styles.Line} />
            </View>
          </Pressable>
        </Modal>
        
        <Modal animationType="slide" transparent visible={LogOutModal}>
          <View style={styles.modalContainer}>
            <View style={styles.LogoutModalStyle}>
              <Text style={styles.LogoutTitle}>Log Out</Text>
              <Text style={styles.LogOutDetails}>
                Are you sure you want to logout right Now ?
              </Text>
              <View style={styles.Horizontal}>
                <Pressable
                  style={styles.Btn}
                  onPress={() => setLogOutModal(false)}
                >
                  <Text style={styles.btnTxt}>No</Text>
                </Pressable>
                <Pressable
                  style={styles.Btn}
                  onPress={() => {
                    onLogout();
                  }}
                >
                  <Text style={styles.btnTxt}>Yes</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Header;
