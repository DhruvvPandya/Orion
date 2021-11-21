import React, { useEffect, useState, createRef } from 'react';
import { View, Text, Image, PermissionsAndroid } from 'react-native';
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
  const [profile_photo, setPhoto] = useState(null);


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

  useEffect(() => {
    onUserInfo();
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
  }, []);

  const fromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(response => {
      setPhoto(response.path);
      actionSheetRef.current?.hide();
      const form = new FormData();
      form.append('media', {
        type: 'image/jpeg',
        uri: response.path,
        name: 'profile_photo.jpeg',
      });
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
        const form = new FormData();
        form.append('media', {
          type: 'image/jpeg',
          uri: response.path,
          name: 'profile_photo.jpeg',
        });

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
            Adam Smith
          </Text>
          <Text style={styles.Designation}>
            Field Store Personnel
          </Text>
          <Text style={styles.Designation}>
            ---
          </Text>
          <View style={styles.AddressView}>
            <Ionicons
              name={'location-sharp'}
              color={theme.BACKGROUND}
              size={scale(22)} />
            <Text style={styles.Designation}>Store Code - 2096011</Text>
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
        <Text style={styles.DetailsText}>Adam</Text>
        <View style={styles.Line} />
        <Text style={styles.TitleText}>Last Name</Text>
        <Text style={styles.DetailsText}>Smith</Text>
        <View style={styles.Line} />
        <Text style={styles.TitleText}>Email Address</Text>
        <Text style={styles.DetailsText}>adamsmith@email.com</Text>
        <View style={styles.Line} />
        <Text style={styles.TitleText}>User Role</Text>
        <Text style={styles.DetailsText}>Field Store Personnel</Text>
        <View style={styles.Line} />
        <Text style={styles.TitleText}>Store Code</Text>
        <Text style={styles.DetailsText}>2096011</Text>
        <View style={styles.Line} />
      </View>
    </SafeAreaView>
  );
};

export default MyProfile;
