/* eslint-disable prettier/prettier */
import {Dimensions} from 'react-native';
import {colors} from './constants';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

//get width dimension
export const WidthDimension = value => {
  return screenWidth * value;
};

//get height dimension
export const HeightDimension = value => {
  return screenHeight * value;
};

export const ValidationRegx = {
  emailgRegex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
  passwordRegex: /^[a-zA-Z0-9[#?!@$%^&*-]{8,16}$/,
  phnoRegex: /^[0-9]{10}$/,
};
