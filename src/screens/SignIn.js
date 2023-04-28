import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react'

const SignIn = () => {
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
      <View style={{ backgroundColor: 'white', height: 540, width: 430, top: 240, borderTopLeftRadius: 60, borderTopRightRadius: 60, display: 'flex' }}>
        <Text style={{ color: 'black', fontSize: 20, marginTop: 20, marginLeft: 50 }}>Hello,</Text>
        <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', marginLeft: 50 }}>Login Your Account</Text>
        <TextInput
          style={styles.form}
          placeholderTextColor={"black"}
          placeholder="Username"
        //onChangeText={(text) => setPassword(text)}
        //value={password}
        />
        <TextInput
          style={styles.form}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={"black"}
        // onChangeText={(text) => setEmail(text)}
        //value={email}
        />
       
      </View>
      <View>
        <Text style={{color:'blue', marginLeft:220,marginBottom:10}}>Forgot Password?</Text>
      </View>
      <TouchableOpacity >
          <View style={styles.buttonSignUp}>
            <Text style={styles.buttonText}>Sign In</Text>
          </View>
        </TouchableOpacity>
    </View>
  )
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#070550',
    height: '100%',
  },
  amicoLogo: {
    width: 301,
    height: 315,
    marginBottom: 360,
    opacity: 1.5,
    left: 45,
    top: 15,
    position: 'absolute',
  },
  circle: {
    position: 'absolute',
    top: -18,
    left: 80,
    opacity: 0.7
  },
  form: {
    borderWidth: 0,
    borderRadius: 2,
    color: 'black',
    fontSize: 20,
    marginTop: 20,
    margin: 15,
    marginLeft: 50,
    marginRight: 60
  },

  buttonSignUp: {
    width: 350,
    height: 70,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#070550',
    
    top: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  }
});
