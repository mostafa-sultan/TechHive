import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginAsync } from '../../../redux/slices/authSlice';
import styles from './styles';

const Signin = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (inputName, text) => {
    if (inputName === 'email') {
      setEmail(text);
    } else if (inputName === 'password') {
      setPassword(text);
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      console.log('Please enter data');
      return;
    }

    try {
      setLoading(true);
      const credentials = { email, password };
      await dispatch(loginAsync(credentials));
      navigation.replace('Home');
    } catch (error) {
      console.error('Login failed', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => handleInputChange('email', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => handleInputChange('password', text)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.createAccountButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signin;
