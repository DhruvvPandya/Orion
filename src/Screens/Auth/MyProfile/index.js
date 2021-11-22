import React, { useEffect, useState, createRef } from 'react';
import { View, Text, Image, PermissionsAndroid, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import styles from './style';
import ActionSheet from 'react-native-actions-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import * as Api from "src/Utils/Api";
import ApiConstants from "src/Utils/apiConstants";
import Loader from "src/Components/Loader";
import Header from '../../../Components/Header';
import theme from '../../../Utils/theme';
import { scale } from 'react-native-size-matters';

const actionSheetRef = createRef();

const MyProfile = () => {
  const [userInfo, setUserInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [profile_photo, setPhoto] = useState(userInfo?.profile_photo_url);

  const onUserInfoSuccess = async (data) => {
    setLoading(false)
    setUserInfo(data?.data)
  };

  const onUserInfo = () => {
    setLoading(true)
    Api.getApicall(
      ApiConstants.BASE_URL + ApiConstants.USER,
      onUserInfoSuccess
    );
  };

  const onProfilePicSuccess = () => {
    setLoading(false)
  };

  const onProfilePic = (response) => {
    console.log('response', response)
      let data = new FormData();
        data.append('photo', {
          type: response.mime,
          uri: response.path,
          name: 'profile_photo.jpeg',
        });
        Api.postApicallToken(
          ApiConstants.BASE_URL + ApiConstants.UPDATE_PROFILEPIC,
          data,
          onProfilePicSuccess
        );
  };

  useEffect(() => {
    onUserInfo();
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
  }, [userInfo?.profile_photo_url]);

  useEffect(() => {
    setPhoto(userInfo?.profile_photo_url)
  }, [userInfo?.profile_photo_url]);

  const fromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(response => {
      setPhoto(response.path);
      actionSheetRef.current?.hide();
      onProfilePic(response)
    });
  };

  const fromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(response => {
        setPhoto(response.path);
        actionSheetRef.current?.hide();
        onProfilePic(response)
      })
      .catch(err => {
        console.log('image error', err.message);
      });
  };

  console.log('userInfo', userInfo)
  return (
    <SafeAreaView style={styles.MainCntainer}>
      <Loader loading={loading} />
      <Header Title={'My Profile'} />
      <View style={styles.NameView}>
        <View style={styles.NameData}>
          <Text style={styles.name}>
          {userInfo?.first_name} {userInfo?.last_name}
          </Text>
          <Text style={styles.Designation}>{userInfo?.default_role}</Text>
          <Text style={styles.Designation}>
            ---
          </Text>
          <View style={styles.AddressView}>
            <Ionicons
              name={'location-sharp'}
              color={theme.BACKGROUND}
              size={scale(22)} />
            <Text style={[styles.Designation, { alignSelf: 'center'}]}>Store Code - {userInfo?.store?.store_code}</Text>
          </View>
        </View>
        <View style={styles.ImageData}>
          <Feather
            name={'edit'}
            color={theme.BACKGROUND}
            size={scale(25)}
            style={styles.EditIcon}
            onPress={() => actionSheetRef.current?.setModalVisible()} />
          <Image style={styles.Image} source={{ uri: profile_photo }} />
        </View>
      </View>
      <ActionSheet ref={actionSheetRef}>
        <View style={styles.actionsheet}>
          <Text style={styles.titleText}>Select an image</Text>
          <Text
            onPress={() => fromCamera()}
            style={styles.titleTextBlack}>
            From Camera
          </Text>
          <Text
            onPress={() => fromGallery()}
            style={styles.titleTextBlack}>
            From Gallery
          </Text>
          <Text
            onPress={() => actionSheetRef.current?.hide()}
            style={styles.titleTextBlack}>
            Cancel
          </Text>
        </View>
      </ActionSheet>
      <View style={styles.DetailsView}>
        <Text style={styles.TitleText}>First Name</Text>
        <Text style={styles.DetailsText}>{userInfo?.first_name}</Text>
        <View style={styles.Line} />
        <Text style={styles.TitleText}>Last Name</Text>
        <Text style={styles.DetailsText}>{userInfo?.last_name}</Text>
        <View style={styles.Line} />
        <Text style={styles.TitleText}>Email Address</Text>
        <Text style={styles.DetailsText}>{userInfo?.email}</Text>
        <View style={styles.Line} />
        <Text style={styles.TitleText}>User Role</Text>
        <Text style={styles.DetailsText}>{userInfo?.default_role}</Text>
        <View style={styles.Line} />
        <Text style={styles.TitleText}>Store Code</Text>
        <Text style={styles.DetailsText}>{userInfo?.store?.store_code}</Text>
        <View style={styles.Line} />
      </View>
    </SafeAreaView>
  );
};

export default MyProfile;
