import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    tabBar: {
        height: 90,
        backgroundColor: 'rgba(4, 47, 89, 1)',
        borderTopWidth: 0,
        elevation: 0,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        position: 'absolute',
        paddingBottom: 15,
        paddingTop: 15
    },
    tabBarLabel: {
        fontSize: 12,
        fontWeight: '500'
    },
    FocusedIcon: {
        height: 28,
        width: 28,
        shadowColor: '#23cff2',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.60,
        shadowRadius: 20
    },
    UnfocusedIcon: {
        height: 25,
        width: 25
    }
});

export default styles;