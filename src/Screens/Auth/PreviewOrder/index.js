import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import AntDesign from "react-native-vector-icons/AntDesign";
import Header from "src/Components/Header";
import Button from "src/Components/Button";
import { scale } from "react-native-size-matters";
import Feather from "react-native-vector-icons/Feather";
import theme from "../../../Utils/theme";

const PreviewOrder = ({ route, navigation }) => {
  const data = route.params?.dataParams;
  return (
    <SafeAreaView style={styles.MainCntainer}>
      <Header Title={"Preview Order Request"} />
      <ScrollView
        contentContainerStyle={styles.Container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.Horizontal}>
          <Text style={styles.Title}>Preview order</Text>
          <Feather
            name={"edit"}
            color={theme.BACKGROUND}
            size={scale(20)}
            style={{ marginTop: scale(20) }}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={styles.TitleText}>Store Code</Text>
        <Text style={styles.DetailsText}>{data?.store_code}</Text>
        <View style={styles.Line} />
        <Text style={styles.TitleText}>
          Enter the Sales Invoice (SI) Number
        </Text>
        <Text style={styles.DetailsText}>{data?.sale_invoice_number}</Text>
        <View style={styles.Line} />
        <Text style={styles.Title}>Order Details</Text>
        <View style={styles.ProductCard}>
          <View style={styles.PCHorizontailView}>
            <View style={styles.PCCategoryView}>
              <Text style={styles.PCTitleText}>Category/Type</Text>
            </View>
            <View style={styles.PCVarientView}>
              <Text style={styles.PCTitleText}>Varient</Text>
            </View>
            <View style={styles.PCCashView}>
              <Text style={styles.PCTitleText}>Cash</Text>
            </View>
            <View style={styles.PCChargeView}>
              <Text style={styles.PCTitleText}>Charge</Text>
            </View>
          </View>
          {data?.items?.map((item) => (
            <View style={styles.PCHorizontailView}>
              <View style={styles.PCCategoryView}>
                <Text style={styles.PCDetailsText}>{item?.category_sku}</Text>
              </View>
              <View style={styles.PCVarientView}>
                <Text style={styles.PCDetailsText}>{item?.variant_sku}</Text>
              </View>
              <View style={styles.PCCashView}>
                <Text style={styles.PCDetailsText}>{item?.cash_price}</Text>
              </View>
              <View style={styles.PCChargeView}>
                <Text style={styles.PCDetailsText}>{item?.charge_price}</Text>
              </View>
            </View>
          ))}
          <View style={styles.CardLine} />
        </View>
        <Text style={styles.TitleText}>Payment Mode</Text>
        <Text style={styles.DetailsText}>
          {data?.price_type === "charge_price" ? "Charge" : "Cash"}
        </Text>
        <View style={styles.GrayLine} />
        <Text style={styles.TitleText}>Invoice / Payment Receipt</Text>
        <Text style={styles.DetailsText}>invoice.png</Text>
        <View style={styles.GrayLine} />
        <Text style={styles.Title}>Payment Detail summary</Text>
        <View style={[styles.HorizontalView, { marginTop: scale(13) }]}>
          <View style={styles.Selected}>
            <View style={styles.InnerDotSelected} />
          </View>
          <Text style={styles.PaymentDetailsText}>
            {data?.price_type === "charge_price" ? "Charge" : "Cash"}
          </Text>
        </View>
        <View style={styles.HorizontalView}>
          <View style={styles.VariantView}>
            <Text style={styles.PaymentTitleText}>Varient</Text>
          </View>
          <View style={styles.CashView}>
            <Text style={styles.PaymentTitleText}>Price</Text>
          </View>
          <View style={styles.ChargeView}>
            <Text style={styles.PaymentTitleText}>Quantity</Text>
          </View>
        </View>
        {data?.items?.map((item) => (
          <View style={styles.HorizontalView}>
            <View style={styles.VariantView}>
              <Text style={styles.PaymentDetailsText}>{item?.variant_sku}</Text>
            </View>
            <View style={styles.CashView}>
              <Text style={styles.PaymentDetailsText}>
                {data?.price_type === "charge_price"
                  ? item?.charge_price
                  : item?.cash_price}
              </Text>
            </View>
            <AntDesign
              name={"close"}
              size={scale(13)}
              color={theme.GRAY}
              style={{ alignSelf: "center"}}
            />
            <View style={styles.ChargeView}>
              <Text style={styles.PaymentDetailsText}>{item?.qty}</Text>
            </View>
          </View>
        ))}
        <View style={styles.HorizontalView}>
          <View style={styles.Flex}>
            <Text style={styles.PaymentTitleText}>Charge Payment</Text>
          </View>
          <Text style={[styles.PaymentDetailsText, { marginTop: scale(5) }]}>
            {data?.subtotal_amount}
          </Text>
        </View>
        <View style={styles.HorizontalView}>
          <View style={styles.Flex}>
            <Text style={styles.PaymentTitleText}>Discount</Text>
          </View>
          <Text style={[styles.PaymentDetailsText, { marginTop: scale(5) }]}>
            {data?.discount_amount}
          </Text>
        </View>
        <Text style={styles.TitleText}>Total Payment</Text>
        <View style={styles.TotalContainer}>
          <Text style={styles.BTNtext}>{data?.final_amount}</Text>
        </View>

        <Button Title={"Submit"} onPress={() => navigation.navigate('ActiveOrderNavigator')}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PreviewOrder;
