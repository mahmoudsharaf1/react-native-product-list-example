import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import Colors from '../Utils/Colors';

const size = 40

export function FavoriteIcon({ favorite, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ width: size }}
        >
            <MaskedView

                style={{ height: size }}
                maskElement={
                    <MaterialCommunityIcons
                        style={styles.like}
                        size={21}
                        name={favorite ? 'cards-heart' : 'heart-outline'}
                    />
                }>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={[Colors.darkPurple, Colors.purple]}
                    style={{ flex: 1 }}
                />
            </MaskedView>
        </TouchableOpacity>
    )
};



const styles = StyleSheet.create({

    like: {
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: 9,
        left: 9,
        flex: 1
    }
});
