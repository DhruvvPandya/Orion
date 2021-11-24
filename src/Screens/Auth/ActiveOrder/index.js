import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import Header from '../../../Components/Header';
import Ordercard from '../../../Components/OrderCard';
import ModalDropdown from "react-native-modal-dropdown";
import Ionicons from "react-native-vector-icons/Ionicons";
import theme from '../../../Utils/theme';
import { scale } from 'react-native-size-matters';



const ActiveOrder = ({navigation}) => {

  const DATA = ["Select", "date", "week", "month", "year"];
  const [title, setTitle] = useState("");


  return (
    <SafeAreaView style={styles.MainCntainer}>
      <Header Title={'Active Order'} />
      <View style={styles.Container}>
        <View style={styles.Horizontal}>
          <Text style={styles.Title}>Active Orders</Text>
          <View style={styles.PickerView}>
            <Text style={[styles.SubTitle, { paddingRight: 10 }]}>
              Filter By:
            </Text>
            <ModalDropdown
              defaultValue={"Select"}
              textStyle={styles.pickerTitle}
              dropdownTextStyle={styles.pickerTitle}
              renderSeparator={false}
              showsVerticalScrollIndicator={false}
              onSelect={(value) => setTitle(DATA[value])}
              dropdownStyle={{ height: "22%" }}
              options={DATA}
            />
            <Ionicons
              name={"md-chevron-down"}
              size={scale(16)}
              color={theme.BLACK}
              style={{alignSelf:'flex-end', marginTop: scale(5)}}
            />
          </View>
        </View>
        <Ordercard onPress={()=>navigation.navigate('OrderDetails',{ScreenName:'Active Order Detail'})}/>
      </View>
    </SafeAreaView>
  );
};

export default ActiveOrder;
