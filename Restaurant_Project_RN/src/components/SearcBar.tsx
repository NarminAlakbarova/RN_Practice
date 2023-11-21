import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {SetStateAction} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

type SearcBarProps = {
  term: string;
  onInputChange: React.Dispatch<SetStateAction<string>>;
  onInputSubmit: () => void;
};
const SearcBar: React.FC<SearcBarProps> = ({
  term,
  onInputChange,
  onInputSubmit,
}) => {
  return (
    <View style={styles.searcContainer}>
      <Icon name="search1" style={styles.icon} />
      <TextInput
        style={styles.inputStyle}
        autoCorrect={false}
        placeholder="search..."
        autoCapitalize="none"
        value={term}
        onChangeText={onInputChange}
        onEndEditing={onInputSubmit}
      />
    </View>
  );
};
export default SearcBar;
const styles = StyleSheet.create({
  searcContainer: {
    margin: 10,
    flexDirection: 'row',
    backgroundColor: '#7777',
    alignItems: 'center',
    borderRadius: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    fontSize: 28,
    marginHorizontal: 10,
  },
});
