// LoginForm.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, TextInput as PaperInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; 
import ModalComponent from '../components/ModalComponent'; 
import {BLUE_1,RED} from "../constants/color"
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleLogin = () => {

    if (username === 'demo' && password === 'password') {
        navigation.navigate('Home');
      }
    else {
        openModal();
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>User Login</Text>
      <PaperInput
        label="User Id"
        value={username}
        onChangeText={(text) => setUsername(text)}
        mode="outlined"
        style={styles.input}
        outlineStyle={styles.inputOutline}
      />
      <PaperInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        mode="outlined"
        style={styles.input}
        outlineStyle={styles.inputOutline}
      />
      <TouchableOpacity onPress={() => console.log('Forgot your User Id')}>
        <Text style={styles.forgotLink}>Forgot UserID?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Forgot your Password')}>
        <Text style={styles.forgotLink}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <ModalComponent visible={isModalVisible} onClose={closeModal}>
            <Text style={styles.errorMessage}>Wrong Credentials</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.backButton}>Back</Text>
            </TouchableOpacity>
      </ModalComponent>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontFamily: "Poppins",
    textShadowColor: 'rgba(0, 0, 0, 0.3)', // Shadow color
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset (width, height)
    textShadowRadius: 5, // Shadow radius
  },
  input: {
    marginBottom: 16,
    borderRadius: 4,
  },
  inputOutline:{
    borderRadius: 50,
  },
  loginButton: {
    backgroundColor: BLUE_1,
    paddingVertical: 8,
    marginBottom: 8,
    marginHorizontal: 50,
    alignItems: 'center',
    borderRadius: 50,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 24,
  },
  forgotLink: {
    color: RED,
    marginBottom: 16,
  },
  errorMessage: {
    fontSize: 18,
    color: RED,
    marginBottom: 16,
    textAlign: 'center',
  },
  backButton: {
    color: BLUE_1,
    textAlign: 'center',
    marginTop: 16,
  },
});

export default LoginForm;
