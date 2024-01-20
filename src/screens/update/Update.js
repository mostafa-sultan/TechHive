import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { updateItemAsync } from '../../redux/slices/dataSlice';
import { useDispatch } from 'react-redux';

const Update = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState(route.params.text);

  const handleUpdate = () => {
    const update = { id: route.params.id, newReco: { text: todo } };
    dispatch(updateItemAsync(update));
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Enter updated todo"
          onChangeText={(text) => setTodo(text)}
          value={todo}
        />
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Update;
