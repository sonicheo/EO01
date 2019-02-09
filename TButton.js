import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native';

class TButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.props.onPress}
        >
          <Image style={styles.image}
            source={require('./Monster_Images/TreeRat.png')}
          />
          <Text style={styles.text}> Tree Rat </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0, // set flex to 0 to prevent overlapping of touchable opacity
    // paddingHorizontal: 10
  },
  //Makes It Circular
  button: {
    flexDirection: 'row',
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    height:60,
    backgroundColor:'#EFF0F1',
  },
  image: {
    width:60,
    height:59,
  },
  text:{
    paddingVertical:15,
    paddingHorizontal:90,
    fontSize:20,
  }
});

export default TButton;
