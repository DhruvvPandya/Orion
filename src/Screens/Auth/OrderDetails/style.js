import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import theme from "../../../Utils/theme";
import fonts from "../../../Utils/fonts";

const styles = StyleSheet.create({
  MainCntainer: {
    flex: 1,
    backgroundColor: theme.WHITE,
  },
  Container: {
    paddingHorizontal: scale(16),
  },
  Flex:{
    flex:0.48,
  },
  Horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HorizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  Title: {
    fontFamily: fonts.JosefinSans_SemiBold,
    color: theme.BLACK,
    fontSize: scale(12),
    textTransform: 'uppercase',
    marginTop: scale(23)
  },
  DetailsView: {
    backgroundColor: theme.BACKGROUND_VARIENT_1,
    height: scale(175),
    paddingHorizontal: scale(12),
    paddingVertical: scale(10),
    marginTop: scale(10),
  },
  TitleText: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.GRAY,
    fontSize: scale(13),
  },
  DetailsText: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.BLACK,
    fontSize: scale(14),
    textAlign:'right'
  },
  PickerView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SubTitle: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.GRAY,
    fontSize: scale(14),
  },
  Line: {
    height: scale(1),
    width: "100%",
    backgroundColor: theme.GRAY,
    marginVertical: scale(20),
    marginBottom: scale(8),
    alignSelf: "center",
  },
  pickerTitle: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.BLACK,
    fontSize: scale(14),
  },
  StatusView: {
    paddingHorizontal: scale(13),
    paddingVertical: verticalScale(6),
    borderRadius: scale(15),
    backgroundColor: theme.BOADER
  },
  txt: {
    fontSize: scale(12),
    fontFamily: fonts.JosefinSans_SemiBold,
    textTransform: 'uppercase',
    color: theme.DARK_BLUE
  },
  PaymentTitleText: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.GRAY,
    fontSize: scale(13),
    marginTop: scale(10)
  },
  PaymentDetailsText: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.BLACK,
    fontSize: scale(14),
  },
  VariantView: {
    flex: 0.4,
  },
  CashView: {
    flex: 0.2,
    alignItems: 'center'
  },
  ChargeView: {
    flex: 0.2,
    alignItems: 'center'
  },
  TotalContainer: {
    paddingVertical: scale(8),
    paddingHorizontal: scale(10),
    backgroundColor: theme.BACKGROUND_VARIENT_1,
    borderRadius: scale(6),
    borderColor: theme.BOADER,
    borderWidth: scale(1.5),
    marginTop: scale(8)
  },
  BTNtext: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.BLACK,
    fontSize: scale(16),
    marginLeft: scale(8)
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
});
export default styles;
