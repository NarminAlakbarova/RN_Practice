import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

export default function RandomBox() {
  const [colors, setColors] = useState<string[]>([]);
  const addRandomBoxes = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue}) `;
  };
  return (
    <View>
      <Button
        title="Add box"
        onPress={() => setColors([...colors, addRandomBoxes()])}
      />
      <FlatList
        data={colors}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: item,
              height: 100,
              width: 100,
              margin: 10,
            }}></View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
