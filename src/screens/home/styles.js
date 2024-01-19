import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20,
        color: '#080606',
        marginHorizontal: 20,
    },
    card: {
        marginHorizontal: 20,
        backgroundColor: '#cfcccc',
        borderRadius: 18,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 1,
        elevation: 2,
        marginBottom: 20,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    itemImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 20,
    },
    itemContent: {
        flex: 1,
    },
    itemcontent: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemdate: {
        fontSize: 16,
        color: '#352a2a',
    },
    buttons: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#FFC107',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: "#cc7b7b",
        margin: 22,    
        alignItems: 'center',
        justifyContent: 'center',  
        flex: 0.5,
        borderRadius:85
    }
})
  export default styles;
  