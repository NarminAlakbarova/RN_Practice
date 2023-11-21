import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type CardProps = {
  title: string;
  image: any;
  desc: string;
};
export default function Card({title, image, desc}: CardProps) {
  return (
    <View>
      <Image source={image} style={styles.img} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 300,
  },
  titleContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
  desc: {
    fontSize: 20,
  },
});
