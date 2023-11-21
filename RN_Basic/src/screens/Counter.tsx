import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useReducer} from 'react';
type State = {
  count: number;
};
const initialState: State = {
  count: 0,
};

type Action = {
  type: 'increment' | 'decrement';
  payload: number;
};
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + action.payload};
    case 'decrement':
      return {...state, count: state.count - action.payload};
    default:
      return state;
  }
};
export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
      <View>
        <Text style={styles.headingTitle}>Counter</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="increment"
            onPress={() => dispatch({type: 'increment', payload: 1})}
          />
          <Text style={styles.countText}>Count:{state.count} </Text>
          <Button
            title="decrement"
            onPress={() => dispatch({type: 'decrement', payload: 1})}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingTitle: {
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    paddingVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    rowGap: 20,
    paddingHorizontal: 20,
  },
  countText: {
    fontSize: 20,
    textAlign: 'center',
  },
});
