import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import theme from "../../../Utils/theme";
import fonts from "../../../Utils/fonts";
import DeviceInfo from 'react-native-device-info';
const isTablet = DeviceInfo.isTablet();

console.log("isTablet ",isTablet);
const styles = StyleSheet.create({
  MainCntainer: {
    flex: 1,
    backgroundColor: theme.BACKGROUND,
    alignItems: "center",
    paddingVertical:isTablet?scale(45):scale(70),
  },
  Logo: {
    height:isTablet?scale(30):scale(38),
    width:isTablet?scale(80):scale(98),
  },
  textContainer: {
    marginHorizontal:scale(10),
  },
  PwdView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  Title: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.WHITE,
    fontSize:isTablet?scale(15):scale(20),
    marginTop:isTablet?verticalScale(40):verticalScale(45),
  },
  DetailsContainer: {
    backgroundColor: "rgba(0,0,0,0.3)",
    marginHorizontal: scale(16),
    width: "93%",
    borderRadius: isTablet?scale(11):scale(15),
    marginTop:isTablet?scale(17):scale(20),
    paddingVertical:isTablet?scale(23):scale(33),
    paddingHorizontal: scale(20)
  },
  InputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  msgIcon:{ height:38
    ,width:45},
    passIcon:{ height:45
      ,width:40},
  PwdContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  usernameTitle: {
    fontFamily: fonts.JosefinSans_Regular,
    fontSize:isTablet?scale(11):scale(13),
    color: theme.WHITE,
    lineHeight:scale(13),
  },
  usernameDetails: {
    fontFamily: fonts.JosefinSans_Regular,
    fontSize:isTablet?scale(13):scale(16),
    color: theme.WHITE,
    lineHeight:isTablet?scale(16):scale(16),
    padding: 0,
    alignSelf: 'center'
  },
  forgetPwdText: {
    fontFamily: fonts.JosefinSans_Regular,
    fontSize: isTablet?scale(13):scale(16),
    color: theme.YELLOW,
    lineHeight: isTablet?scale(13):scale(16),
    padding: 0,
    textAlign: 'right',
    marginRight: scale(19),
    marginBottom: isTablet?scale(17):scale(25),
  },
  Line: {
    height: scale(1),
    width: "100%",
    backgroundColor: theme.WHITE,
    marginVertical: scale(10),
    marginBottom: scale(8),
    opacity: 0.1,
    alignSelf: "center",
  },
  passwordEye: {
    marginRight: scale(12),
  },
  BottomView: {
    backgroundColor: "rgba(0,0,0,0.3)",
    marginTop:isTablet?scale(7):scale(10),
    paddingVertical:isTablet?scale(12):scale(20),
    // borderRadius: scale(10),
    borderRadius: isTablet?scale(7):scale(10),
    width: "95%",
    paddingHorizontal: scale(25),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Container: {
    marginBottom:isTablet?scale(17):scale(18),
    justifyContent: 'center',
  },
});
export default styles;
