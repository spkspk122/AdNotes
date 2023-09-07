import React, {useState} from 'react';
import {
  Image,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {colors} from '../../utlis/constants';

import styles from './styles';
import {strings} from '../../constant/strings';

const TextInputBox = props => {
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
  const [show, setShow] = useState(secureTextEntry);
  const handleShow = value => {
    setShow(value);
  };

  const singleInput = () => {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View
          style={[
            styles.textBox,
            editable == false && {backgroundColor: colors.lightGray},
            customStyle,
          ]}>
          <TextInput
            keyboardType={keyboardType}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={colors.gray}
            onChangeText={onChangeText}
            secureTextEntry={show}
            maxLength={maxLength}
            editable={editable}
            multiline={multiline}
            style={{color: colors.black, width: '80%'}}
          />
          {secureTextEntry && (
            <>
              <TouchableOpacity
                style={styles.secureTextIconView}
                onPress={() => handleShow(!show)}>
                {!show ? (
                  <Text>{strings.hide}</Text>
                ) : (
                  <Text>{strings.show}</Text>
                )}
              </TouchableOpacity>
            </>
          )}
          {image && <Image source={icon} style={styles.secureTextIcon} />}
        </View>
      </View>
    );
  };

  const Multiline = () => {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>

        <TextInput
          style={[
            styles.multitextBox,
            editable == false && {backgroundColor: colors.lightGray},
          ]}
          keyboardType={keyboardType}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={colors.gray}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
          editable={editable}
          multiline={multiline}
        />
      </View>
    );
  };
  const {type} = props;
  return <>{type === 1 ? Multiline() : singleInput()}</>;
};

export default TextInputBox;
