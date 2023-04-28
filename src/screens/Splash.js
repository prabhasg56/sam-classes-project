import React, {useState} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import Login from './Login';
import SignIn from './SignIn';

const Splash = () => {
  const [login, setLogin] = useState(true);
  setTimeout(() => {
    setLogin(false);
  }, 4000);

  return (
    <>
      {login ? (
        <View style={styles.container}>
          <View>
            <Image
              source={require('../assets/images/digiimage.png')}
              style={styles.logo}
              resizeMode="stretch"
            />
          </View>
        </View>
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default Splash;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.4;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#070550',
    height: '100%',
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
});
