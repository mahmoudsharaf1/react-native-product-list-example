import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import FavoriteScreen from '../screens/Favorite';
import CatalogueScreen from '../screens/Catalogue';

import styles from './styles';
import Colors from '../Utils/Colors';


const Tab = createBottomTabNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Catalogue'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                        } else if (route.name === 'Catalogue') {
                            iconName = focused
                                ? 'ios-grid'
                                : 'ios-grid-outline';
                        } else if (route.name === 'Favorite') {
                            iconName = focused
                                ? 'ios-heart'
                                : 'ios-heart-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused
                                ? 'ios-person'
                                : 'ios-person-outline';
                        }

                        // You can return any component that you like here!
                        return (
                            <View style={{ width: size }}>
                                <MaskedView
                                    style={{ flexDirection: 'row', height: size }}
                                    maskElement={
                                        <View
                                            style={styles.maskedView}>
                                            <Ionicons name={iconName} size={size} color={color} />
                                        </View>
                                    }>
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        colors={[Colors.darkPurple, Colors.purple]}
                                        style={{ flex: 1 }}
                                    />
                                </MaskedView>
                            </View>
                        );
                    },
                    tabBarActiveTintColor: Colors.darkPurple,
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                    tabBarItemStyle: [{
                        bottom: 10
                    }],
                    tabBarLabelStyle: [{
                        bottom: 20
                    }],
                    tabBarStyle: [

                        styles.tabBarStyle,

                        null
                    ]
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Catalogue" component={CatalogueScreen} />
                <Tab.Screen name="Favorite" component={FavoriteScreen}
                    options={{
                        tabBarBadge: 0,
                        tabBarBadgeStyle: [styles.tabBarBadgeStyle]

                    }} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
