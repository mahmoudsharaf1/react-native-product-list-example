import 'react-native-gesture-handler';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Catalogue from './Catalog';
import DetailsProduct from './DetailsProduct/index';


const Stack = createNativeStackNavigator();

export default ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Catalogue" component={Catalogue} options={{ headerShown: false }} />
            <Stack.Screen name="DetailsProduct" component={DetailsProduct} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};
