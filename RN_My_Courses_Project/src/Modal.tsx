import {
  StyleSheet,
  Text,
  View,
  Modal as RNmodal,
  Button,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import React, {SetStateAction, useState} from 'react';

type ModalProps = {
  visibleModal: boolean;
  setVisibleModal: React.Dispatch<SetStateAction<boolean>>;
  onAddCourses: (value: string) => void;
};

export default function Modal({
  visibleModal,
  setVisibleModal,
  onAddCourses,
}: ModalProps) {

  const [inputValue, setInputValue] = useState<string>('');
  const handleCloseBtn = () => {
    setVisibleModal(false);
  };

  const handleInputChanges = (value: string) => {
    setInputValue(value);
  };
  const handleAdd = () => {
    if (!inputValue) {
      Alert.alert('Warning', 'Please add the course', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'OK'},
      ]);
    } else {
      setVisibleModal(false);
      onAddCourses(inputValue);
    }
  };
  return (
    <RNmodal
      animationType="slide"
      transparent={true}
      visible={visibleModal}
      onRequestClose={() => {
        setVisibleModal(!visibleModal);
      }}>
      <View style={styles.conatiner}>
        <Image source={require('./assets/coursesImg.png')} style={styles.img} />
        <TextInput
          placeholder="add here..."
          style={styles.input}
          value={inputValue}
          onChangeText={handleInputChanges}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="Add" onPress={handleAdd} color={'#006B20'} />
          </View>
          <View style={styles.button}>
            <Button title="Close" onPress={handleCloseBtn} color={'#B90000'} />
          </View>
        </View>
      </View>
    </RNmodal>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#DFE6EE',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 200,
    width: 200,
    borderRadius: 10,
  },
  input: {
    backgroundColor: '#7777',
    width: '83%',
    margin: 20,
    padding: 10,
  },
  buttons: {
    width: '80%',
    flexDirection: 'row',
    columnGap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '50%',
  },
});
