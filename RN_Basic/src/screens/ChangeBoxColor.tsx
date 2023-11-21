import {StyleSheet, Text, View} from 'react-native';
import React, {useReducer} from 'react';
import Boxes from '../components/Boxes';
type StateColor = {
  red: number;
  green: number;
  blue: number;
};
const initialValue: StateColor = {
  red: 0,
  green: 0,
  blue: 0,
};
type Action = {
  type: 'changeRed' | 'changeGreen' | 'changeBlue';
  payload: number;
};
const reducer = (state: StateColor, action: Action): StateColor => {
  switch (action.type) {
    case 'changeRed':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : {...state, red: state.red + action.payload};
    case 'changeGreen':
      return state.green + action.payload > 255 ||
        state.red + action.payload < 0
        ? state
        : {...state, green: state.green + action.payload};
    case 'changeBlue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : {...state, blue: state.blue + action.payload};
  }
};
export default function ChangeBoxColor() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const {red, green, blue} = state;
  return (
    <View >
      <Text style={styles.headingTitle}>ChangeBoxColor</Text>
      <Boxes
        title="Red"
        onDecrease={() => dispatch({type: 'changeRed', payload: -20})}
        onIncrease={() => dispatch({type: 'changeRed', payload: 20})}
      />
      <Boxes
        title="Green"
        onDecrease={() => dispatch({type: 'changeGreen', payload: -20})}
        onIncrease={() => dispatch({type: 'changeGreen', payload: 20})}
      />
      <Boxes
        title="blue"
        onDecrease={() => dispatch({type: 'changeBlue', payload: -20})}
        onIncrease={() => dispatch({type: 'changeBlue', payload: 20})}
      />
      <View style={styles.container}>
        <View
          style={{
            width: 150,
            height: 150,
            backgroundColor: `rgb(${red},${green},${blue})`,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingTitle: {
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    rowGap: 15,
    paddingHorizontal: 20,
  },
  countText: {
    fontSize: 20,
  },
});
