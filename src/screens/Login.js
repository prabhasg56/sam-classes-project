import React from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';


const Login = ({ navigation }) => {
  const goToSignIn = () => {
    console.log('hi');
    Actions.signIn();
  }

  return (

    <View style={styles.container}>
      <Image
        source={require('../assets/images/circle.png')}
        style={styles.circle}
        resizeMode="stretch"
      />
      <Image
        source={require('../assets/images/amico.png')}
        style={styles.amicoLogo}
        resizeMode="stretch"
      />
      <Image
        source={require('../assets/images/digiimage.png')}
        style={styles.logo}
        resizeMode="stretch"
      />
      <Image
        source={require('../assets/images/digiicodes.png')}
        style={styles.digiiLogo}
        resizeMode="stretch"
      />
      
      <TouchableOpacity onPress={() =>
        navigation.navigate('SignIn')
      }>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log('hisss')}>
        <View style={styles.buttonSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
};

export default Login;

const { height } = Dimensions.get('screen');
const height_logo = height * 0.65;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#070550',
    height: '100%',
  },
  logo: {
    opacity: 0.3,
    transform: [{ rotate: '-36deg' }],
    zIndex: -1,
    position: 'absolute'
  },
  amicoLogo: {
    width: 301,
    height: 315,
    marginBottom: 360,
    opacity: 1.5,
    zIndex: 2,
    left: 45,
    top: 40,
    position: 'absolute'

  },
  circle: {
    zIndex: 1,
    position: 'absolute',
    top: -18,
    left: 80,
    opacity: 1
  },
  digiiLogo: {
    width: 380,
    height: 118.6,
    zIndex: 1,
    position: 'absolute',
    top: 450,
    left: 15,
    opacity: 1
  },
  button: {
    width: 381,
    height: 70,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#76A5FF',
    position: 'absolute',
    zIndex: 2,
    left: -190,
    top: 190,
    opacity: 1

  },
  buttonSignUp: {
    width: 381,
    height: 70,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#76A5FF',
    position: 'absolute',
    zIndex: 2,
    left: -190,
    top: 280,
    opacity: 1
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  }
});
