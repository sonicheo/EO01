import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground }
  from 'react-native';
import TButton from './TButton.js';

export class Home extends Component {
  render () {
    return (
      <View>
        <TButton onPress={() => this.props.navigation.navigate('Tree_Rat')} title = "Tree_Rat" />
        <TButton/>
      </View>
    )
  }
};


export default Home;
