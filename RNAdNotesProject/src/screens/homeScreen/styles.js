import {StyleSheet} from 'react-native';
import {colors} from '../../utlis/constants';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {flex: 1},
  subContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  mainView: {flex: 1, backgroundColor: '#9A9A9A'},
  txtStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: heightPercentageToDP('15%'),
  },
  headerView: {backgroundColor: colors.blue_1, flex: 0.19},
  btn: {padding: '2%', borderRadius: heightPercentageToDP('1%')},
  imgbtn: {
    paddingHorizontal: heightPercentageToDP('5%'),
    paddingVertical: heightPercentageToDP('0.9%'),
    borderRadius: heightPercentageToDP('1%'),
    width: '50%',
    alignSelf: 'flex-start',
  },
  menuImgs: {
    width: widthPercentageToDP('50%'),
    height: heightPercentageToDP('14%'),
    resizeMode: 'cover',
    marginLeft: '2%',
  },
  menuImg: {
    width: widthPercentageToDP('85%'),
    height: heightPercentageToDP('14%'),
    resizeMode: 'cover',
    alignSelf: 'center',
  },
});

export default styles;
