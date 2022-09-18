import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 18,
        borderRadius: 5,
        marginHorizontal: 10,
        height: 100,
        alignItems: 'center',
        marginBottom: 10
    },
    image: {
        height: 40,
        width: 30,
        marginRight: 15
    },
    descriptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    descriptionImage: {
        height: 10,
        width: 10,
        marginRight: 8
    },
    description: {
        color: '#43678a',
        fontSize: 14
    },
    mainText: {
        color: '#23476a',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 27
    }
});

export default styles;