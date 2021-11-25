import React, { useState, useEffect } from "react";
import { View, Text, Pressable,  } from "react-native";
import moment from "moment";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { scale } from "react-native-size-matters";

const Ordercard = ({ data ,onPress}) => {
  return (
    <View style={styles.Ordercard}>
          <View style={styles.HeaderView}>
            <View style={styles.Horizontal}>
              <Text style={styles.TitleText}>Store Code</Text>
              <Text style={styles.DetailsText}>{data?.store_code}</Text>
            </View>
            <Text style={styles.TitleText}>{moment(data?.created_at).format("DD/MM/YYYY")}</Text>
          </View>
          <Text style={styles.InvoiceTitleText}>Sales Invoice (SI) Number</Text>
          <Text style={styles.InvoiceDetailsText}>{data?.sale_invoice_number}</Text>
          <View style={[styles.ProductView, {   marginTop: scale(8) }]}>
              <Text style={[styles.TitleText,{width: '40%'}]}>Variant</Text>
              <Text style={[styles.TitleText,{width: '30%'}]}>Quantity</Text>
              <Text style={[styles.TitleText,{width: '80%'}]}>Total Amount</Text>
          </View>
          {data?.items?.map((data) => (
             <View style={styles.ProductView}>
               <Text style={[styles.ProductDetailstext, { width: '40%' }]}>{data?.variant_name}</Text>
               <Text style={[styles.ProductDetailstext, { width: '20%' ,  textAlign: 'center',}]}>{data?.qty}</Text>
               <Text style={[styles.ProductDetailstext, { width: '50%',  textAlign: 'center', }]}>{data?.final_amount}</Text>
           </View>
          ))}
          <View style={styles.FooterView}>
            <Pressable style={styles.BtnView} onPress={onPress} ><Text style={styles.btnText}>Details</Text></Pressable>
            <Text style={styles.statusText}>{data?.status}</Text>
          </View>
        </View>
  );
};

export default Ordercard;
