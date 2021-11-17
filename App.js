import React, { useEffect, useState } from 'react';
import {
	View, Text, TouchableOpacity, SafeAreaView
} from 'react-native';
import {
  BLEPrinter,
} from "react-native-thermal-receipt-printer";

const Printer = () => {
  const [printers, setPrinters] = useState([]);
  const [currentPrinter, setCurrentPrinter] = useState();

  useEffect(() => {
    BLEPrinter.init().then(()=> {
      BLEPrinter.getDeviceList().then(setPrinters);
    });
  }, []);

  connectPrinter = (printer) => {
    //connect printer
    BLEPrinter.connectPrinter(printer.inner_mac_address).then(
      setCurrentPrinter,
      error => console.warn(error))
  } 

  printTextTest = () => {
    currentPrinter && BLEPrinter.printText("<C>Ios Print</C>\n");
  }

  printBillTest = () => {
    currentPrinter && BLEPrinter.printBill("<C>Hello Nstack</C>");
  }
console.log('printers', printers && printers, currentPrinter && currentPrinter)
	return (
    <SafeAreaView style={{flex: 1}}>
      <View>
    {
   printers &&  printers?.map(printer => (
<TouchableOpacity  onPress={() => connectPrinter(printer)}>
<Text>{`device_name: ${printer.device_name}, inner_mac_address: ${printer.inner_mac_address}`}</Text>
</TouchableOpacity>
        ))
    }
    </View>
    <TouchableOpacity onPress={printTextTest}>
      <Text>Nstack Hello</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={printBillTest}>
      <Text>Print</Text>
    </TouchableOpacity>
  </SafeAreaView>
	);
};

export default Printer;