import {StyleSheet} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import fonts from 'src/Utils/fonts';
import theme from 'src/Utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.BACKGROUND,
  },
  Title2: {
    fontFamily: fonts.JosefinSans_Regular,
    color: theme.WHITE,
    fontSize: scale(20),
    marginTop: verticalScale(45),
  },
});
