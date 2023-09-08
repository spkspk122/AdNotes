import {StyleSheet} from 'react-native';
import {colors} from '../../utlis/constants';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {flex: 1},
  subContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  mainView: {backgroundColor: colors.red, flex: 1},
  txtStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: heightPercentageToDP('15%'),
  },
  headerView: {backgroundColor: colors.blue_1, flex: 0.19},
});

export default styles;
