// LoginForm.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, TextInput as PaperInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; 
import ModalComponent from '../components/ModalComponent'; 
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
        label="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        mode="outlined"
        style={styles.input}
      />
      <PaperInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        mode="outlined"
        style={styles.input}
      />
      <TouchableOpacity onPress={() => console.log('Forgot UserID')}>
        <Text style={styles.forgotLink}>Forgot UserID?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Forgot Password')}>
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: '#158EFF',
    paddingVertical: 8,
    marginBottom: 8,
    alignItems: 'center',
    borderRadius: 4,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 24,
  },
  forgotLink: {
    color: 'red',
    marginBottom: 16,
  },
  errorMessage: {
    fontSize: 18,
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
  backButton: {
    color: '#158EFF',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default LoginForm;
