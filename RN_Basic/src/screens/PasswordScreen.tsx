import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

export default function PasswordScreen() {
  const [inputValue, setInputValue] = useState<string>('');
  return (
    <View style={styles.container}>
      <Text style={styles.headingTitle}>PasswordScreen</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={inputValue}
        onChangeText={newValue => setInputValue(newValue)}
      />
      {inputValue.length < 6 ? (
        <Text>Your password less than 6 char</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  headingTitle: {
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    paddingVertical: 20,
  },
  container: {
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
  },
});
