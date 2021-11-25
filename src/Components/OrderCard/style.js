import { StyleSheet, Platform } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import theme from "../../Utils/theme";
import fonts from "../../Utils/fonts";
import DeviceInfo from 'react-native-device-info';

const hasNotch = DeviceInfo.hasNotch();
const styles = StyleSheet.create({
  Ordercard:{
    backgroundColor: theme.BACKGROUND_VARIENT_1,
    paddingHorizontal: scale(12),
    paddingVertical: scale(20),
    marginVertical: scale(10)
  },
  HeaderView:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between'
  },
  FooterView:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    marginTop: scale(12)
  },
  Horizontal: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  TitleText: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.GRAY,
    fontSize: scale(13),
  },
  DetailsText: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.BLACK,
    fontSize: scale(16),
    marginLeft: scale(10)
  },
  InvoiceTitleText:{ 
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.GRAY,
    fontSize: scale(13),
    marginTop: scale(10)
  },
  InvoiceDetailsText: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.BLACK,
    fontSize: scale(16),
    marginTop: scale(6)
  },
  ProductView: {
    flexDirection: 'row'
    // marginTop: scale(8)
  },
  ProductDataView: {
    marginTop: scale(8)
  },
  ProductDetailstext: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.BLACK,
    fontSize: scale(16),
    marginTop: scale(6),
  },
  BtnView: {
    paddingHorizontal: scale(30),
    paddingVertical: scale(13),
    backgroundColor: theme.YELLOW,
    borderRadius: scale(6),
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontFamily: fonts.JosefinSans_SemiBold,
    color: theme.BLACK,
    fontSize: scale(16),
  },
  statusText: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.DARK_BLUE,
    fontSize: scale(16),
  },
});
export default styles;
