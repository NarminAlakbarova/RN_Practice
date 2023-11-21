import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CardDetails from './CardDetails';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  DetailsPage: {id: string};
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type Item = {
  name: string;
  image_url: string;
  rating: number;
  title: string;
  id: string;
};

type CardsProps = {
  title: string;
  result: Item[];
};

export default function Cards({title, result}: CardsProps) {
  const navigation: HomeScreenNavigationProp = useNavigation();
  return (
    <View style={styles.conatiner}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={result}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('DetailsPage', {id: item.id})}>
            <CardDetails item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    margin: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
