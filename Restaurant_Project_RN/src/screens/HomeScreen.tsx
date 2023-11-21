import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SearcBar from '../components/SearcBar';
import useResult from '../hooks/useResult';
import Cards from '../components/Cards';


export default function HomeScreen() {
  const [searchApi, results] = useResult();
  const [term, setTerm] = useState<string>('');


  const filteredData = (value: string) => {
    return results.filter((result: any) => result?.price == value);
  };

  const onInputSubmit = () => {
    searchApi(term);
  };
  
  return (
    <View>
      <SearcBar
        term={term}
        onInputChange={setTerm}
        onInputSubmit={onInputSubmit}
      />
      {results.length == 0 ? (
       <Text style={{fontSize:24}}>not found</Text>
      ) : (
        <>
          <Cards title="Cheap restaurant" result={filteredData('₺')} />
          <Cards title="Normal restaurant" result={filteredData('₺₺')} />
          <Cards title="Expensive restaurant" result={filteredData('₺₺₺')} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
