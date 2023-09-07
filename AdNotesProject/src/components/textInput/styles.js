import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {colors} from '../../utlis/constants';

const styles = StyleSheet.create({
  label: {
    color: colors.black,
    fontSize: heightPercentageToDP('2.5%'),
    fontWeight: '500',
    marginBottom: heightPercentageToDP('1%'),
  },
  textBox: {
    borderColor: colors.gray3,
    color: colors.gray3,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: heightPercentageToDP('1%'),
    paddingHorizontal: widthPercentageToDP('3%'),
    marginBottom: heightPercentageToDP('2%'),
    height: heightPercentageToDP('5.6%'),

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  multitextBox: {
    borderColor: colors.gray3,
    color: colors.gray3,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: heightPercentageToDP('1%'),
    paddingHorizontal: widthPercentageToDP('3%'),
    marginBottom: heightPercentageToDP('3%'),
    height: heightPercentageToDP('15%'),
    paddingVertical: widthPercentageToDP('0.5%'),
  },
  secureTextIconView: {
    width: '13%',
  },
  secureTextIcon: {
    width: widthPercentageToDP('5%'),
    height: widthPercentageToDP('5%'),
    resizeMode: 'contain',
  },
});

export default styles;
