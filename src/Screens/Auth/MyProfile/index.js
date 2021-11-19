import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';

const MyProfile = () => {
  return (
    <SafeAreaView style={styles.MainCntainer}>
      <Text style={styles.Title}>My Profile</Text>
    </SafeAreaView>
  );
};

export default MyProfile;
