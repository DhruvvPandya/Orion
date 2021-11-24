import React, { useState, useEffect } from "react";
import { View, Text, Pressable,  } from "react-native";

import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const Ordercard = ({ data}) => {
  const navigation = useNavigation();
  const [isModalVisible, setisModalVisible] = useState(false);
 

  return (
    <View style={styles.Ordercard}>
          <View style={styles.HeaderView}>
            <View style={styles.Horizontal}>
              <Text style={styles.TitleText}>Store Code</Text>
              <Text style={styles.DetailsText}>ST359</Text>
            </View>
            <Text style={styles.TitleText}>22-02-2020</Text>
          </View>
          <Text style={styles.InvoiceTitleText}>Sales Invoice (SI) Number</Text>
          <Text style={styles.InvoiceDetailsText}>180102</Text>
          <View style={styles.ProductView}>
            <View style={styles.ProductDataView}>
              <Text style={styles.TitleText}>Variant</Text>
              <Text style={styles.ProductDetailstext}>iTunes 20</Text>
            </View>
            <View style={styles.ProductDataView} >
              <Text style={styles.TitleText}>Quantity</Text>
              <Text style={styles.ProductDetailstext}>2</Text>
            </View>
            <View style={styles.ProductDataView}>
              <Text style={styles.TitleText}>Total Amount</Text>
              <Text style={styles.ProductDetailstext}>40 USD</Text>
            </View>
          </View>
          <View style={styles.FooterView}>
            <Pressable style={styles.BtnView}><Text style={styles.btnText}>Details</Text></Pressable>
            <Text style={styles.statusText}>Approved</Text>
          </View>
        </View>
  );
};

export default Ordercard;
