import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import theme from "../../../Utils/theme";
import fonts from "../../../Utils/fonts";

const styles = StyleSheet.create({
  MainCntainer: {
    flex: 1,
    backgroundColor: theme.WHITE,
    alignItems: "center",
  },
  Title: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.BACKGROUND,
    fontSize: scale(20),
    marginTop: verticalScale(45),
  },
});
export default styles;
