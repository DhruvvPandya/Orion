import { StyleSheet, Platform } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import theme from "../../Utils/theme";
import fonts from "../../Utils/fonts";
import DeviceInfo from 'react-native-device-info';

const hasNotch = DeviceInfo.hasNotch();
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
    flex: 1
  },
  Modalstyle: {
    backgroundColor: theme.BACKGROUND,
    flex: 1,
    marginLeft: '25%',
    paddingHorizontal: scale(30),
    paddingVertical: Platform.OS === 'ios' && hasNotch ? scale(95) : scale(45)
  },
  ModalText: {
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
  LogoutModalStyle: {
    // height: '30%',
    width: '75%',
    backgroundColor: theme.WHITE,
    paddingHorizontal: scale(20),
    paddingVertical: scale(25)
  },
  LogoutTitle: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.BACKGROUND,
    fontSize: scale(18),
    textAlign: 'center'
  },
  LogOutDetails: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.BACKGROUND,
    fontSize: scale(14),
    marginTop: scale(12),
    textAlign: 'center'
  },
  Horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: scale(12),
    paddingHorizontal: scale(20),
  },
  btnTxt: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.DARK_BLUE,
    fontSize: scale(14),
  },
  Btn: {
    backgroundColor: theme.YELLOW,
    paddingHorizontal: scale(20),
    paddingVertical: scale(8),
    borderRadius: scale(8)
  },
  Image:{
    height: scale(38),
    width: scale(38),
    backgroundColor: '#f2f2f2',
    borderRadius: scale(25)
  },
  modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0909095E'
	},
  drawerContainer: {
		flex: 1,
		backgroundColor: '#0909095E'
	},
});
export default styles;
