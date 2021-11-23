import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from "react-native-vector-icons/AntDesign";
import RNPickerSelect from "react-native-picker-select";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LineChart } from 'react-native-chart-kit'
import styles from './style';
import * as Api from "src/Utils/Api";
import ApiConstants from "src/Utils/apiConstants";
import Header from 'src/Components/Header';
import { scale } from 'react-native-size-matters';
import theme from '../../../Utils/theme';
import fonts from '../../../Utils/fonts';

const DashBoard = ({ navigation }) => {
  const [dashBoardData, setDashboardData] = useState("");
  const onDashBoardSuccess = async (data) => {
    console.log("data", data?.data?.orders_data);
    setDashboardData(data?.data?.orders_data)
  };
  const onDashBoard = () => {
    Api.getApicall(
      ApiConstants.BASE_URL + ApiConstants.DASHBOARD,
      onDashBoardSuccess
    );
  };
  useEffect(() => {
    onDashBoard();
  }, []);
  console.log('dashBoardData', dashBoardData)
  return (
    <SafeAreaView style={styles.MainCntainer}>
      <Header Title={'DashBoard'} />
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <FlatList
          ListHeaderComponent={
            <View>
              <View style={styles.TopView}>
                <View style={styles.iconView}>
                  <Image source={require('src/Assets/images/shipping.png')} />
                </View>
                <View style={styles.TopDeatils}>
                  <Text style={styles.Title}>2246</Text>
                  <Text style={styles.SubTitle} numberOfLines={2}>Total Orders Request
                    Created</Text>
                </View>
              </View>
              <View style={styles.PickerView}>
                <Text style={styles.SubTitle}>Filter By:</Text>
                <RNPickerSelect
                  items={['data', 'item']}
                  style={{
                    inputAndroid: {
                      height: scale(20),
                      padding: 0,
                      fontSize: 18,
                      fontFamily: fonts.JosefinSans_Regular,
                    },
                    iconContainer: {
                      height: scale(25),
                      padding: 0,
                    },
                    placeholder: {
                      color: "black",
                      fontSize: 18,
                      fontFamily: fonts.JosefinSans_Regular,
                    },
                  }}
                  Icon={() => {
                    return (
                      <Ionicons name="chevron-down" size={22} color="black" />
                    );
                  }}
                  useNativeAndroidPickerStyle={false}
                /></View>
            </View>}
          ListFooterComponent={<View style={styles.FooterView}>
            <Text style={styles.FooterText}>Summary</Text>
            <View style={styles.Line} />
            <Text style={styles.Title}>2246</Text>
                  <Text style={[styles.SubTitle,{marginBottom: scale(15)}]} numberOfLines={2}>Total Orders Request
                    Created</Text>
            <LineChart
              data={{
                labels: ['Jun 21', 'May 21', 'Apr 21', 'Mar 21', 'Feb 21', 'Jan 21'], //Array of labels [Jun 21,May 21,Apr 21,Mar 21,Feb 21,Jan 21]
                datasets: [{
                  data: [4.3, 4.8, 5, 4.9, 4.8], //Array of values 
                  color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                  strokeWidth: 2 // optional
                }]
              }}
              width={350}
              height={320}
              verticalLabelRotation={70}
              withInnerLines={false}
              chartConfig={{
                backgroundGradientFrom: 0,
                backgroundGradientFromOpacity: 0,
                backgroundGradientTo: 0,
                backgroundGradientToOpacity: 0,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                backgroundColor: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
                strokeWidth: 2, // optional, default 3                       

              }}
              bezier // type of line chart              
            />
          </View>}
          style={styles.ListView}
          data={dashBoardData}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          numColumns={2}
          renderItem={({ item, index }) => (
            <View style={styles.DetailsCard}>
              <View style={styles.starView}>
                <Image source={require('src/Assets/images/star.png')} />
              </View>
              <Text style={styles.NumText}>{item.total_orders}</Text>
              <View style={styles.HorizontalView}>
                <Text style={styles.DataText}>{item.order_status}</Text>
                <AntDesign
                  name={'right'}
                  size={scale(15)}
                  color={theme.WHITE} />
              </View>
            </View>
          )} />

      </ScrollView>
    </SafeAreaView>
  );
};
export default DashBoard;
