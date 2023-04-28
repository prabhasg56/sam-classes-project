import React from 'react'
import SignIn from './SignIn.js'
import SignUp from './SignUp.js'

// const Routes = () => (
//    <Router>
//       <Stack key = "root">
//          <Scene key = "signIn" component={SignIn} title="SignIn" />
//          <Scene key = "signUp" component={SignUp} title="SignUp" />
//       </Stack>
//    </Router>
// )
// export default Routes

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;