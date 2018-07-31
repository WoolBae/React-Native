// import a libarary to help create a Component
import React from 'react';
import {AppRegistry} from 'react-native';
import  Header from './src/components/header';
// creat a Component
const App =() => (
  <Header/> // Reason of selfclosing tag THis does not have text
);


// render it to the device
AppRegistry.registerComponent('albums', () => App);
