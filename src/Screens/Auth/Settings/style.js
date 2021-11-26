import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import theme from "../../../Utils/theme";
import fonts from "../../../Utils/fonts";

const styles = StyleSheet.create({
  MainCntainer: {
    flex: 1,
    backgroundColor: theme.WHITE,
  },
  TitleText: {
    fontFamily: fonts.JosefinSans_Regular,
    fontSize: scale(13),
    color: theme.BLACK,
    lineHeight: scale(13),
  },
  IconStyle:{
    tintColor: theme.BLUE_VERIENT,
  },
  DetailsText: {
    fontFamily: fonts.JosefinSans_Regular,
    fontSize: scale(16),
    color: theme.BLACK,
    lineHeight: scale(16),
    padding: 0
  },
  Line: {
    height: scale(1),
    width: "90%",
    backgroundColor: theme.BLACK,
    marginVertical: scale(18),
    opacity: 0.1,
    alignSelf: "center",
  },
  PwdContainer: {
    flexDirection: "row",
    marginHorizontal: scale(20),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    marginHorizontal: scale(16),
  },
  passwordEye: {
    marginRight: scale(12),
  },
  PwdView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
});
export default styles;
