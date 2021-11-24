import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import theme from "../../Utils/theme";
import fonts from "../../Utils/fonts";

const styles = StyleSheet.create({
  Button: {
    alignItems: "center",
    borderRadius: scale(6),
    backgroundColor: theme.YELLOW,
    paddingVertical: scale(10),
    // marginHorizontal: scale(15),
  },
  btnText: {
    color: theme.BLACK,
    fontSize: scale(16),
    fontFamily: fonts.JosefinSans_Regular,
    textAlign: "center",
  },
});
export default styles;
