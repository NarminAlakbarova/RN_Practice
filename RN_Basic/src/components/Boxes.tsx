import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
type BoxesProps = {
  title: string;
  onIncrease: () => void;
  onDecrease: () => void;
};
export default function Boxes({title, onIncrease, onDecrease}: BoxesProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.buttonContainer}>
        <Button title={`increace ${title}`} onPress={() => onIncrease()} />
        <Button title={`decreace ${title}`} onPress={() => onDecrease()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    rowGap: 15,
  },
});
