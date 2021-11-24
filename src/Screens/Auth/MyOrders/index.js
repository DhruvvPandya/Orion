import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../Components/Header';
import Ordercard from '../../../Components/OrderCard';
import TopTabBar from '../../../Components/TopTabBar';
import styles from './style';

const MyOrders = () => {
  const [tabNo, setTabNo] = useState(0);
  return (
    <SafeAreaView style={styles.MainCntainer}>
      <Header Title={'My Profile'} />
      <TopTabBar setTabNo={setTabNo} />
      {console.log(tabNo)}
      <View style={styles.Container}>
        <Ordercard />
      </View>
    </SafeAreaView>
  );
};

export default MyOrders;
