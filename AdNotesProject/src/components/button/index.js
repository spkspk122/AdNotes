import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {baseStyle} from '../../constant/themes';
import {colors} from '../../utlis/constants';
import styles from './styles';

function CustomButton(props) {
  const {lable, onPress, CustomStyle} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[colors.blue1, colors.blue1]}
        style={[styles.container, CustomStyle]}>
        <Text
          style={[
            baseStyle.txtStyleOutPoppinBold(
              heightPercentageToDP('2.5%'),
              colors.white1,
            ),
            styles.lable,
          ]}>
          {lable}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
export default CustomButton;
