import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import theme from "../../../Utils/theme";
import fonts from "../../../Utils/fonts";

const styles = StyleSheet.create({
  MainCntainer: {
    flex: 1,
    backgroundColor: theme.BACKGROUND,
    alignItems: "center",
    paddingVertical: scale(70),
  },
  Logo: {
    height: scale(38),
    width: scale(98),
  },
  textContainer: {
    marginHorizontal: scale(10),
  },
  PwdView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  Title: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.WHITE,
    fontSize: scale(20),
    marginTop: verticalScale(45),
  },
  DetailsContainer: {
    backgroundColor: "rgba(0,0,0,0.3)",
    marginHorizontal: scale(16),
    width: "93%",
    borderRadius: scale(15),
    marginTop: scale(20),
    paddingVertical: scale(33),
    paddingHorizontal: scale(20)
  },
  InputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  PwdContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  usernameTitle: {
    fontFamily: fonts.JosefinSans_Regular,
    fontSize: scale(13),
    color: theme.WHITE,
    lineHeight: scale(13),
  },
  usernameDetails: {
    fontFamily: fonts.JosefinSans_Regular,
    fontSize: scale(16),
    color: theme.WHITE,
    lineHeight: scale(16),
    padding: 0,
    alignSelf: 'center'
  },
  forgetPwdText: {
    fontFamily: fonts.JosefinSans_Regular,
    fontSize: scale(16),
    color: theme.YELLOW,
    lineHeight: scale(16),
    padding: 0,
    textAlign: 'right',
    marginRight: scale(19),
    marginBottom: scale(25),
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
    marginTop: scale(10),
    paddingVertical: scale(20),
    borderRadius: scale(10),
    width: "95%",
    paddingHorizontal: scale(25),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Container: {
    marginBottom: scale(18),
    justifyContent: 'center',
  },
});
export default styles;
