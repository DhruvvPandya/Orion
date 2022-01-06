import React, { useState, createRef, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import ActionSheet from "react-native-actions-sheet";
import ImagePicker from "react-native-image-crop-picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Header from "src/Components/Header";
import Button from "src/Components/Button";
import { scale } from "react-native-size-matters";
import ModalDropdown from "react-native-modal-dropdown";
import theme from "../../../Utils/theme";
import * as Api from "src/Utils/Api";
import ApiConstants from "src/Utils/apiConstants";
const actionSheetRef = createRef();
import { getSessionData } from "src/Utils/asyncStorage";
import Loader from "src/Components/Loader";
import Snackbar from 'react-native-snackbar';

const OrderRequest = ({ navigation }) => {
  const [isPaymentMode, setPaymentMode] = useState("cash");
  const [photo, setPhoto] = useState('');
  const [invoiceNo, setInvoiceNo] = useState('');
  const [storeCode, setStoreCode] = useState();
  const [categories, setCategories] = useState();
  const [indexx, setIndexx] = useState();
  const [valueData, setValueData] = useState();
  const [product, setProduct] = useState([]);
  const [variantData, setVariantData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [refreshPaymentType, setRefreshPaymentType] = useState(false);
  const [qantityRefresh, setQuantityRefresh] = useState(false);
  const [finalAmount, setFinalAmount] = useState();
  const [subAmount, setSubAmount] = useState();
  const [itemStock, setItemStock] = useState();
  const [loading, setLoading] = useState(false);
  const [snackError, setSnackError] = useState();
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
          category_name: "",
          variant_name: "",
          variant_sku: "",
          qty: "0",
          charge_price: "",
          cash_price: "",
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  console.log('errors', errors)
  const onCategoriesSucess = async (data) => {
    setCategories(data?.data);
  };

  const getCategoriesList = () => {
    Api.getApicall(
      ApiConstants.BASE_URL + ApiConstants.ALL_CATEGORIES,
      onCategoriesSucess
    );
  };

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const UserInfo = await getSessionData("UserInfo");
      setStoreCode(UserInfo);
    }
    getCategoriesList();
  }, []); // Or [] if effect doesn't need props or state

  console.log("categories", categories);
  let categoryData = categories?.map((value) => value.name);

  useEffect(() => {
    snackError && Snackbar.show({
      text: snackError && snackError,
      duration: Snackbar.LENGTH_SHORT,
    }) 
    setInvoiceNo('')
  }, [snackError && snackError?.length]);


  useEffect(() => {
    console.log("value==>", getValues(`items.${indexx}.category_name`));
      setValue(`items.${indexx}.charge_price`, '');
    setValue(`items.${indexx}.variant_sku`, '');
    setValue(`items.${indexx}.variant_name`, '');
    setValue(`items.${indexx}.cash_price`,'');
    let variantList = categories?.filter(function (el) {
      return el.name == getValues(`items.${indexx}.category_name`);
    });
    //let variantListValue = variantList?.[0].variants?.map(value => `${value.name} ${'|'} ${value.cash_price} ${'|'} ${value.charge_price}`);
    let variantListValue = variantList?.[0].variants?.map(
      (value) => value.name
    );
    variantListValue && setProduct(variantListValue);
  }, [valueData && valueData]);

  useEffect(() => {
    let variantList = categories?.filter(function (el) {
      return el.name == getValues(`items.${indexx}.category_name`);
    });
    console.log("variantList", variantList?.[0].variants);
    let array = variantList?.[0].variants.filter(function (el) {
      return el.name == variantData;
    });
    setRefresh(!refresh),
    setItemStock(array?.[0].stock)
    setValue(`items.${indexx}.charge_price`, array?.[0].charge_price);
    setValue(`items.${indexx}.variant_sku`, array?.[0].sku);
    setValue(`items.${indexx}.cash_price`, array?.[0].cash_price);
  }, [variantData && variantData.length]);

  useEffect(() => {
    const finalAmount = getValues(`items`)?.map((data) => {
      return isPaymentMode == "cash"
        ? data.cash_price * data.qty
        : data.charge_price * data.qty;
    });
    const subAmount = getValues(`items`)?.map((data) => {
      return data.charge_price * data.qty;
    });
    setFinalAmount(finalAmount.reduce((a, b) => a + b, 0));
    setSubAmount(subAmount.reduce((a, b) => a + b, 0));
  }, [qantityRefresh, isPaymentMode]);

  useEffect(() => { }, [
    getValues(`items.${indexx}.cash_price`) &&
    getValues(`items.${indexx}.cash_price`),
  ]);

  const fromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((response) => {
      setPhoto(response);
      actionSheetRef.current?.hide();
    });
  };

  const fromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((response) => {
        setPhoto(response);
        actionSheetRef.current?.hide();
      })
      .catch((err) => {
        console.log("image error", err.message);
      });
  };

  const onOrderSusscess = (data) => {
    setLoading(false)
    if(data?.message !== ""){
      setSnackError(data?.message)
    }else{
      const dataParams = {
        sale_invoice_number: invoiceNo,
        store_code: storeCode,
        sale_invoice_image: "",
        price_type: isPaymentMode == "cash" ? "cash_type" : "charge_price",
        subtotal_amount: subAmount,
        extra_charge_amount: "",
        discount_amount: isPaymentMode == "cash" ? subAmount - finalAmount : "0",
        final_amount: finalAmount,
        items: getValues(`items`),
      };
    navigation.navigate("PreviewOrder", { dataParams })
    }
  };

  const onOrderError = (err) => {
    console.log('err==>',err)
    setLoading(false)
    setSnackError('Something went wrong')
  };
  const onSubmitOrder = (data) => {
    console.log("onSubmit", data, getValues(`items`), invoiceNo);

    if (invoiceNo.length === 0) {
      Snackbar.show({
        text: 'Please enter sales invoice number',
        duration: Snackbar.LENGTH_SHORT,
      })
    }
    else if (photo.length === 0) {
      Snackbar.show({
        text: 'Please upload receipt image',
        duration: Snackbar.LENGTH_SHORT,
      })
    }
    else {
      const str = JSON.stringify(getValues(`items`));
      var finalData = str?.replace(/\\/g, "");
      console.log("finalData", finalData);
      setLoading(true)
      const params = new FormData();
      params.append("sale_invoice_number", invoiceNo.toString());
      params.append("store_code", storeCode.toString());
      params.append(
        "price_type",
        isPaymentMode == "cash" ? "cash_type" : "charge_price"
      );
      params.append("sale_invoice_image", {
        type: photo.mime,
        uri: photo.path,
        name: "sale_invoice_image.jpeg",
      });
      params.append("subtotal_amount", subAmount.toString());
      params.append("extra_charge_amount", "0");
      params.append(
        "discount_amount",
        isPaymentMode == "cash" ? (subAmount - finalAmount).toString() : "0"
      );
      params.append("final_amount", finalAmount.toString());
      params.append("items", finalData);

 
      Api.postApicallToken(
        ApiConstants.BASE_URL + ApiConstants.CREATE_ORDER,
        params,
      onOrderSusscess,
       onOrderError
      );
    }

  };
  return (
    <SafeAreaView style={styles.MainCntainer}>
      <Loader loading={loading} />
      <Header Title={"Order Request"} />
      <ScrollView
        contentContainerStyle={styles.Container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.Title}>Create New Order Request</Text>
        <Text style={styles.TitleText}>Store Code</Text>
        <Text style={styles.DetailsText}>{storeCode && storeCode}</Text>
        <View style={styles.Line} />
        <Text style={styles.TitleText}>
          Enter the Sales Invoice (SI) Number
        </Text>
        <TextInput
          style={styles.DetailsText}
          placeholder={"Invoice Number"}
          onChangeText={setInvoiceNo}
          value={invoiceNo}
        />
        <View style={styles.Line} />
        <Text style={styles.Title}>Order Details</Text>
        {fields.map((element, index) => {
          return (
            <View key={index?.toString()}>
              <View style={styles.ProductCard}>
                <View style={styles.HeaderContainer}>
                  <Text style={styles.CardTitleText}>Category/Type</Text>
                  {index == 0 ? null : (
                    <AntDesign
                      name="closecircleo"
                      size={scale(15)}
                      color={theme.GRAY}
                      onPress={(key) => remove(key)}
                    />
                  )}
                </View>
                <View>
                  {categoryData?.length > 0 && (
                    <>
                      <Controller
                        control={control}
                        name={`items.${index}.category_name`}
                        render={({ field: { onChange } }) => (
                          <View style={styles.DorpdownView}>
                            <ModalDropdown
                              defaultValue={"Select"}
                              textStyle={styles.pickerTitle}
                              dropdownTextStyle={styles.pickerTitle}
                              renderSeparator={false}
                              showsVerticalScrollIndicator={false}
                              dropdownStyle={{ height: "20%", width: "86%" }}
                              onSelect={(value) => {
                                console.log('fields', fields)
                                // let fieldss = fields?.map((value) => value.category_name);
                                // var intersection = categoryData.filter(function(e) {
                                //   return fieldss.indexOf(e) > -1;
                                // });
                                // console.log('intersection', intersection)
                                onChange(categoryData[value]),
                                  setValueData(categoryData[value]),
                                  setIndexx(index);
                              }}
                              options={categoryData}
                            />
                            <Ionicons
                              name={"md-chevron-down"}
                              size={20}
                              color={theme.BLACK}
                              style={{ alignSelf: "center" }}
                            />
                          </View>
                        )}
                      />
                    </>
                  )}
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
                  {product?.length > 0 && getValues(`items.${index}.category_name`) !== '' && (
                    <>
                      <Controller
                        control={control}
                        name={`items.${index}.variant_name`}
                        initialValues={`items.${index}.variant_name`}
                        render={({ field: { onChange } }) => (
                          <View style={styles.DorpdownView}>
                            <ModalDropdown
                              defaultValue={"Select"}
                              style={{ flex: 0.5 }}
                              textStyle={styles.pickerTitle}
                              dropdownTextStyle={styles.pickerTitle}
                              renderSeparator={false}
                              showsVerticalScrollIndicator={false}
                              onSelect={(value) => {
                                onChange(product[value]),
                                setVariantData(product[value]);
                                setValue(`items.${index}.qty`, 0);
                              }}
                              dropdownStyle={{ width: "86%" }}
                              options={product}
                            />
                            <View style={styles.CashView}>
                              <Text style={styles.CardDetailsText}>
                                {getValues(`items.${index}.cash_price`)}
                              </Text>
                            </View>
                            <View style={styles.ChargeView}>
                              <Text style={styles.CardDetailsText}>
                                {getValues(`items.${index}.charge_price`)}
                              </Text>
                            </View>
                            <Ionicons
                              name={"md-chevron-down"}
                              size={20}
                              color={theme.BLACK}
                              style={{ alignSelf: "center" }}
                            />
                          </View>
                        )}
                      />
                    </>
                  )}
                  <View style={styles.CardLine} />
                  <Text style={styles.CardTitleText}>Enter Quantity</Text>
                  <Controller
                    control={control}
                    name={`items.${index}.qty`}
                    initialValues={`items.${index}.qty`}
                    render={({ field: { onChange, value } }) => (
                      <View style={styles.QualityContainer}>
                        <AntDesign
                          name="minuscircleo"
                          size={scale(25)}
                          color={theme.GRAY}
                          onPress={() => {
                            getValues(`items.${index}.qty`) > 0 &&
                            onChange(getValues(`items.${index}.qty`) - 1);
                            setQuantityRefresh(!qantityRefresh);
                          }}
                        />
                        <Text style={styles.CardDetailsText}>
                          {getValues(`items.${index}.qty`)}
                        </Text>
                        <AntDesign
                          name="pluscircleo"
                          size={scale(25)}
                          color={theme.DARK_BLUE}
                          onPress={() => {
                            getValues(`items.${index}.variant_name`) === '' ? Snackbar.show({
                              text: 'You cannot select variant',
                              duration: Snackbar.LENGTH_SHORT,
                            })  : getValues(`items.${index}.qty`) < itemStock ? onChange(
                              parseInt(getValues(`items.${index}.qty`) + 1)
                            ) : Snackbar.show({
                              text: 'You cannot add more than this as stock is not available',
                              duration: Snackbar.LENGTH_SHORT,
                            });
                            setQuantityRefresh(!qantityRefresh);
                          }}
                        />
                      </View>
                    )}
                  />
                </View>
              </View>
            </View>
          );
        })}
        <Pressable
          style={styles.AddContainer}
          onPress={() => {
            append({
              category_name: "",
              variant_sku: "",
              variant_name: '',
              qty: "0",
              charge_price: "",
              cash_price: "",
            });
          }
          }
        >
          <Text style={styles.Addtext}>Add New Category/Type</Text>
          <AntDesign
            name="pluscircleo"
            size={scale(22)}
            color={theme.DARK_BLUE}
          />
        </Pressable>
        <Text style={styles.Title}>Payment Details</Text>
        <Text style={styles.TitleText}>Select Mode of Payment</Text>
        <View style={[styles.Horizontal, { paddingTop: scale(8) }]}>
          <View style={styles.RadioBtnConatiner}>
            <Pressable
              style={
                isPaymentMode === "cash" ? styles.Selected : styles.NotSelected
              }
              onPress={() => {
                setPaymentMode("cash"),
                  setRefreshPaymentType(!refreshPaymentType);
              }}
            >
              <View
                style={
                  isPaymentMode === "cash"
                    ? styles.InnerDotSelected
                    : styles.InnerDotNotSelected
                }
              />
            </Pressable>
            <Text style={styles.BTNtext}>Cash</Text>
          </View>
          <View style={styles.RadioBtnConatiner}>
            <Pressable
              style={
                isPaymentMode !== "charge"
                  ? styles.NotSelected
                  : styles.Selected
              }
              onPress={() => {
                setPaymentMode("charge"),
                  setRefreshPaymentType(!refreshPaymentType);
              }}
            >
              <View
                style={
                  isPaymentMode !== "charge"
                    ? styles.InnerDotNotSelected
                    : styles.InnerDotSelected
                }
              />
            </Pressable>
            <Text style={styles.BTNtext}>Charge</Text>
          </View>
        </View>
        <Text style={styles.TitleText}>Total Payment</Text>
        <View style={styles.TotalContainer}>
          <Text style={styles.BTNtext}>{finalAmount}</Text>
        </View>
        <Text style={styles.Title}>Upload File</Text>
        <Pressable
          style={styles.UploadContainer}
          onPress={() => actionSheetRef.current?.setModalVisible()}
        >
          <Text style={styles.UploadText}>Upload Invoice/ Payment Receipt</Text>
        </Pressable>
        <ActionSheet ref={actionSheetRef}>
          <View style={styles.actionsheet}>
            <Text style={styles.titleText}>Select an image</Text>
            <Text onPress={() => fromCamera()} style={styles.titleTextBlack}>
              From Camera
            </Text>
            <Text onPress={() => fromGallery()} style={styles.titleTextBlack}>
              From Gallery
            </Text>
            <Text
              onPress={() => actionSheetRef.current?.hide()}
              style={styles.titleTextBlack}
            >
              Cancel
            </Text>
          </View>
        </ActionSheet>
        {photo ? (
          <Image source={{ uri: photo?.path }} style={styles.InvoiceImage} />
        ) : null}
        <Button
          Title={"Preview"}
          //onPress={()=>navigation.navigate('PreviewOrder')}
          onPress={handleSubmit(onSubmitOrder)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderRequest;
