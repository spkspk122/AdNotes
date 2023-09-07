import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import * as React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {SCREENS} from '../constant';

import {SafeAreaView} from 'react-native-safe-area-context';
import {iconpathurl} from '../constant/iconpathurl';
import {HomeNavigation} from './homeNavigation';
import {colors} from '../utlis/constants';
import Login from '../screens/loginScreen';
import {strings} from '../constant/strings';
import NavigationServices from './NavigationServices';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/actions/cartAction';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(props) {
  //useDispatch

  const dispatch = useDispatch();
  const handleLogout = () => {
    let payload = {
      userName: '',
      password: '',
    };
    dispatch(logout(payload));
    NavigationServices.navigate(SCREENS.login);
  };

  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen
          name={SCREENS.bottomTab}
          component={HomeNavigation}
          options={{
            headerShown: false,
            drawerIcon: () => (
              <TouchableOpacity onPress={handleLogout} style={styles.btn}>
                <Image source={iconpathurl.logout} style={styles.profileIcon} />
                <Text style={styles.lable}>{strings.logout}</Text>
              </TouchableOpacity>
            ),
            drawerLabel: '',
          }}
        />
      </Drawer.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  lable: {
    fontWeight: '700',
    color: colors.black,

    fontSize:
      Platform.OS == 'android'
        ? heightPercentageToDP('2.5%')
        : heightPercentageToDP('2%'),
  },
  profileIcon: {
    width:
      Platform.OS == 'android'
        ? widthPercentageToDP('8%')
        : widthPercentageToDP('7%'),
    height: heightPercentageToDP('5%'),
    resizeMode: 'contain',
  },
  logo: {
    width:
      Platform.OS == 'android'
        ? widthPercentageToDP('15%')
        : widthPercentageToDP('15%'),
    height: heightPercentageToDP('10%'),
    resizeMode: 'contain',
    marginLeft: '5%',
  },

  btn: {flexDirection: 'row'},
});
