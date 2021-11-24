import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import theme from "../../../Utils/theme";
import fonts from "../../../Utils/fonts";

const styles = StyleSheet.create({
  MainCntainer: {
    flex: 1,
    backgroundColor: theme.WHITE,
  },
  Title: {
    fontFamily: fonts.JosefinSans_SemiBold,
    color: theme.BLACK,
    fontSize: scale(12),
    textTransform: 'uppercase',
    marginTop: scale(23)
  },
  PCHorizontailView:{
flexDirection: 'row'
  },
  titleText: {
    fontSize: scale(14),
    color: theme.BACKGROUND,
    fontFamily: fonts.JosefinSans_Regular,
  },
  actionsheet: {
    height: verticalScale(200),
    paddingHorizontal: scale(15),
    justifyContent: 'space-evenly',
  },
  titleTextBlack: {
    fontSize: scale(15),
    color: theme.BLACK,
    fontFamily: fonts.JosefinSans_Regular,
  },
  ProductIPIndroid: {
    height: scale(20),
    padding: 0,
    fontSize: 18,
    color: theme.BACKGROUND_VARIENT_1,
    fontFamily: fonts.JosefinSans_Regular,
  },
  ProducticonContainer: {
    height: scale(25),
    padding: 0,
    flex: 0.1,
    marginTop: scale(5),
  },
  pickerTitle: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.BLACK,
    fontSize: scale(16),
  },
  ProductPlaceHolder: {
    color: theme.BACKGROUND_VARIENT_1,
    fontSize: 18,
    fontFamily: fonts.JosefinSans_Regular,
  },
  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  DorpdownView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  Container: {
    paddingHorizontal: scale(16),
    paddingBottom: scale(30)
  },
  TitleText: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.GRAY,
    fontSize: scale(13),
    marginTop: scale(16),
  },
  DetailsText: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.BLACK,
    fontSize: scale(16),
    padding: 0
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
  HorizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  Flex:{
    flex:0.48,
  },
  Line: {
    height: scale(1.5),
    borderColor: theme.DARK_BLUE,
    width: "100%",
    backgroundColor: theme.DARK_BLUE,
    alignSelf: "center",
    marginTop: scale(8)
  },
  ProductCard: {
    backgroundColor: theme.BACKGROUND_VARIENT_1,
    marginVertical: scale(8),
    padding: scale(8)
  },
  CardTitleText: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.GRAY,
    fontSize: scale(13),
  },
  CardLine: {
    height: scale(1.5),
    borderColor: theme.GRAY,
    width: "100%",
    backgroundColor: theme.GRAY,
    alignSelf: "center",
    marginTop: scale(10),
    marginBottom: scale(12),
    opacity: 0.5
  },
  Horizontal: {
    flexDirection: "row",
  },
  RadioBtnConatiner: {
    flexDirection: "row",
    alignItems: 'center',
    flex: 0.5
  },
  QualityContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: '35%',
    alignItems: 'center',
    marginTop: scale(12)
  },
  VariantView: {
    flex: 0.515,
  },
  CashView: {
    flex: 0.2,
    alignItems: 'center'
  },
  ChargeView: {
    flex: 0.2,
    alignItems: 'center'
  },
  CardDetailsText: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.BLACK,
    fontSize: scale(16),
  },
  Addtext: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.DARK_BLUE,
    fontSize: scale(12),
    textTransform: 'uppercase'
  },
  AddContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(12),
    backgroundColor: theme.BOADER,
    paddingVertical: scale(8)
  },
  Selected: {
    height: scale(22),
    width: scale(22),
    borderRadius: scale(15),
    borderColor: theme.DARK_BLUE,
    backgroundColor: theme.WHITE,
    borderWidth: scale(1.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  NotSelected: {
    height: scale(22),
    width: scale(22),
    borderRadius: scale(15),
    borderColor: theme.GRAY,
    backgroundColor: theme.WHITE,
    borderWidth: scale(1.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  InnerDotSelected: {
    height: scale(13),
    width: scale(13),
    borderRadius: scale(15),
    backgroundColor: theme.DARK_BLUE,
  },
  InnerDotNotSelected: {
    height: scale(13),
    width: scale(13),
    borderRadius: scale(15),
    backgroundColor: theme.WHITE,
  },
  BTNtext: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.BLACK,
    fontSize: scale(16),
    marginLeft: scale(8)
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
  UploadText: {
    fontFamily: fonts.JosefinSans_SemiBold,
    color: theme.DARK_BLUE,
    fontSize: scale(13),
  },
  UploadContainer: {
    paddingVertical: scale(8),
    borderColor: theme.DARK_BLUE,
    borderRadius: scale(6),
    borderWidth: scale(1.5),
    width: '75%',
    alignItems: 'center',
    marginTop: scale(8),
    marginBottom: scale(18)
  },
  IPandroidContainer: {
    color: theme.BLACK,
    fontSize: scale(18),
    fontFamily: fonts.Proxima_Nova_Regular,
  },
  PlaceHolder: {
    color: theme.BLACK,
    fontSize: scale(18),
    fontFamily: fonts.JosefinSans_Regular,
  },
  InvoiceImage: {
    height: scale(130),
    width: scale(90),
    alignSelf: 'center',
    marginBottom: scale(25)
  },


});
export default styles;
