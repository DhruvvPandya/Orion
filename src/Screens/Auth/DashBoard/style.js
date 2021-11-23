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
    fontSize: scale(30),
  },
  SubTitle: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.BLACK,
    fontSize: scale(16),
    opacity: 0.7,
    paddingRight: scale(50)
  },
  pickerTitle: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.BLACK,
    fontSize: scale(16),
    marginRight: scale(8),
  },
  TopView: {
    backgroundColor: theme.YELLOW,
    paddingHorizontal: scale(35),
    paddingVertical: scale(30),
    borderBottomLeftRadius: scale(16),
    borderBottomRightRadius: scale(16),
    flexDirection: 'row',
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: scale(85),
    width: scale(85),
    backgroundColor: theme.BACKGROUND,
    borderRadius: scale(55)
  },
  TopDeatils: {
    marginLeft: scale(20),
    alignSelf: 'center'
  },
  ListView: {
    flex: 1
  },
  DetailsCard: {
    flex: 1,
    backgroundColor: theme.DARK_BLUE,
    margin: scale(8),
    height: scale(200),
    borderRadius: scale(16),
    paddingTop: scale(18),
    paddingHorizontal: scale(16)
  },
  starView:{
   height: scale(47),
   width: scale(47),
   alignItems: 'center',
   justifyContent: 'center',
   alignSelf: 'flex-end',
   backgroundColor: theme.YELLOW,
   borderRadius: scale(40)
  },
  NumText:{
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.WHITE,
    fontSize: scale(30),
    marginTop: scale(15)
  },
  DataText:{
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.WHITE,
    fontSize: scale(14),
  },
  DataTextView:{
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.WHITE,
    fontSize: scale(14),
    marginTop: scale(16),
    marginBottom: scale(2)
  },
  HorizontalView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  FooterView: {
    backgroundColor: theme.WHITE,
    margin: scale(16),
    padding: scale(16),
    borderRadius: scale(16),
    elevation: 0.7,
    shadowColor: theme.BLACK,
    height: scale(400),
    shadowOpacity: 0.5,
    shadowOffset: {
      height: scale(5),
      width: scale(5)
    },
  },
  FooterText: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.BLACK,
    fontSize: scale(16),
  },
  Line: {
    height: scale(1),
    width: "100%",
    backgroundColor: theme.BLACK,
    marginVertical: scale(15),
    opacity: 0.1,
    alignSelf: "center",
  },
  PickerView:{
    flex:0.3,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginVertical: scale(8),
    alignItems: 'center',
    marginRight: scale(16),
    
  },
});
export default styles;
