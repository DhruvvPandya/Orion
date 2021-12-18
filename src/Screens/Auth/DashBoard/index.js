import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LineChart } from "react-native-chart-kit";
import styles from "./style";
import * as Api from "src/Utils/Api";
import ApiConstants from "src/Utils/apiConstants";
import Header from "src/Components/Header";
import { scale } from "react-native-size-matters";
import theme from "../../../Utils/theme";
import fonts from "../../../Utils/fonts";
import ModalDropdown from "react-native-modal-dropdown";
import DeviceInfo from 'react-native-device-info';
const isTablet = DeviceInfo.isTablet();

const DATA = ["Select", "date", "week", "month", "year"];

const DashBoard = ({ navigation }) => {
  const [dashBoardData, setDashboardData] = useState("");
  const [dashBoardList, setDashboardList] = useState("");
  const [title, setTitle] = useState("");

  const onDashBoardSuccess = async (data) => {
    console.log("data", data?.data);
    setDashboardData(data?.data?.orders_data);
    let dashboard = data?.data?.orders_data;
    dashboard = dashboard.splice(1);
    setDashboardList(dashboard);
  };

  const onDashBoard = () => {
    Api.getApicall(
      ApiConstants.BASE_URL + ApiConstants.DASHBOARD,
      onDashBoardSuccess
    );
  };

  const onDashBoardFilter = () => {
    Api.getApicall(
      ApiConstants.BASE_URL + ApiConstants.DASHBOARD  + '?' + 'filter' + '=' + title,
      onDashBoardSuccess
    );
  };

  useEffect(() => {
    onDashBoard();
  }, []);

  useEffect(() => {
    onDashBoardFilter();
  }, [title]);

  console.log("dashBoardData", dashBoardData, dashBoardList);
  console.log("title", title);
  return (
    <SafeAreaView style={styles.MainCntainer}>
      <Header Title={"DashBoard"} ProfileImage />
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <View style={styles.TopView}>
              <View style={styles.iconView}>
                <Image source={require("src/Assets/images/shipping.png")} style={isTablet?{height:scale(21),width:scale(21)}:{}} />
              </View>
              <View style={styles.TopDeatils}>
                <Text style={styles.Title}>
                  {dashBoardData && dashBoardData[0].total_orders}
                </Text>
                <Text style={styles.SubTitle} numberOfLines={2}>
                  Total Orders Request Created
                </Text>
              </View>
            </View>


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
                size={isTablet?35:20}
                color={theme.BLACK}
                style={{ alignSelf: "center" }}
              />
            </View>
          </View>
        }

        ListFooterComponent={
          <View style={styles.FooterView}>
            <Text style={styles.FooterText}>Summary</Text>
            <View style={styles.Line} />
            <Text style={styles.Title}>
              {dashBoardData && dashBoardData[0].total_orders}
            </Text>
            <Text
              style={[styles.SubTitle, { marginBottom: scale(15) }]}
              numberOfLines={2}
            >
              Total Orders Request Created
            </Text>
            <LineChart
              data={{
                // labels: ['Jun 21', 'May 21', 'Apr 21', 'Mar 21', 'Feb 21', 'Jan 21'], //Array of labels [Jun 21,May 21,Apr 21,Mar 21,Feb 21,Jan 21]
                datasets: [
                  {
                    data: [4.3, 4.8, 5, 4.9, 4.8], //Array of values
                    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                    // strokeWidth: 2, // optional
                    ...(isTablet?{strokeWidth: 5}:{strokeWidth: 2})
                  },
                  
                ],
              }}
              width={isTablet?890:350}
              height={isTablet?850:320}
              verticalLabelRotation={70}
              withInnerLines={false}
              chartConfig={{
                backgroundGradientFrom: 0,
                backgroundGradientFromOpacity: 0,
                backgroundGradientTo: 0,
                backgroundGradientToOpacity: 0,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                backgroundColor: (opacity = 0) =>
                  `rgba(255, 255, 255, ${opacity})`,
                strokeWidth: 2, // optional, default 3
                propsForDots:{
                  ...(isTablet?{r:"8"}:{})
                },
              }}
              bezier // type of line chart
             
            />
          </View>
        }
        style={styles.ListView}
        data={dashBoardList}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        numColumns={2}
        renderItem={({ item, index }) => (
          <View style={styles.DetailsCard}>
            <View style={styles.starView}>
              <Image source={require("src/Assets/images/star.png")}  style={isTablet?{height:scale(18),width:scale(18)}:{}} />
            </View>
            <Text style={styles.NumText}>{item.total_orders}</Text>
            <Text style={styles.DataTextView}>Total</Text>
            <View style={styles.HorizontalView}>
              <Text style={styles.DataText}>{item.order_status}</Text>
              <AntDesign name={"right"} size={isTablet?scale(12):scale(15)} color={theme.WHITE} />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
export default DashBoard;
