import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import Header from '../../../Components/Header';
import {DrawerActions, useNavigation} from '@react-navigation/native'

const DashBoard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.MainCntainer}>
      <Header Title={'DashBoard'} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>
    </SafeAreaView>
  );
};
export default DashBoard;
