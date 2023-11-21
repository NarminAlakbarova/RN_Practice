// types.ts

import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  AboutPage: undefined;
  Counter: undefined;
  RandomBox: undefined;
  ChangeBoxColor: undefined;
  PasswordScreen: undefined;
  DesignPage: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
