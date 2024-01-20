import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import api from '../../../api/api';
import { fetchItems, removeItemAsync } from '../../redux/slices/dataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.data.items);

  useEffect(() => {
    dispatch(fetchItems()); 
    api.post('/signin', { email: 'm', password: 'm' });
  }, [dispatch]);

  const addFunction = () => {
    navigation.navigate('Add');
  };

  const updateFunction = (id, text) => {
    navigation.navigate('Update', { id, text });
  };

  const handleDelete = (id) => {
    dispatch(removeItemAsync(id));
  };

  const handleLogout = () => {
    dispatch(logout());
    navigation.replace('Signin');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ToDo List</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.title}>Log Out</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.item}>
                <Text style={styles.itemContent}>{item.text}</Text>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.button} onPress={() => updateFunction(item.id, item.text)}>
                <Text style={styles.buttonText}>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => handleDelete(item.id)}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}  
      />

      <TouchableOpacity style={styles.addButton} onPress={addFunction}>
        <Text style={styles.buttonText}>Add ToDo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
