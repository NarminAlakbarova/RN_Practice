// HomePage.tsx

import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import React from 'react';
import {HomeScreenNavigationProp} from '../type/type';

export type ArrItem = {
  name: string;
  id: string;
};

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomePage: React.FC<Props> = ({navigation}) => {
  const arr: ArrItem[] = [
    {
      name: 'Courses',
      id: '2',
    },

    {
      name: 'Counter',
      id: '5',
    },
  ];

  return (
    <View style={styles.content}>
      <Button
        title={'Courses'}
        onPress={() => navigation.navigate('AboutPage')}
      />
      <Button
        title={'Counter'}
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title={'RandomBox'}
        onPress={() => navigation.navigate('RandomBox')}
      />
      <Button
        title={'ChangeBoxColor'}
        onPress={() => navigation.navigate('ChangeBoxColor')}
      />
      <Button
        title={'PasswordScreen'}
        onPress={() => navigation.navigate('PasswordScreen')}
      />
      <Button
        title={'DesignPage'}
        onPress={() => navigation.navigate('DesignPage')}
      />
    </View>

    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //     <Text>Home Screen</Text>
    //     <Button
    //       title="Go to About"
    //       onPress={() => navigation.navigate('AboutPage')}
    //     />
    //     <Button
    //       title="Go to Contact"
    //       onPress={() => navigation.navigate('ContactPAge')}
    //     />
    //   </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    rowGap: 20,
    padding: 20,
  },
});

export default HomePage;
