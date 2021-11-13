import { StyleSheet } from 'react-native';
import Colors from '../Utils/Colors';

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 87,
        position: 'absolute',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        borderTopWidth: 0,
        shadowColor: Colors.black,
        backgroundColor: Colors.white
    },
    tabBarBadgeStyle: {
        backgroundColor: '#ffc124',
        top: 20,
        height: 18,
        color: 'white',
        fontSize: 8
    }
});
export default styles;