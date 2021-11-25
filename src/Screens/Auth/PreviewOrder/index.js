import React, { useState, createRef } from 'react';
import { View, Text, ScrollView, TextInput, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import AntDesign from "react-native-vector-icons/AntDesign";
import Header from 'src/Components/Header';
import Button from 'src/Components/Button';
import { scale } from 'react-native-size-matters';
import Feather from "react-native-vector-icons/Feather";
import theme from '../../../Utils/theme';



const PreviewOrder = ({navigation}) => {
  const [isPaymentMode, setPaymentMode] = useState(false);
  const [profile_photo, setPhoto] = useState();

  return (
    <SafeAreaView style={styles.MainCntainer}>
      <Header Title={'Preview Order Request'} />
      <ScrollView contentContainerStyle={styles.Container}>
        <View style={styles.Horizontal}>
        <Text style={styles.Title}>Preview order</Text>
        <Feather
            name={'edit'}
            color={theme.BACKGROUND}
            size={scale(20)}
            style={{marginTop: scale(20)}}
            onPress={()=>navigation.goBack()}
             />
        </View>
        <Text style={styles.TitleText}>Store Code</Text>
        <Text style={styles.DetailsText}>21o8</Text>
        <View style={styles.Line} />
        <Text style={styles.TitleText}>Enter the Sales Invoice (SI) Number</Text>
        <Text style={styles.DetailsText}>21o8</Text>
        <View style={styles.Line} />
        <Text style={styles.Title}>Order Details</Text>
        <View style={styles.ProductCard}>
          <View style={styles.PCHorizontailView}>
            <View style={styles.PCCategoryView}><Text style={styles.PCTitleText}>Category/Type</Text></View>
            <View style={styles.PCVarientView}><Text style={styles.PCTitleText}>Varient</Text></View>
            <View style={styles.PCCashView}><Text style={styles.PCTitleText}>Cash</Text></View>
            <View style={styles.PCChargeView}><Text style={styles.PCTitleText}>Charge</Text></View>
          </View>

          <View style={styles.PCHorizontailView}>
            <View style={styles.PCCategoryView}><Text style={styles.PCDetailsText}>Category/Type</Text></View>
            <View style={styles.PCVarientView}><Text style={styles.PCDetailsText}>Varient</Text></View>
            <View style={styles.PCCashView}><Text style={styles.PCDetailsText}>5</Text></View>
            <View style={styles.PCChargeView}><Text style={styles.PCDetailsText}>10</Text></View>
          </View>
          <View style={styles.CardLine} />
        </View>
        <Text style={styles.TitleText}>Payment Mode</Text>
        <Text style={styles.DetailsText}>Cash</Text>
        <View style={styles.GrayLine} />
        <Text style={styles.TitleText}>Invoice / Payment Receipt</Text>
        <Text style={styles.DetailsText}>invoice.png</Text>
        <View style={styles.GrayLine} />
        <Text style={styles.Title}>Payment Detail summary</Text>
        <View style={[styles.HorizontalView,{marginTop: scale(13)}]}>
          <View style={styles.Selected}>
            <View style={styles.InnerDotSelected} />
          </View>
          <Text style={styles.PaymentDetailsText}>Cash</Text>
        </View>
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
        <Text style={styles.TitleText}>Total Payment</Text>
        <View style={styles.TotalContainer}>
          <Text style={styles.BTNtext}>400</Text>
        </View>

        <Button Title={'Submit'} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PreviewOrder;
