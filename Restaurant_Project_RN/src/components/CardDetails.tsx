import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
type Item = {
  image_url: string;
  name: string;
  rating: number;
};
type CardsProps = {
  item: Item;
};
export default function CardDetails({item}: CardsProps) {
  const isValidURL = (url: string) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  };
  return (
    <View style={styles.conatiner}>
      {item.image_url && isValidURL(item.image_url) ? (
        <Image style={styles.image} source={{uri: item.image_url}} />
      ) : null}
      <View style={styles.contexttitle}>
        <Text>{item?.name}</Text>
        <Text>Rating: {item?.rating}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    margin: 5,
  },
  image: {
    width: 250,
    height: 120,
  },
  contexttitle:{
marginTop:5
  }
});
