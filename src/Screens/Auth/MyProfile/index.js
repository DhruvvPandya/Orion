import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import * as Api from "src/Utils/Api";
import ApiConstants from "src/Utils/apiConstants";
import Loader from "src/Components/Loader";

const MyProfile = () => {
  const [userInfo, setUserInfo] = useState("");
  const [loading, setLoading] = useState(false);
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
	}, []);
  
  console.log('userInfo', userInfo)
  return (
    <SafeAreaView style={styles.MainCntainer}>
        <Loader loading={loading} />
      <Text style={styles.Title}>My Profile</Text>
    </SafeAreaView>
  );
};

export default MyProfile;
