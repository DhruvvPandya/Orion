import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Modal,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import Header from "../../../Components/Header";
import AntDesign from "react-native-vector-icons/AntDesign";
import theme from "../../../Utils/theme";
import { scale } from "react-native-size-matters";
import moment from "moment";
import { BLEPrinter } from "react-native-thermal-receipt-printer";
import { request, PERMISSIONS } from "react-native-permissions";
import * as Api from "src/Utils/Api";
import ApiConstants from "src/Utils/apiConstants";

const OrderDetails = ({ route }) => {
  const ScreenName = route.params?.ScreenName;
  const data = route.params?.data;
  const tabNo = route.params?.tabNo;
  console.log("tabNo====>", tabNo);
  const [printers, setPrinters] = useState([]);
  const [currentPrinter, setCurrentPrinter] = useState();
  const [visibleModal, setVisibleModal] = useState(false);
  const [connectPrinterStatus, setConnectPrinterStatus] = useState(false);

  useEffect(() => {
    if (Platform.OS === "ios") {
      request(PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL).then(() => {
        BLEPrinter.init().then(() => {
          BLEPrinter.getDeviceList().then(setPrinters);
        });
      });
    } else {
      BLEPrinter.init().then(() => {
        BLEPrinter.getDeviceList().then(setPrinters);
      });
    }
  }, [visibleModal]);

  const connectPrinter = (printer) => {
    //connect printer
    BLEPrinter.connectPrinter(printer.inner_mac_address).then(
      setCurrentPrinter,
      setConnectPrinterStatus(true),
      setVisibleModal(false),
      (error) => console.warn(error)
    );
  };

  const onPrintCall = () => {
        Api.postApicallToken(
          ApiConstants.BASE_URL + ApiConstants.FULLFILLED_ORDER + '?' + 'id=' + data?.id,
          null,
          null
        );
  };

  const print = () => {
    let productList = data?.items?.map((data) => {
      return `\n<C><CM>${data?.variant_name}</CM></C>\n<M>Qty - ${
        data?.qty
      }</M>\n<M>Price - ${
        data?.price_type === "cash_type" ? data?.cash_price : data?.charge_price
      }</M>\n<C><CM>Key</CM>\</C>\n${data?.order_items_keys
        .map((data, index) => {
          return `<M>${
            data?.order_items_keys?.length === index + 1 ? "keee" : ""
          }${index + 1} - ${data?.key}</M>\n`;
        })
        .join("")}<CM>-------------------------------</CM>\n`;
    });
    console.log("productList-->", productList.join(""));
    BLEPrinter.printText(
      `<C><CM>Orion</CM>\</C>\n<C> </C>\n<M>Store Code - ${
        data?.store_code
      }</M>\n<M>Order Id - 12345</M>\n<M>SI Number - ${
        data?.sale_invoice_number
      }</M>\n<CM>--------------------------------</CM>${productList}<C><CM>Total Summary</CM></C>\n<M>Payment Type - ${
        data?.price_type === "cash_type" ? "Cash" : "Charge"
      }</M>\n<M>Sub Total  - ${
        data?.subtotal_amount
      }</M>\n<M>Total Discount  -  ${
        data?.discount_amount
      }</M>\n<M>Total Amount -  ${data?.final_amount}</M>\n`
    );
    onPrintCall()
  };

  return (
    <SafeAreaView style={styles.MainCntainer}>
      <Header Title={ScreenName} />
      <ScrollView
        contentContainerStyle={styles.Container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.Title}>View order detail</Text>
        <View style={styles.DetailsView}>
          <View style={styles.Horizontal}>
            <Text style={styles.TitleText}>Order Date</Text>
            <Text style={styles.DetailsText}>
              {moment(data?.created_at).format("DD/MM/YYYY")}
            </Text>
          </View>
          <View style={styles.Horizontal}>
            <Text style={styles.TitleText}>Sales Invoice (SI) Number</Text>
            <Text style={styles.DetailsText}>{data?.sale_invoice_number}</Text>
          </View>
          <View style={styles.Horizontal}>
            <Text style={styles.TitleText}>Total Amount</Text>
            <Text style={styles.DetailsText}>{data?.final_amount}</Text>
          </View>
          <View style={styles.Horizontal}>
            <Text style={styles.TitleText}>Store Code</Text>
            <Text style={styles.DetailsText}>{data?.store_code}</Text>
          </View>
          <View style={styles.Horizontal}>
            <Text style={styles.TitleText}>Invoice / Payment Receipt</Text>
            <Text style={styles.DetailsText}>invoice.png</Text>
          </View>
          <View style={styles.Line} />
          <View style={styles.Horizontal}>
            <Text style={styles.DetailsText}>STATUS</Text>
            <View style={styles.StatusView}>
              <Text style={styles.txt}>{data?.status}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.Title}>payment summery</Text>
        <Text style={styles.PaymentTitleText}>Payment Mode</Text>
        <Text style={styles.PaymentDetailsText}>
          {data?.price_type === "cash_type" ? "Cash" : "Charge"}
        </Text>
        {data?.items?.map((data) => (
          <>
            <View style={styles.HorizontalView}>
              <View style={styles.VariantView}>
                <Text style={styles.PaymentTitleText}>Varient</Text>
                <Text style={styles.PaymentDetailsText}>
                  {data?.variant_name}
                </Text>
              </View>
              <View style={styles.CashView}>
                <Text style={styles.PaymentTitleText}>Price</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.PaymentDetailsText}>
                    {data?.price_type === "cash_type"
                      ? data?.cash_price
                      : data?.charge_price}
                  </Text>
                  <AntDesign
                    name={"close"}
                    size={scale(13)}
                    color={theme.GRAY}
                    style={{ alignSelf: "center", left: scale(20) }}
                  />
                </View>
              </View>
              <View style={styles.ChargeView}>
                <Text style={styles.PaymentTitleText}>Quantity</Text>
                <Text style={styles.PaymentDetailsText}>{data?.qty}</Text>
              </View>
            </View>
            <View style={styles.HorizontalView}>
              <View style={styles.Flex}>
                <Text style={styles.PaymentTitleText}>Charge Payment</Text>
              </View>
              <Text
                style={[styles.PaymentDetailsText, { marginTop: scale(5) }]}
              >
                {data?.final_amount}
              </Text>
            </View>
            <View style={styles.HorizontalView}>
              <View style={styles.Flex}>
                <Text style={styles.PaymentTitleText}>Discount</Text>
              </View>
              <Text
                style={[styles.PaymentDetailsText, { marginTop: scale(5) }]}
              >
                {data?.discount_amount !== "" ? data?.discount_amount : 0}
              </Text>
            </View>
          </>
        ))}
        <Text style={styles.Title}>Total Amount Due</Text>
        <View style={styles.TotalContainer}>
          <Text style={styles.BTNtext}>{data?.final_amount}</Text>
        </View>
        {data?.status == "Approved" ? (
          <View style={[styles.Horizontal, { marginVertical: scale(8) }]}>
            <Text style={styles.PaymentTitleText}>Ordered Response</Text>
            <Pressable
              style={styles.BtnView}
              onPress={() => {
                connectPrinterStatus ? print() : setVisibleModal(true);
              }}
            >
              <Text style={styles.btnText}>Print Response</Text>
            </Pressable>
          </View>
        ) : (
          <Text style={styles.PaymentTitleText}>
            Ordered on {moment(data?.created_at).format("MMMM DD [,] YYYY")}
          </Text>
        )}
      </ScrollView>
      <Modal animationType="slide" transparent visible={visibleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.LogoutModalStyle}>
            <Text style={styles.statusText}>Select Printer</Text>
            <ScrollView>
            {printers.length > 0 ? (
              printers?.map((printer) => (
                <Pressable onPress={() => connectPrinter(printer)}>
                  <Text
                    style={styles.btnText}
                  >{`Device Name: ${printer.device_name}`}</Text>
                </Pressable>
              ))
            ) : (
              <Text
                style={styles.btnText}
                onPress={() => setVisibleModal(false)}
              >
                Please Enable Bluetooth
              </Text>
            )}
                   </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default OrderDetails;
