import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { signupAsync } from '../../../redux/slices/authSlice';

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const status = useSelector((state) => state.auth.status);
  const loading = status === 'loading';

  const handleSignUp = async () => {
    if (!email || !password) {
      console.log('Please enter data');
      return;
    }

    try {
      const credentials = { name, email, password };
      dispatch(signupAsync(credentials));
      navigation.navigate('Signin');
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp} disabled={loading}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.createAccountButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
