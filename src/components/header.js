// import libararies for making a component
import React from 'react';
import {Text,View, } from 'react-native';

// make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
  <View style ={viewStyle}>
  <Text style = {textStyle}>{props.headertext}</Text>
  </View>
 );
};

const styles = {
  viewStyle: {
    backgroundColor :'#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop:15,
    shadowColor: '#000',
    shadowOffset: { width:0, height:5},
    shadowOpacity:0.7,
    elevation: 5,
    position: 'relative'
  },
  textStyle: {
    fontSize: 50
  }
};


//make the component availabe to other parts of the app
export default Header;
