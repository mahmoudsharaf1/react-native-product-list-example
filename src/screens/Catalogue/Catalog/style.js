import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../../../Utils/Colors';
const width = Dimensions.get('screen').width / 2 - 22;

const styles = StyleSheet.create({
    body: {
        marginHorizontal: 15
    },
    list: {
        flexDirection: 'row',
        marginTop: 19
    },
    categories: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textMenu: {
        textAlign: 'center',
        fontSize: 13,
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: 18,
        letterSpacing: -0.08
    },
    viewTitle: {
        zIndex: 1,
        top: 39.8,
        position: 'absolute',
        alignSelf: 'center',
    },
    title: {
        color: Colors.white,
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold',
    },
    menu: {
        paddingVertical: 2,
        borderRadius: 40,
        marginRight: 7,
        display: 'flex',
    },
    box: {
        marginHorizontal: 2,
        width: width,
        top: 10,
        alignItems: 'center',

    },
    images: {
        height: 163,
        width: 163,
        borderRadius: 8
    },
    like: {
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: 9,
        left: 9,
        flex: 1
    },
    likeView: {
        backgroundColor: Colors.white,
        borderRadius: 50,
        height: 36,
        width: 36,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 15,
        right: 15,
        elevation: 5,
        shadowColor: Colors.shadow,
    },
    like: {
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: 9,
        left: 9,
        flex: 1
    },
    description: {
        fontSize: 14,
        color: Colors.dark,
        lineHeight: 19,
        fontWeight: 'normal',
        fontStyle: 'normal',
        letterSpacing: -0.15
    },
    price: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: Colors.dark,
        lineHeight: 22,
        fontSize: 17,
        letterSpacing: -0.41,
    },
    itemView: {
        marginHorizontal: 8.5,
        marginTop: 20,
    },
    item: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 19,
        lineHeight: 23,
        letterSpacing: -0.49,
        color: Colors.dark,
        marginHorizontal: 8.5,
        marginTop: 20,
    },
});

export default styles;