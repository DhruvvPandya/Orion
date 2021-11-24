import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../Components/Header";
import Ordercard from "../../../Components/OrderCard";
import TopTabBar from "../../../Components/TopTabBar";
import styles from "./style";
import Button from "src/Components/Button";
import { BLEPrinter } from "react-native-thermal-receipt-printer";

const MyOrders = () => {
  const [tabNo, setTabNo] = useState(0);
  const [printers, setPrinters] = useState([]);
  const [currentPrinter, setCurrentPrinter] = useState();
  const [visibleModal, setVisibleModal] = useState(false);
  const [connectPrinterStatus, setConnectPrinterStatus] = useState(false); 

  useEffect(() => {
    BLEPrinter.init().then(() => {
      BLEPrinter.getDeviceList().then(setPrinters);
    });
  }, [visibleModal]);

  const connectPrinter = (printer) => {
    //connect printer
    BLEPrinter.connectPrinter(printer.inner_mac_address).then(
      setCurrentPrinter, 
      setConnectPrinterStatus(true),
      setVisibleModal(false)
,
      (error) => console.warn(error)
    );
  };

  const printTextTest = () => {
      BLEPrinter.printText("<C><CM>Company Name</CM>\</C>\n<C> </C>\n<M>Store Code - 123</M>\n<M>Order Id - 12345</M>\n<M>SI Number - 123</M>\n<CM>--------------------------------</CM>\n<C><CM>Product Name</CM></C>\n<M>Qty - 123</M>\n<M>Price - 123</M>\n<CM>--------------------------------</CM>\n<C><CM>Product Name2</CM></C>\n<M>Qty - 123</M>\n<M>Price - 123</M>\n<CM>--------------------------------</CM>\n<C><CM>Total Summary</CM></C>\n<M>Payment Type - Cash</M>\n<M>Sub Total - 123</M>\n<M>Total Discount  - 123</M>\n<M>Total Amount - 123</M>\n");
  };

console.log('currentPrinter', currentPrinter)
  return (
    <SafeAreaView style={styles.MainCntainer}>
      <Header Title={"My Profile"} />
      <TopTabBar setTabNo={setTabNo} />
      {console.log(tabNo)}
      <View style={styles.Container}>
        <Ordercard />
      <Button Title={"Print"} onPress={() => {connectPrinterStatus ? printTextTest() : setVisibleModal(true)}} />
      </View>
      <Modal animationType="slide" transparent visible={visibleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.LogoutModalStyle}>
            <Text style={styles.statusText}>Select Printer</Text>
            {printers.length > 0 ?
              printers?.map((printer) => (
                <Pressable onPress={() => connectPrinter(printer)}>
                  <Text style={styles.btnText}>{`Device Name: ${printer.device_name}`}</Text>
                </Pressable>
              ))
            :
            <Text style={styles.btnText} onPress={() => setVisibleModal(false)}>Please Enable Bluetooth</Text>
            }
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default MyOrders;
