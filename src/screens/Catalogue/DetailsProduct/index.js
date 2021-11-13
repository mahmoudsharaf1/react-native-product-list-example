import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../../../Components/Header';

import arrow from '../../../../assets/left-arrow.png'
import Colors from '../../../Utils/Colors';



export default ({ route, navigation }) => {
    return (
        <View>
            <View>
                <Header />
                <TouchableOpacity
                    style={styles.arrowBack}
                    onPress={() => navigation.goBack()}
                >
                    <Image source={arrow} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <Text style={styles.description}>{route.params.item.title}</Text>
                <Text style={styles.price}>${route.params.item.price}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    arrowBack: {
        marginHorizontal: 17,
        position: 'absolute', marginTop: '10.83%'
    },
    body: {
        marginHorizontal: 17,
        marginTop: 18
    },
    description: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 19,
        lineHeight: 23,
        letterSpacing: -0.49,
        color: Colors.darkPurple
    },
    price: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 31,
        letterSpacing: 0.35,
        color: Colors.darkPurple,
        marginTop: 35
    }
})

// /* $89.99 */

// position: absolute;
// width: 343px;
// height: 31px;
// left: 16px;
// top: 193px;

// /* Title 1 */
// font-family: SF Pro Display;
// font-style: normal;
// font-weight: bold;
// font-size: 25px;
// line-height: 31px;
// /* identical to box height, or 124% */
// letter-spacing: 0.35px;
// font-feature-settings: 'pnum' on, 'lnum' on;

// /* dark */
// color: #34283E;




