import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import theme from 'src/Utils/theme';
import fonts from '../../Utils/fonts';

export default ScaledSheet.create({
  mainview: {
    height: scale(60),
    width: '100%',
    // flex: 1,
  },
  pageContainer: {
    flex: 1,
  },
  footerview: {
    backgroundColor: theme.TRANSPARENT,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  tabview: {
    alignItems: 'center',
    height: verticalScale(60),
    justifyContent: 'center',
  },
  txt: {
    fontSize: scale(12),
    fontFamily: fonts.JosefinSans_SemiBold,
    textTransform: 'uppercase'
  },
  activetab: {
    backgroundColor: theme.BLACK,
  },
  ContainerView: {
    paddingHorizontal: scale(13),
    paddingVertical: verticalScale(6),
    borderRadius: scale(15),
  },
});
