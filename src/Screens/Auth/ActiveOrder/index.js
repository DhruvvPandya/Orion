import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import Header from '../../../Components/Header';
import Ordercard from '../../../Components/OrderCard';
import ModalDropdown from "react-native-modal-dropdown";
import Ionicons from "react-native-vector-icons/Ionicons";
import theme from '../../../Utils/theme';
import { scale } from 'react-native-size-matters';
import Loader from "src/Components/Loader";
import * as Api from "src/Utils/Api";
import ApiConstants from "src/Utils/apiConstants";

const ActiveOrder = ({navigation}) => {

  const DATA = ["Select", "date", "week", "month", "year"];
  const [loading, setLoading] = useState(false);
  const [orderList, setOrderList] = useState();
  const [title, setTitle] = useState("");
  const onOrderSucess = async (data) => {
    setOrderList(data?.data);
    setLoading(false);
  };

  const getOrderList = () => {
    setLoading(true);
    Api.getApicall(
      ApiConstants.BASE_URL + ApiConstants.ORDER_LIST + '?status=Pending&filter=' + title,
      onOrderSucess
    );
  }
  useEffect(() => {
    getOrderList()
  }, [title]);

  console.log('orderList',orderList && orderList)

  return (
    <SafeAreaView style={styles.MainCntainer}>
       <Loader loading={loading} />
      <Header Title={'Active Order'} />
      <View style={styles.Container}>
        <View style={styles.Horizontal}>
          <Text style={styles.Title}>Active Orders</Text>
          <View style={styles.PickerView}>
            <Text style={[styles.SubTitle, { paddingRight: 10 }]}>
              Filter By:
            </Text>
            <ModalDropdown
              defaultValue={"Select"}
              textStyle={styles.pickerTitle}
              dropdownTextStyle={styles.pickerTitle}
              renderSeparator={false}
              showsVerticalScrollIndicator={false}
              onSelect={(value) => setTitle(DATA[value])}
              dropdownStyle={{ height: "22%" }}
              options={DATA}
            />
            <Ionicons
              name={"md-chevron-down"}
              size={scale(16)}
              color={theme.BLACK}
              style={{alignSelf:'flex-end', marginTop: scale(5)}}
            />
          </View>
        </View>
        {  orderList?.length > 0 ? <ScrollView  showsVerticalScrollIndicator={false}>
      {orderList?.map((data) => (
            <Ordercard data={data} onPress={()=>navigation.navigate('OrderDetails',{ScreenName:'Active Order Detail', data: data})} />
          ))}
      </ScrollView> :
      <View style={styles.nullContainer}>
      <Text style={styles.ModalText}>No orders available</Text>
      </View>
      }
      </View>
    </SafeAreaView>
  );
};

export default ActiveOrder;
