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
    itemContent: {
        flex: 1,  
        fontSize: 16,
        fontWeight: 'bold',
    }, 
    buttons: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#978b67',
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
        backgroundColor: '#363329',
        borderRadius: 20,
        padding: 10,
        margin: 15,
        alignItems:'center'
    },
    header:{
        flexDirection:'row', 
        justifyContent:'space-between'
    }

})
  export default styles;
  