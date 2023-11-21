import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Modal from './src/Modal';

type Courses = {
  text: string;
  id: string;
};

export default function App() {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [coursesList, setCoursesList] = useState<Courses[]>([]);

  const handleVisibleModal = () => {
    setVisibleModal(true);
  };
  const handleAddCourses = (courseTitle: string) => {
    if (!courseTitle) {
      return;
    }

    setCoursesList(prevCourses => [
      ...prevCourses,
      {
        text: courseTitle,
        id: Math.random().toString(),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add Cours"
        color={'#68505D'}
        onPress={handleVisibleModal}
      />
      {visibleModal ? (
        <Modal
          visibleModal={visibleModal}
          setVisibleModal={setVisibleModal}
          onAddCourses={handleAddCourses}
        />
      ) : null}

      <FlatList
        style={{marginTop: 20}}
        data={coursesList}
        renderItem={({item}) => (
          <View style={styles.coursesList}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  coursesList: {
    backgroundColor: '#A4B790',
    padding: 10,
    marginVertical: 8,
  },
});
