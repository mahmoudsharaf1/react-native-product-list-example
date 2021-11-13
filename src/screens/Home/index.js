import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

import Header from '../../Components/Header';

export default function HomeScreen() {


    return (
        <View>
            <Header />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        </View>
    );
}