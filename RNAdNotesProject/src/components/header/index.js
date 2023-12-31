import React, {useState} from 'react';
import {Image, TouchableOpacity, View, Text, TextInput} from 'react-native';

import {iconpathurl} from '../../constant/iconpathurl';
import styles from './styles';

//redux

import {DrawerActions} from '@react-navigation/native';
import {SCREENS} from '../../constant';
import NavigationService from '../../navigation/NavigationServices';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {colors} from '../../utlis/constants';
import {strings} from '../../constant/strings';
import TextInputBox from '../textInput';

function Header(props) {
  const {
    label,
    value,
    keyboardType = 'default',
    placeholder = 'Enter here',
    onChangeText,
    placeholderTextColor,
    secureTextEntry = false,
    maxLength,
    editable,
    multiline,
    customStyle,
    image = false,
    icon,
  } = props;

  const [select, setSelect] = useState('');

  const renderContentOne = () => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.innerConatiner}>
          <TouchableOpacity
            style={styles.menuTouch}
            onPress={() =>
              NavigationService.navigationRef.dispatch(
                DrawerActions.openDrawer(),
              )
            }>
            <Image source={iconpathurl.menu} style={styles.menuImg} />
          </TouchableOpacity>
          <Text style={styles.jioTxt}>{strings.jio}</Text>
          <View style={styles.iconView}>
            <TouchableOpacity>
              <Image source={iconpathurl.notification} style={styles.menuImg} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.headerContainer}>{renderContentOne()}</View>
    </>
  );
}

export default Header;
