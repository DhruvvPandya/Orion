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
  Horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: scale(23),
    marginBottom: scale(15)
  },
  Title: {
    fontFamily: fonts.JosefinSans_SemiBold,
    color: theme.BLACK,
    fontSize: scale(12),
    textTransform: 'uppercase'
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
  pickerTitle: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.BLACK,
    fontSize: scale(14),
  },
});
export default styles;
