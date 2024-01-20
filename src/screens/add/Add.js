import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { addItemAsync } from '../../redux/slices/dataSlice';
import { useDispatch } from 'react-redux';

const Add = ({ navigation }) => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const handleAdd = () => {
    if (todo) {
      dispatch(addItemAsync({ text: todo, userId: 1 }));
      setTodo('');  
    }
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="ToDo"
          onChangeText={(text) => setTodo(text)}
          value={todo}
        />
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Add;
