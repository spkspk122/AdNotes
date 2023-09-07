import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {colors} from '../../utlis/constants';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    alignSelf: 'center',
  },
  innerConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  menuTouch: {},
  menuImg: {
    width: widthPercentageToDP('6%'),
    height: heightPercentageToDP('6%'),
    resizeMode: 'contain',
  },
  menuImgs: {
    width: widthPercentageToDP('6%'),
    height: heightPercentageToDP('6%'),
    resizeMode: 'contain',
    marginLeft: '2%',
  },
  mic: {
    width: widthPercentageToDP('8%'),
    height: heightPercentageToDP('6%'),
    resizeMode: 'contain',
    marginLeft: '2%',
  },
  scan: {
    width: widthPercentageToDP('6%'),
    height: heightPercentageToDP('6%'),
    resizeMode: 'contain',
    marginLeft: '2%',
  },
  iconView: {flexDirection: 'row', justifyContent: 'space-between'},
  userImgTch: {
    marginLeft: heightPercentageToDP('2%'),
  },
  jioTxt: {
    fontSize: heightPercentageToDP('3.4%'),
    color: colors.blue1,
    fontWeight: '900',
  },
  textBox: {
    borderColor: colors.gray3,
    color: colors.gray3,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: heightPercentageToDP('1%'),
    paddingHorizontal: widthPercentageToDP('3%'),
    marginBottom: heightPercentageToDP('1%'),
    height: heightPercentageToDP('5.6%'),

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
    marginLeft: '5%',
  },
  inputBox: {color: colors.black, width: '80%'},
  scanImgView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textBoxmainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
});

export default styles;
