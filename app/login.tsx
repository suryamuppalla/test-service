import React, {useContext, useState} from 'react';
import { StyleSheet, TextInput, Button, Alert, Text, View } from 'react-native';
import api from "@/api";
import {storeData} from "@/storage";
import {useNavigation} from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState('qualcomm@qti.qualcomm.com');
  const [token, setToken] = useState('5bb40fea-531d-4a8a-87a7-8364883e1a12');
  const navigation: any = useNavigation();

  // Function to handle the login API call
  const handleLogin = async () => {

    try {
      // Example API endpoint and payload
      const response = await api({
        url: '/ping',
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      const result = await response.data;
      await storeData('token', token);
      navigation.navigate('(tabs)'); // Navigate to the home screen after successful login
      // login(); // Call the login function from AuthContext
      console.log('Logged in successfully:', result);
    } catch (error) {
      Alert.alert('Error', 'An error occurred while logging in. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Token"
        value={token}
        onChangeText={setToken}
        secureTextEntry={true}
        autoCapitalize="none"
      />

      <Button title="Login Now" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
});
