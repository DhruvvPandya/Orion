import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import theme from "../../Utils/theme";
import fonts from "../../Utils/fonts";

const styles = StyleSheet.create({
  MainCntainer: {
    flex: 1,
    backgroundColor: theme.BACKGROUND,
    alignItems: 'center',
    paddingVertical: scale(70),
  },
  Logo: {
    height: scale(38),
    width: scale(98),
  },
  textContainer: {
    marginHorizontal: scale(10),
  },
  Title: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.WHITE,
    fontSize: scale(20),
    marginTop: verticalScale(45),
  },
  DetailsContainer: {
    backgroundColor: "rgba(0,0,0,0.3)",
    height: '60%',
    marginHorizontal: scale(16),
    width: "93%",
    borderRadius: scale(15),
    marginTop: scale(20),
    paddingVertical: scale(33),
    justifyContent: "space-around",
  },
  InputContainer: {
    flexDirection: 'row',
    marginHorizontal: scale(20),
    alignItems: 'center',
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
  },
  Line: {
    height: scale(1),
    width: '90%',
    backgroundColor: theme.WHITE,
    marginVertical: scale(10),
    marginBottom: scale(8),
    opacity: 0.1,
    alignSelf: 'center',
  },
  passwordEye: {
    alignSelf: 'flex-end',
  },
  BottomView: {
    backgroundColor: "rgba(0,0,0,0.3)",
    marginTop: scale(10),
    paddingVertical: scale(20),
    borderRadius: scale(10),
    width: '95%',
    paddingHorizontal: scale(25),
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default styles;
