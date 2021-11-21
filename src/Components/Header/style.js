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
  },
  TitleView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex:1
  },
  Modalstyle: {
    backgroundColor: theme.BACKGROUND,
    flex:1,
    marginLeft: '25%',
    paddingHorizontal: scale(30),
    paddingVertical: scale(45)
  },
  ModalText:{
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.WHITE,
    fontSize: scale(18),
  },
  Line: {
    height: scale(1),
    width: "100%",
    backgroundColor: theme.WHITE,
    marginVertical: scale(16),
    marginBottom: scale(8),
    opacity: 0.1,
    alignSelf: "center",
  },
});
export default styles;
