import { Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import yelp from '../api/yelp';
import {RouteProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';


type DetailsScreenProps = {
  route?: RouteProp<{DetailsPage: {id: string}}, 'DetailsPage'>;
};
type YelpData = {
  name: string;
  phone: string;
  image_url: string;
  is_closed: boolean;
  id: string;
};
export default function DetailsScreen({route}: DetailsScreenProps) {
  const id = route?.params?.id;
  const [data, setData] = useState<YelpData | null>(null);

  const getData = async (id: string) => {
    try {
      const response = await yelp.get(`/${id}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, []);

  if (!data) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>{data.name}</Text>
      <Text>{data.phone}</Text>
      {data.is_closed ? <Icon name="closecircleo" /> : <Text>open</Text>}
      <Image style={styles.img} source={{uri: data.image_url}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
    rowGap: 20,
  },
  img: {
    width: '100%',
    height: '50%',
  },
});
