import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import styles from './styles';
import TextInputBox from '../../components/textInput';
import {loginStrings, placeholder, strings} from '../../constant/strings';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Spacer from '../../components/spacer';
import CustomButton from '../../components/button';
import {ValidationRegx} from '../../utlis/HelperStyle';
import NavigationServices from '../../navigation/NavigationServices';
import {SCREENS} from '../../constant';
import {useDispatch} from 'react-redux';
import * as CartAction from './../../redux/actions/cartAction';

const Login = () => {
  //local States
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  //dispatch

  const dispatch = useDispatch();

  //callbackFunction for TxtInput

  const callback = (txt, id) => {
    let copiedData = {...loginData};

    switch (id) {
      case 'email':
        copiedData.email = txt;
        return setLoginData(copiedData);
      case 'password':
        copiedData.password = txt;
        return setLoginData(copiedData);
      default:
        return setLoginData(copiedData);
    }
  };

  //validation
  const validation = () => {
    if (!ValidationRegx.emailgRegex.test(loginData.email)) {
      alert(placeholder.email);
      return false;
    } else if (!ValidationRegx.passwordRegex.test(loginData.password)) {
      alert(placeholder.password);
      return false;
    } else {
      let payload = {
        userName: loginData.email,
        password: loginData.password,
      };
      dispatch(CartAction.login(payload));
      NavigationServices.navigate(SCREENS.drawerNavigation);
      setLoginData('');
    }
  };

  //submit

  const handleLogin = () => {
    if (validation()) {
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Spacer height={heightPercentageToDP('20%')} />

        <View style={styles.titleView}>
          <Text style={styles.titleTxt}>{loginStrings.title}</Text>
        </View>
        <Spacer height={heightPercentageToDP('5%')} />
        <TextInputBox
          value={loginData?.email}
          placeholder={placeholder.email}
          onChangeText={txt => callback(txt, 'email')}
          label={loginStrings.userName}
        />
        <TextInputBox
          value={loginData?.password}
          placeholder={placeholder.password}
          onChangeText={txt => callback(txt, 'password')}
          label={loginStrings.password}
          secureTextEntry
          maxLength={16}
        />
        <Spacer height={heightPercentageToDP('5%')} />
        <CustomButton
          CustomStyle={styles.btn}
          lable={loginStrings.login}
          onPress={handleLogin}
        />
      </View>
    </View>
  );
};

export default Login;
