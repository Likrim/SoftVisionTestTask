import { StyleSheet, Dimensions } from "react-native"; 

const styles = StyleSheet.create({
    mainBlock: {
        height: 50,
        width: Dimensions.get('window').width,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(3, 38, 74, 1)'
    },
    title: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 20,
        fontWeight: '500'
    },
    separator: {
        width: Dimensions.get('window').width,
        height: 1,
        backgroundColor: 'rgba(29, 57, 84, 1)'
    }
});

export default styles;