import {StyleSheet} from 'react-native';
import {colors} from '../../utlis/constants';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {backgroundColor: colors.blueBackground, flex: 1},
  subContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  titleView: {justifyContent: 'center', alignItems: 'center'},
  titleTxt: {
    fontSize: heightPercentageToDP('3%'),
    color: colors.white,
    fontWeight: '900',
  },
  btn: {padding: '2%', borderRadius: heightPercentageToDP('1%')},
});

export default styles;
