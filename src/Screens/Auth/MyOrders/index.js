import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
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
  const [orderList, setOrderList] = useState();
  const onOrderSucess = async (data) => {
    setOrderList(data?.data);
    setLoading(false);
  };

  const getOrderList = () => {
    console.log('Selected Tab', tabNo)
    setLoading(true);
    Api.getApicall(
      ApiConstants.BASE_URL + ApiConstants.ORDER_LIST + '?' + 'status' + '=' + tabNo,
      onOrderSucess
    );
  }
  useEffect(() => {
    getOrderList()
  }, [tabNo]);

  console.log('orderList', orderList && orderList)
  return (
    <SafeAreaView style={styles.MainCntainer}>
      <Loader loading={loading} />
      <Header Title={'My Orders'} />
      <TopTabBar setTabNo={setTabNo} />
      {orderList?.length > 0 ? <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>
        {orderList?.map((data) => (
          <Ordercard data={data} onPress={() => navigation.navigate('OrderDetails', { ScreenName: 'Order Details', data: data })} />
        ))}
      </ScrollView> :
        <View style={styles.nullContainer}>
          <Text style={styles.ModalText}>No orders available</Text>
        </View>
      }
    </SafeAreaView>
  );
};

export default MyOrders;
