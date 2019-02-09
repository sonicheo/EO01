import React, {Component} from 'react'

import {Image, Dimensions} from 'react-native';

const LocalImage = ({source, originalWidth, originalHeight}) => {
  let windowWidth = Dimensions.get('window').width
  let widthChange = (windowWidth)/originalWidth
  let newWidth = originalWidth * widthChange

  let windowHeight = Dimensions.get('window').height
  let heightChange = (windowHeight)/originalHeight
  let newHeight = originalHeight * heightChange
  return(
    <Image source={source} style={{ width: newWidth,height: newHeight }}/>
  )
}

export default LocalImage
