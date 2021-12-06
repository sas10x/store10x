import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   
    title: {
        fontSize: 18
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through'
    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    star: {
        margin: 2,
    }
});

export default styles;