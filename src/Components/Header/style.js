import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import theme from "../../Utils/theme";
import fonts from "../../Utils/fonts";

const styles = StyleSheet.create({
  HeaderView: {
    height: scale(55),
    flexDirection: 'row',
    backgroundColor: theme.BACKGROUND,
    alignItems: 'center',
    paddingHorizontal: scale(14),
    justifyContent: 'space-between',
  },
  TitleView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
export default styles;
