import React, {useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';

import {heightPercentageToDP} from 'react-native-responsive-screen';
import Header from '../../components/header';
import Spacer from '../../components/spacer';
import styles from './styles';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import TextInputBox from '../../components/textInput';
import {loginStrings, placeholder, strings} from '../../constant/strings';
import CustomButton from '../../components/button';
import {iconpathurl} from '../../constant/iconpathurl';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {addNote, deleteNote} from '../../redux/actions/actions';
import {colors} from '../../utlis/constants';
import {TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const Home = () => {
  //local States

  const [data, setData] = useState({
    notes: '',
    title: '',
  });
  const [photo, setPhoto] = useState();

  //imageLauncher
  let Options = {
    mediaType: 'photo',

    quality: 1,
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(Options);

    setPhoto(result.assets[0].uri);
    console.log(result.assets[0].uri);
  };

  //handleRemove

  const handleRemove = () => {
    setPhoto(null);
  };

  //useDispatch

  const dispatch = useDispatch();

  //useSelector

  const notesData = useSelector(state => state.notesReducer.notes);

  //callback Function

  const callBack = (txt, id) => {
    let copiedData = {...data};
    switch (id) {
      case 'title':
        copiedData.title = txt;
        return setData(copiedData);
      case 'notes':
        copiedData.notes = txt;
        return setData(copiedData);

      default:
        return setData(copiedData);
    }
  };

  //submit Button
  const handleSubmit = () => {
    const newNote = {
      id: Date.now(),
      text: data?.notes,
      photo: photo,
      title: data?.title,
    };

    dispatch(addNote(newNote, 'ajith'));
  };

  //renderItem for Notes

  const renderNotes = ({item}) => {
    return (
      <>
        <View
          style={{
            backgroundColor: colors.white,
            width: '90%',
            alignSelf: 'center',
            borderRadius: heightPercentageToDP('0.5%'),
          }}>
          <Spacer height={heightPercentageToDP('3%')} />
          <Text
            style={{
              marginHorizontal: '3%',
              color: colors.black,
              fontSize: heightPercentageToDP('2.2%'),
              fontWeight: '700',
            }}>
            {` Title: ${item?.title} `}
          </Text>

          {item?.photo && (
            <>
              <Spacer height={heightPercentageToDP('1%')} />
              <Image source={{uri: item?.photo}} style={styles.menuImg} />
            </>
          )}

          <Spacer height={heightPercentageToDP('1%')} />
          <Text
            style={{
              marginHorizontal: '3%',
              color: colors.black,
              fontSize: heightPercentageToDP('2.4%'),
              fontWeight: '700',
              fontStyle: 'italic',
            }}>
            {` Notes:${`\n`} ${item?.text} `}
          </Text>
          <Spacer height={heightPercentageToDP('3%')} />
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                marginHorizontal: '3%',
                backgroundColor: colors.blue1,
                width: '20%',
                borderRadius: heightPercentageToDP('0.5%'),
                padding: '2%',
              }}
              onPress={() => dispatch(deleteNote(item?.id))}>
              <Text
                style={{
                  marginHorizontal: '3%',
                  color: colors.white1,
                  fontSize: heightPercentageToDP('2.2%'),
                  textAlign: 'center',
                }}>
                Delete
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginHorizontal: '3%',
                backgroundColor: colors.blue1,
                width: '20%',
                borderRadius: heightPercentageToDP('0.5%'),
                padding: '2%',
              }}>
              <Text
                style={{
                  marginHorizontal: '3%',
                  color: colors.white1,
                  fontSize: heightPercentageToDP('2.2%'),
                  textAlign: 'center',
                }}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
          <Spacer height={heightPercentageToDP('3%')} />
        </View>
        <Spacer height={heightPercentageToDP('3%')} />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.headerView}>
          <Header />
        </View>

        <Spacer height={heightPercentageToDP('3%')} />

        <View style={{width: '90%', alignSelf: 'center'}}>
          <TextInputBox
            value={data}
            placeholder={placeholder.notes}
            onChangeText={txt => callBack(txt, 'title')}
            label={strings.notes}
          />

          <TextInputBox
            type={1}
            value={data}
            placeholder={placeholder.notes}
            onChangeText={txt => callBack(txt, 'notes')}
            label={strings.notes}
          />
          {photo && (
            <View style={{}}>
              <Image source={{uri: photo}} style={styles.menuImgs} />
              <Spacer height={heightPercentageToDP('3%')} />
            </View>
          )}
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                marginHorizontal: '3%',
                backgroundColor: colors.blue1,
                width: '35%',
                borderRadius: heightPercentageToDP('0.5%'),
                padding: '2%',
              }}
              onPress={openGallery}>
              <Text
                style={{
                  color: colors.white1,
                  fontSize: heightPercentageToDP('2.2%'),
                  textAlign: 'center',
                  fontWeight: '700',
                }}>
                {strings.upload}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginHorizontal: '3%',
                backgroundColor: colors.blue1,
                width: '35%',
                borderRadius: heightPercentageToDP('0.5%'),
                padding: '2%',
              }}
              onPress={handleRemove}>
              <Text
                style={{
                  color: colors.white1,
                  fontSize: heightPercentageToDP('2.2%'),
                  textAlign: 'center',
                  fontWeight: '700',
                }}>
                remove
              </Text>
            </TouchableOpacity>
          </View>

          <Spacer height={heightPercentageToDP('3%')} />
          <CustomButton
            CustomStyle={styles.btn}
            lable={strings.enter}
            onPress={handleSubmit}
          />
        </View>
        <Spacer height={heightPercentageToDP('3%')} />

        <FlatList data={notesData} renderItem={renderNotes} />

        <Spacer height={heightPercentageToDP('3%')} />
      </View>
    </View>
  );
};

export default Home;
