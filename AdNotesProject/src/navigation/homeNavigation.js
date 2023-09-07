import * as React from 'react';
import {Image, StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {SCREENS} from '../constant';
import Home from '../screens/homeScreen';
import {iconpathurl} from '../constant/iconpathurl';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Order from '../screens/ordersScreen';
import {colors} from '../utlis/constants';
import Categories from '../screens/categoriesScreen';
import Profile from '../screens/profile';

export const HomeNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: colors.blue1,
      }}>
      <Tab.Screen
        name={SCREENS.home}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={iconpathurl.home}
              style={focused ? styles.selectMenu : styles.menuImgs}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.order}
        component={Order}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={iconpathurl.product}
              style={focused ? styles.selectMenu : styles.menuImgs}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.categories}
        component={Categories}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={iconpathurl.catagory}
              style={focused ? styles.selectMenu : styles.menuImgs}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.profile}
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={iconpathurl.profile}
              style={focused ? styles.selectMenu : styles.menuImgs}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  menuImgs: {
    width: widthPercentageToDP('6%'),
    height: heightPercentageToDP('6%'),
    resizeMode: 'contain',
  },
  selectMenu: {
    width: widthPercentageToDP('6%'),
    height: heightPercentageToDP('6%'),
    resizeMode: 'contain',
    tintColor: colors.blue1,
  },
});

export default styles;
