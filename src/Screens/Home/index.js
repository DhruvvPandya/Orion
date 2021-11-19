import React, { useState , useEffect} from "react";
import { View, Text } from "react-native";
import * as Api from "../../Utils/Api";
import ApiConstants from "../../Utils/apiConstants";

const Home = () => {
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
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <Text style={{ fontSize: 100,  color: 'white' }} >Home</Text>
    </View>
  );
};

export default Home;
