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
    color: theme.GRAY,
    fontSize: scale(14),
  },
  EditIcon: {
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: scale(20)
  },
  NameView: {
    flex: 0.2,
    backgroundColor: theme.YELLOW,
    paddingHorizontal: scale(20),
    paddingVertical: scale(30),
    borderBottomLeftRadius: scale(16),
    borderBottomRightRadius: scale(16),
    flexDirection: 'row',
    alignItems: 'center'
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
  NameData: {
    flex: 0.6,
    paddingTop: scale(10),
  },
  ImageData: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Image: {
    height: scale(85),
    width: scale(85),
    backgroundColor: '#f2f2f2',
    borderRadius: scale(55)
  },
  name: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.BACKGROUND,
    fontSize: scale(16),
  },
  Designation: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.BLACK,
    fontSize: scale(14),
  },
  AddressView: {
    flexDirection: 'row',
    marginLeft: - scale(4),
    marginVertical: scale(7)
  },
  DetailsView: {
    paddingHorizontal: scale(16),
    paddingTop: scale(20),
    flex: 0.7
  },
  DetailsText: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.BLACK,
    fontSize: scale(16),
    marginVertical: scale(3)
  },
  Line: {
    height: scale(1),
    width: "100%",
    backgroundColor: theme.BLACK,
    marginVertical: scale(8),
    opacity: 0.1,
    alignSelf: "center",
  },
});
export default styles;
