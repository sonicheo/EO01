import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View }
from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import Settings from './Settings.js';
import Home from './Home.js';

import {
  Tree_Rat}
from './Monsters/Tree_Rat.js';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Tree_Rat: {
      screen: Tree_Rat
    },
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);
