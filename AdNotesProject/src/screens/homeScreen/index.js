import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import {heightPercentageToDP} from 'react-native-responsive-screen';
import Header from '../../components/header';
import Spacer from '../../components/spacer';
import styles from './styles';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';

const Home = () => {
  //local States

  //callbackFunction for TxtInput

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={styles.mainView}>
        <View style={styles.headerView}>
          <Header />
        </View>
        <ScrollView>
          <Text style={styles.txtStyle}>Categories</Text>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Home;
