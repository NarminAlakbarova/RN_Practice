import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function DesignPage() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text}>3</Text>
      </View>
      <View style={styles.box4}>
        <Text style={styles.text}>4</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  box1: {
    height: 200,
    width: 100,
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    height: 200,
    width: 100,
    backgroundColor: 'blue',
    position: 'absolute',
    top: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box3: {
    height: 200,
    width: 100,
    backgroundColor: 'yellow',
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box4: {
    height: 200,
    width: 100,
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
  },
});
