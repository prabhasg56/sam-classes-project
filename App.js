import React from 'react';

import Splash from './src/screens/Splash';
import {View,AppRegistry} from 'react-native';
import Routes from './src/screens/Routes';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <View>
      <Splash />
      <Routes/>
    </View>
  );
};

export default App;

AppRegistry.registerComponent(()=>App)