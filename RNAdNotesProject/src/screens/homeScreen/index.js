import React, {useState} from 'react';
import {FlatList, Image, Text, View, TouchableOpacity} from 'react-native';

//package
import {launchImageLibrary} from 'react-native-image-picker';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';

//component
import CustomButton from '../../components/button';
import Header from '../../components/header';
import Spacer from '../../components/spacer';
import TextInputBox from '../../components/textInput';

//constant
import {placeholder, strings} from '../../constant/strings';
//redux
import {addNote, deleteNote, updateNote} from '../../redux/actions/actions';
//styles
import styles from './styles';

const Home = () => {
  //local States

  const [data, setData] = useState({
    notes: '',
    title: '',
  });
  const [photo, setPhoto] = useState();

  const [editingData, setEditingData] = useState(null);

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
    dispatch(addNote(newNote));
    setData('');
    setPhoto(null);
  };

  //edit

  const handleUpdate = item => {
    const updatedNote = {
      id: item?.id,
      text: data?.notes,
      photo: photo,
      title: data?.title,
    };

    dispatch(updateNote(updatedNote));

    setData('');
  };

  const handleEdit = item => {
    setEditingData(item);
    setData({
      notes: item.text,
      title: item.title,
    });
    setPhoto(item.photo);
  };

  //renderItem for Notes

  const renderNotes = ({item}) => {
    return (
      <>
        <View style={styles.cardView}>
          <Spacer height={heightPercentageToDP('3%')} />
          <Text style={styles.title}>{` Title: ${item.title}`}</Text>

          {item?.photo && (
            <>
              <Text style={styles.title}>{` Image:`}</Text>
              <Spacer height={heightPercentageToDP('1%')} />
              <Image
                source={{
                  uri: item.photo,
                }}
                style={styles.menuImg}
              />
            </>
          )}

          <Spacer height={heightPercentageToDP('1%')} />
          <Text style={styles.notes}>{` Notes:${`\n`} ${item.text}`}</Text>
          <Spacer height={heightPercentageToDP('3%')} />
          <View style={styles.btnView}>
            <TouchableOpacity
              style={styles.btnTxtView}
              onPress={() => dispatch(deleteNote(item?.id))}>
              <Text style={styles.txt}>{strings.delete}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnTxtView}
              onPress={() =>
                editingData && editingData.id === item.id
                  ? handleUpdate(item)
                  : handleEdit(item)
              }>
              <Text style={styles.txt}>
                {editingData && editingData.id === item.id
                  ? strings.update
                  : strings.edit}
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
        <Header />

        <FlatList
          data={[1]}
          renderItem={() => {
            return (
              <>
                <Spacer height={heightPercentageToDP('3%')} />

                <View style={styles.container1}>
                  <TextInputBox
                    value={data.title}
                    placeholder={placeholder.notes}
                    onChangeText={txt => callBack(txt, 'title')}
                    label={strings.title}
                  />

                  <TextInputBox
                    type={1}
                    value={data.notes}
                    placeholder={placeholder.notes}
                    onChangeText={txt => callBack(txt, 'notes')}
                    label={strings.notes}
                  />
                  <Text style={styles.title}>{`Image:`}</Text>
                  <Spacer height={heightPercentageToDP('3%')} />
                  {photo && (
                    <View style={{}}>
                      <Image source={{uri: photo}} style={styles.menuImgs} />
                      <Spacer height={heightPercentageToDP('3%')} />
                    </View>
                  )}
                  <View style={styles.container2}>
                    <TouchableOpacity
                      style={styles.uploadBtn}
                      onPress={openGallery}>
                      <Text style={styles.uploadtxt}>{strings.upload}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.uploadBtn}
                      onPress={handleRemove}>
                      <Text style={styles.uploadtxt}>{strings.remove}</Text>
                    </TouchableOpacity>
                  </View>

                  <Spacer height={heightPercentageToDP('5%')} />
                  <CustomButton
                    CustomStyle={styles.btn}
                    lable={strings.submit}
                    onPress={handleSubmit}
                  />
                </View>
                <Spacer height={heightPercentageToDP('3%')} />

                <FlatList data={notesData} renderItem={renderNotes} />

                <Spacer height={heightPercentageToDP('3%')} />
              </>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;
