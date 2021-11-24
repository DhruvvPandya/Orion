import React, { useState, createRef } from 'react';
import { View, Text, ScrollView, TextInput, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import { useForm, Controller, useFieldArray } from "react-hook-form";
import ActionSheet from 'react-native-actions-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Header from 'src/Components/Header';
import Button from 'src/Components/Button';
import { scale } from 'react-native-size-matters';
import ModalDropdown from "react-native-modal-dropdown";
import fonts from '../../../Utils/fonts';
import theme from '../../../Utils/theme';

const actionSheetRef = createRef();


const OrderRequest = ({navigation}) => {
  const [isPaymentMode, setPaymentMode] = useState(false);
  const [profile_photo, setPhoto] = useState();

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

  const [quntity, setQuentity] = useState(0)
  const data = ['AA', 'BB'];

  const fromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(response => {
      setPhoto(response.path);
      actionSheetRef.current?.hide();
      onProfilePic(response)
    });
  };

  const fromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(response => {
        setPhoto(response.path);
        actionSheetRef.current?.hide();
        onProfilePic(response)
      })
      .catch(err => {
        console.log('image error', err.message);
      });
  };


  return (
    <SafeAreaView style={styles.MainCntainer}>
      <Header Title={'Order Request'} />
      <ScrollView contentContainerStyle={styles.Container}>
        <Text style={styles.Title}>Create New Order Request</Text>
        <Text style={styles.TitleText}>Store Code</Text>
        <Text style={styles.DetailsText}>21o8</Text>
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
                <View >
                  {/* <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange } }) => ( */}
                  <View style={styles.DorpdownView}>
                    <ModalDropdown
                      defaultValue={"Select"}
                      textStyle={styles.pickerTitle}
                      dropdownTextStyle={styles.pickerTitle}
                      renderSeparator={false}
                      showsVerticalScrollIndicator={false}
                      dropdownStyle={{ height: "20%", width: '86%' }}
                      options={data}
                    />
                    <Ionicons
                      name={"md-chevron-down"}
                      size={20}
                      color={theme.BLACK}
                      style={{ alignSelf: "center" }}
                    />
                  </View>
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
                  <View style={styles.DorpdownView}>
                    <ModalDropdown
                      defaultValue={"Variant"}
                      style={styles.VariantView}
                      textStyle={styles.pickerTitle}
                      dropdownTextStyle={styles.pickerTitle}
                      renderSeparator={false}
                      showsVerticalScrollIndicator={false}
                      dropdownStyle={{ width: '86%' }}
                      options={data}
                    />
                    <View style={styles.CashView}>
                      <Text style={styles.CardDetailsText}>Cash</Text>
                    </View>
                    <View style={styles.ChargeView}>
                      <Text style={styles.CardDetailsText}>Charge</Text>
                    </View>
                    <Ionicons
                      name={"md-chevron-down"}
                      size={20}
                      color={theme.BLACK}
                      style={{ alignSelf: "center" }}
                    />
                  </View>

                  <View style={styles.CardLine} />
                  <Text style={styles.CardTitleText}>Enter Quantity</Text>
                  <View style={styles.QualityContainer}>
                    <AntDesign name="minuscircleo" size={scale(25)} color={theme.GRAY} onPress={() => setQuentity(quntity - 1)} />
                    <Text style={styles.CardDetailsText}>{quntity}</Text>
                    <AntDesign name="pluscircleo" size={scale(25)} color={theme.DARK_BLUE} onPress={() => setQuentity(quntity + 1)} />
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
        <Pressable style={styles.UploadContainer} onPress={() => actionSheetRef.current?.setModalVisible()} >
          <Text style={styles.UploadText}>Upload Invoice/ Payment Receipt</Text>
        </Pressable>
        <ActionSheet ref={actionSheetRef}>
          <View style={styles.actionsheet}>
            <Text style={styles.titleText}>Select an image</Text>
            <Text
              onPress={() => fromCamera()}
              style={styles.titleTextBlack}>
              From Camera
            </Text>
            <Text
              onPress={() => fromGallery()}
              style={styles.titleTextBlack}>
              From Gallery
            </Text>
            <Text
              onPress={() => actionSheetRef.current?.hide()}
              style={styles.titleTextBlack}>
              Cancel
            </Text>
          </View>
        </ActionSheet>
        {console.log('Profilr Photo', profile_photo)}
        {profile_photo ? <Image source={{ uri: profile_photo }} style={styles.InvoiceImage} /> : null}
        <Button Title={'Preview'} onPress={()=>navigation.navigate('PreviewOrder')}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderRequest;
