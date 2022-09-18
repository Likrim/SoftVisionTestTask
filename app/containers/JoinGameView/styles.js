import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainBlock: {
        flex: 1,
        backgroundColor: 'rgba(3, 30, 60, 1)',
        marginBottom: 80,
        paddingBottom: 10
    },
    mainText: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 36,
        fontWeight: 'bold'
    },
    horizontalScroll: {
        marginLeft: 10,
        marginTop: 7,
        flexDirection: 'row',
        alignItems: 'center',
        height: 75
    },
    horizontalScrollContent: {
        alignItems: 'center'
    },
    verticalScroll: {
        marginTop: 35
    }
});

export default styles;