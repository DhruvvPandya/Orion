import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import theme from '../../../Utils/theme';
import fonts from '../../../Utils/fonts';
import DeviceInfo from 'react-native-device-info';
const isTablet = DeviceInfo.isTablet();

const styles = StyleSheet.create({
  MainCntainer: {
    flex: 1,
    backgroundColor: theme.BACKGROUND,
    alignItems: 'center',
    paddingVertical:isTablet?scale(45):scale(70),
    paddingBottom: scale(45),
  },
  Logo: {
    height:isTablet?scale(30):scale(38),
    width:isTablet?scale(80):scale(98),
  },
  Textcolor: {color:theme.YELLOW},
  textContainer: {
    marginHorizontal: scale(10),
  },
  Title: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.WHITE,
    fontSize:isTablet?scale(16):scale(20),
    marginTop:isTablet?verticalScale(35):verticalScale(45),
  },
  SubTitle: {
    fontFamily: fonts.JosefinSans_SemiBold,
    color: theme.WHITE,
    fontSize:isTablet?scale(12):scale(16),
    marginTop:verticalScale(15),
    marginHorizontal:scale(60),
    textAlign: "center",
  },
  msgIcon:{ height:38
    ,width:45},
    passIcon:{ height:45
      ,width:40},

  DetailsContainer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginHorizontal: scale(16),
    width: '93%',
    borderRadius:isTablet?scale(11):scale(15),
    marginTop:isTablet?scale(17):scale(20),
    paddingVertical:isTablet?scale(23):scale(33),
    paddingHorizontal: scale(20)
  },
  InputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  usernameTitle: {
    fontFamily: fonts.JosefinSans_Regular,
    fontSize:isTablet?scale(11):scale(13),
    color: theme.WHITE,
    lineHeight: scale(13),
  },
  usernameDetails: {
    fontFamily: fonts.JosefinSans_Regular,
    fontSize:isTablet?scale(13):scale(16),
    color: theme.WHITE,
    lineHeight: scale(16),
    padding: 0,
  },
  Line: {
    height: scale(1),
    width: '100%',
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
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginTop: scale(10),
    paddingVertical: scale(20),
    borderRadius: scale(10),
    width: '95%',
    paddingHorizontal: scale(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Container: {
    marginBottom: scale(18),
  },
  BottomText: {
    justifyContent: "flex-end",
    ...(isTablet?{height:scale(120)}:{flex: 1}),
  },
});
export default styles;
