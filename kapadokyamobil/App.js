/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import {
  Text
} from 'react-native';

import ViewComponentSample from './components/ViewComponent';
import ScrollViewComponnet from './components/ScrollViewComponent';
import FlatListComponent from './components/FlatListComponent';
import TouchableHighlightComponent from './components/TouchableHighlightComponent';
import TouchableOpacityComponent from './components/TouchableOpacityComponent';
import ImageComponent from './components/ImageComponent';
import StatusBarComponent from './components/StatusBarComponent';
import SwitchComponent from './components/SwitchComponent';
import ImageBackgroundComponent from './components/ImageBackgroundComponent';
import TextInputComponent from './components/TextInputComponent';
import ModalComponent from './components/ModalComponent';

const App = () => {

  const [ctext,setCtext] = useState("State counter")

  return (
    <ModalComponent></ModalComponent>
  )
}



export default App;
