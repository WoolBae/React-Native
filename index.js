// import a libarary to help create a Component
import React from 'react';
import {AppRegistry,View} from 'react-native';
import  Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// creat a Component
const App =() => (
  <View>
  <Header headertext ={'Albums'} />
  <AlbumList/>
  </View>
);



// render it to the device
AppRegistry.registerComponent('albums', () => App);
