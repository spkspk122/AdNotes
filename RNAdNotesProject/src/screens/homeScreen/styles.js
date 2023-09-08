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
  mainView: {flex: 1, backgroundColor: '#ffff'},
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
    width: widthPercentageToDP('80%'),
    height: heightPercentageToDP('14%'),
    resizeMode: 'cover',
    marginLeft: '2%',
    alignSelf: 'center',
  },
  menuImg: {
    width: widthPercentageToDP('85%'),
    height: heightPercentageToDP('14%'),
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  cardView: {
    backgroundColor: colors.white,
    width: '90%',
    alignSelf: 'center',
    borderRadius: heightPercentageToDP('0.5%'),
    borderColor: colors.gray,
    borderWidth: heightPercentageToDP('0.5%'),
    elevation: 5,
  },
  title: {
    marginHorizontal: '3%',
    color: colors.black,
    fontSize: heightPercentageToDP('2.2%'),
    fontWeight: '700',
  },
  notes: {
    marginHorizontal: '3%',
    color: colors.black,
    fontSize: heightPercentageToDP('2.4%'),
    fontWeight: '700',
    fontStyle: 'italic',
  },
  btnView: {flexDirection: 'row'},
  btnTxtView: {
    marginHorizontal: '3%',
    backgroundColor: colors.blue1,
    width: '20%',
    borderRadius: heightPercentageToDP('0.5%'),
    padding: '2%',
  },

  txt: {
    marginHorizontal: '3%',
    color: colors.white1,
    fontSize: heightPercentageToDP('2.2%'),
    textAlign: 'center',
  },
  container1: {width: '90%', alignSelf: 'center'},
  uploadBtn: {
    marginHorizontal: '3%',
    backgroundColor: colors.blue1,
    width: '35%',
    borderRadius: heightPercentageToDP('0.5%'),
    padding: '2%',
  },
  uploadtxt: {
    color: colors.white1,
    fontSize: heightPercentageToDP('2.2%'),
    textAlign: 'center',
    fontWeight: '700',
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default styles;
