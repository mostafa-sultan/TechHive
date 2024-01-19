import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import styles from './styles'
const TestItems = [
    {
        id: 1,
        content: 'Apples', 
        date:  '5/9/2020',
    },
    {
        id: 2,
        content: 'Bananas',
        date: '5/9/2020',
       
    },
    {
        id: 3,
        content: 'Bread',
        date:  '5/9/2020',
       
    },
]

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ToDo List</Text>
            <FlatList
                data={TestItems}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.item}>
                            <View style={styles.itemContent}>
                                <Text style={styles.itemcontent}>{item.content}</Text>
                                <Text style={styles.itemdate}>{item.date}</Text>
                            </View>
                        </View>
                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Update</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                )}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
        </View>
    );

}

 

export default Home
