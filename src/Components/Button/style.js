import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import theme from "../../Utils/theme";
import fonts from "../../Utils/fonts";
import DeviceInfo from 'react-native-device-info';
const isTablet = DeviceInfo.isTablet();
const styles = StyleSheet.create({
  Button: {
    alignItems: "center",
    borderRadius:isTablet?scale(5):scale(6),
    backgroundColor: theme.YELLOW,
    paddingVertical:isTablet?scale(7):scale(10),
    // marginHorizontal: scale(15),
  },
  btnText: {
    color: theme.BLACK,
    fontSize:isTablet?scale(14):scale(16),
    fontFamily: fonts.JosefinSans_Regular,
    textAlign: "center",
  },
});
export default styles;
