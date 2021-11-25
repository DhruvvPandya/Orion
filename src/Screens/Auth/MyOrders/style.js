import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import theme from "../../../Utils/theme";
import fonts from "../../../Utils/fonts";

const styles = StyleSheet.create({
  MainCntainer: {
    flex: 1,
    backgroundColor: theme.WHITE
  },
  Container:{
   paddingHorizontal: scale(16),
  },
  Ordercard:{
    backgroundColor: theme.BACKGROUND_VARIENT_1,
    height: scale(220),
    paddingHorizontal: scale(12),
    paddingVertical: scale(20)
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  ProductDataView: {
    marginTop: scale(8)
  },
  ProductDetailstext: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.BLACK,
    fontSize: scale(16),
    marginTop: scale(6),
    textAlign: 'center'
  },
  BtnView: {
    paddingHorizontal: scale(30),
    paddingVertical: scale(13),
    backgroundColor: theme.YELLOW,
    borderRadius: scale(6),
    alignItems: 'center',
    justifyContent: 'center'
  },
  ModalText: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.DARK_BLUE,
    fontSize: scale(18),
  },
  btnText: {
    fontFamily: fonts.JosefinSans_SemiBold,
    color: theme.GRAY,
    fontSize: scale(16),
  },
  statusText: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.DARK_BLUE,
    fontSize: scale(22),
    marginBottom: 10
  },
  nullContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
  },
  modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0909095E'
	},
  LogoutModalStyle: {
    width: '75%',
    backgroundColor: theme.WHITE,
    paddingHorizontal: scale(20),
    paddingVertical: scale(25)
  },
});
export default styles;
