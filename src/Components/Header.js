
import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../Utils/Colors';

export default ({ }) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1.7, y: 0 }}
            colors={[Colors.darkPurple, Colors.purple]}
            style={styles.linearGradient}
        />
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        height: 88,
        left: 0,
        top: 0
    },
});