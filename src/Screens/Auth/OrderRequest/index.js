import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import { useForm, Controller, useFieldArray } from "react-hook-form";
// import RNPickerSelect from "react-native-picker-select";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Header from 'src/Components/Header';
import Button from 'src/Components/Button';
import { scale } from 'react-native-size-matters';
import fonts from '../../../Utils/fonts';
import theme from '../../../Utils/theme';

const OrderRequest = () => {
  const [isPaymentMode, setPaymentMode] = useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      items: [
        {
          variant_sku: "",
          qty: "",
          charge_price: "",
          cash_price: "",

        },
      ],
    },
  });
  const { fields, append, remove } =
    useFieldArray({
      control,
      name: "items",
    });

    const [quntity,setQuentity]=useState(0)
  const data = ([
    { label: 'Baseball', value: 'baseball' },
    { label: 'Hockey', value: 'hockey' },
  ]);
 

  return (
    <SafeAreaView style={styles.MainCntainer}>
      <Header Title={'Order Request'} />
      <ScrollView contentContainerStyle={styles.Container}>
        <Text style={styles.Title}>Create New Order Request</Text>
        <Text style={styles.TitleText}>Store Code</Text>
        <TextInput style={styles.DetailsText} placeholder={'Store Code'} />
        <View style={styles.Line} />
        <Text style={styles.TitleText}>Enter the Sales Invoice (SI) Number</Text>
        <TextInput style={styles.DetailsText} placeholder={'Invoice Number'} />
        <View style={styles.Line} />
        <Text style={styles.Title}>Order Details</Text>

        {fields.map((element, index) => {
          return (
            <View key={index.toString()}>
              <View style={styles.ProductCard}>
                <View style={styles.HeaderContainer}>
                  <Text style={styles.CardTitleText}>Category/Type</Text>
                  {index == 0 ? null : <AntDesign name="closecircleo" size={scale(15)} color={theme.GRAY} onPress={(key) => remove(key)} />}
                </View>
                <View>
                  {/* <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange } }) => ( */}
                      {/* <RNPickerSelect
                        items={data}
                        style={{
                          inputAndroid: {
                            height: scale(20),
                            padding: 0,
                            fontSize: 18,
                            color: theme.BLACK,
                            fontFamily: fonts.JosefinSans_Regular,
                          },
                          iconContainer: {
                            height: scale(25),
                            padding: 0,
                          },
                          placeholder: styles.PlaceHolder,
                          inputAndroidContainer: styles.IPandroidContainer
                        }}
                        onValueChange={(item) => console.log('Selected item', item)}
                        Icon={() => {
                          return (
                            <Ionicons name="chevron-down" size={scale(22)} color="black" />
                          );
                        }}
                        useNativeAndroidPickerStyle={false}
                      /> */}
                     {/* )} /> */}

                  <View style={styles.CardLine} />
                  <View style={styles.Horizontal}>
                    <View style={styles.VariantView}>
                      <Text style={styles.CardTitleText}>Variant</Text>
                    </View>
                    <View style={styles.CashView}>
                      <Text style={styles.CardTitleText}>Cash</Text>
                    </View>
                    <View style={styles.ChargeView}>
                      <Text style={styles.CardTitleText}>Charge</Text>
                    </View>
                  </View>
                  {/* <Controller 
                  control={control}
                  rules={{
                    required: true,
                  }} 
                  render={({ field: { onChange } })=> ( */}
                  <View style={styles.Horizontal}>
                    <View style={styles.VariantView}>
                      <Text style={styles.CardDetailsText}>Variant</Text>
                    </View>
                    <View style={styles.CashView}>
                      <Text style={styles.CardDetailsText}>Cash</Text>
                    </View>
                    <View style={styles.ChargeView}>
                      <Text style={styles.CardDetailsText}>Charge</Text>
                    </View>
                    <View style={{ flex: 0.1 }}>
                      {/* <RNPickerSelect
                        items={data}
                        style={{
                          inputAndroid: styles.ProductIPIndroid,
                          iconContainer: styles.ProducticonContainer,
                          placeholder: styles.ProductPlaceHolder,
                        }}
                        onValueChange={(item) => console.log('Selected item', item)}
                        Icon={() => {
                          return (
                            <Ionicons name="chevron-down" size={scale(22)} color="black" />
                          );
                        }}
                        useNativeAndroidPickerStyle={false}
                      /> */}
                    </View>
                  </View>
                  
                  <View style={styles.CardLine} />
                  <Text style={styles.CardTitleText}>Enter Quantity</Text>
                  <View style={styles.QualityContainer}>
                    <AntDesign name="minuscircleo" size={scale(25)} color={theme.GRAY} onPress={()=>setQuentity(quntity - 1)} />
                    <Text style={styles.CardDetailsText}>{quntity}</Text>
                    <AntDesign name="pluscircleo" size={scale(25)} color={theme.DARK_BLUE} onPress={()=>setQuentity(quntity+1)}/>
                  </View>
                </View>
              </View>
            </View>)
        })}
        <Pressable style={styles.AddContainer} onPress={() => append(
          {
            variant_sku: "",
            qty: "",
            charge_price: "",
            cash_price: "",
          },
        )}>
          <Text style={styles.Addtext}>Add New Category/Type</Text>
          <AntDesign name="pluscircleo" size={scale(22)} color={theme.DARK_BLUE} />
        </Pressable>
        <Text style={styles.Title}>Payment Details</Text>
        <Text style={styles.TitleText}>Select Mode of Payment</Text>
        <View style={[styles.Horizontal, { paddingTop: scale(8) }]}>
          <View style={styles.RadioBtnConatiner}>
            <Pressable style={isPaymentMode ? styles.Selected : styles.NotSelected} onPress={() => setPaymentMode(!isPaymentMode)}>
              <View style={isPaymentMode ? styles.InnerDotSelected : styles.InnerDotNotSelected} /></Pressable>
            <Text style={styles.BTNtext}>Cash</Text>
          </View>
          <View style={styles.RadioBtnConatiner}>
            <Pressable style={isPaymentMode ? styles.NotSelected : styles.Selected} onPress={() => setPaymentMode(!isPaymentMode)}>
              <View style={isPaymentMode ? styles.InnerDotNotSelected : styles.InnerDotSelected} />
            </Pressable>
            <Text style={styles.BTNtext}>Charge</Text>
          </View>
        </View>
        <Text style={styles.TitleText}>Total Payment</Text>
        <View style={styles.TotalContainer}>
          <Text style={styles.BTNtext}>400</Text>
        </View>
        <Text style={styles.Title}>Upload File</Text>
        <Pressable style={styles.UploadContainer} >
          <Text style={styles.UploadText}>Upload Invoice/ Payment Receipt</Text>
        </Pressable>

        <Button Title={'Preview'} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderRequest;
