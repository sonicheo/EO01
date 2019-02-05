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

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Settings: {
      screen: Settings
    },
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);
