import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import Header from '../../../Components/Header';
import Ordercard from '../../../Components/OrderCard';
import ModalDropdown from "react-native-modal-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import theme from '../../../Utils/theme';
import { scale } from 'react-native-size-matters';



const OrderDetails = ({ route }) => {

  const ScreenName = route.params?.ScreenName
  const [title, setTitle] = useState("");

  return (
    <SafeAreaView style={styles.MainCntainer}>
      <Header Title={ScreenName} />
      <View style={styles.Container}>
        <Text style={styles.Title}>View order detail</Text>
        <View style={styles.DetailsView}>
          <View style={styles.Horizontal}>
            <Text style={styles.TitleText}>Order Date</Text>
            <Text style={styles.DetailsText}>22-Feb-2020</Text>
          </View>
          <View style={styles.Horizontal}>
            <Text style={styles.TitleText}>Sales Invoice (SI) Number</Text>
            <Text style={styles.DetailsText}>180102</Text>
          </View>
          <View style={styles.Horizontal}>
            <Text style={styles.TitleText}>Total Amount</Text>
            <Text style={styles.DetailsText}>50 USD</Text>
          </View>
          <View style={styles.Horizontal}>
            <Text style={styles.TitleText}>Store Code</Text>
            <Text style={styles.DetailsText}>ST359</Text>
          </View>
          <View style={styles.Horizontal}>
            <Text style={styles.TitleText}>Invoice / Payment Receipt</Text>
            <Text style={styles.DetailsText}>invoice.png</Text>
          </View>
          <View style={styles.Line} />
          <View style={styles.Horizontal}>
            <Text style={styles.DetailsText}>STATUS</Text>
            <View style={styles.StatusView}>
              <Text style={styles.txt}>Approved</Text>
            </View>
          </View>
        </View>
        <Text style={styles.Title}>payment summery</Text>
        <Text style={styles.PaymentTitleText}>Payment Mode</Text>
        <Text style={styles.PaymentDetailsText}>Cash</Text>
        <View style={styles.HorizontalView}>
          <View style={styles.VariantView}>
            <Text style={styles.PaymentTitleText}>Varient</Text>
            <Text style={styles.PaymentDetailsText}>iTunes</Text>
          </View>
          <View style={styles.CashView}>
            <Text style={styles.PaymentTitleText}>Price</Text>
            <Text style={styles.PaymentDetailsText}>$25</Text>
          </View>
          <AntDesign
            name={'close'}
            size={scale(13)}
            color={theme.GRAY}
            style={{ alignSelf: 'flex-end' }}
          />
          <View style={styles.ChargeView}>
            <Text style={styles.PaymentTitleText}>Quantity</Text>
            <Text style={styles.PaymentDetailsText}>2</Text>
          </View>
        </View>
        <View style={styles.HorizontalView}>
          <View style={styles.Flex}>
            <Text style={styles.PaymentTitleText}>Charge Payment</Text>
          </View>
          <Text style={[styles.PaymentDetailsText, { marginTop: scale(5) }]}>$50</Text>
        </View>
        <View style={styles.HorizontalView}>
          <View style={styles.Flex}>
            <Text style={styles.PaymentTitleText}>Discount</Text>
          </View>
          <Text style={[styles.PaymentDetailsText, { marginTop: scale(5) }]}>$10</Text>
        </View>
        <Text style={styles.Title}>Total Amount Due</Text>
        <View style={styles.TotalContainer}>
          <Text style={styles.BTNtext}>400</Text>
        </View>
        {ScreenName == 'Active Order Detail' ? <View style={[styles.Horizontal, { marginTop: scale(8) }]}>
          <Text style={styles.PaymentTitleText}>Ordered Response</Text>
          <Pressable style={styles.BtnView}  ><Text style={styles.btnText}>Print Response</Text></Pressable>
        </View> : <Text style={styles.PaymentTitleText}>Ordered on 22 February, 2020</Text>
        }
      </View>
    </SafeAreaView>
  );
};

export default OrderDetails;
