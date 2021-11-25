import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../Components/Header';
import Ordercard from '../../../Components/OrderCard';
import TopTabBar from '../../../Components/TopTabBar';
import Loader from "src/Components/Loader";
import * as Api from "src/Utils/Api";
import ApiConstants from "src/Utils/apiConstants";
import styles from './style';

const MyOrders = ({ navigation }) => {
  const [tabNo, setTabNo] = useState('All');
  const [loading, setLoading] = useState(false);

  const getOrderList = () => {
    console.log('Selected Tab',tabNo)
    // setLoading(true);
    const params = {
      
    };
    Api.getApicall(
      ApiConstants.BASE_URL + ApiConstants.ORDER_LIST,
    );
  }
  useEffect(() => {
    getOrderList()
  }, [tabNo]);
  return (
    <SafeAreaView style={styles.MainCntainer}>
      <Loader loading={loading} />
      <Header Title={'My Orders'} />
      <TopTabBar setTabNo={setTabNo} />
      <View style={styles.Container}>

        <Ordercard onPress={() => navigation.navigate('OrderDetails', { ScreenName: 'Order Details' })} />
      </View>
    </SafeAreaView>
  );
};

export default MyOrders;
