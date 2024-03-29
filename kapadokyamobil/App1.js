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
import FlexboxLayout from './layout/flexboxlayout';
import FlexboxLayout2 from './layout/FlexboxLayout2';
import FlexboxLayout3 from './layout/FlexboxLayout3';
import FlexboxLayout4 from './layout/FlexboxLayout4';

const App = () => {

  const [ctext,setCtext] = useState("State counter")

  return (
    <FlexboxLayout4></FlexboxLayout4>
  )
}



export default App;
