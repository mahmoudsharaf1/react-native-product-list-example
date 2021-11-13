import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    Animated,
    Pressable,
    FlatList,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import { NativeBaseProvider, Box, Text, Tabs, VStack } from 'native-base';

import Header from '../../../Components/Header';
import styles from './style';
import Colors from '../../../Utils/Colors';
import { FavoriteIcon } from '../../../Components/FavoriteIcon';
import { getProductList, getCategoriesTabs } from '../../../Apis/api';
import { CategoriesTab } from '../../../Components/CategoriesTab'



export default function TabViewExample() {

    const [categoriesTab, setCategoriesTab] = useState([]);

    useEffect(() => {
        getCategoriesTabs((response) => {
            setCategoriesTab(response.data);
        });
    })


    return (
        <NativeBaseProvider>
            <View>
                <Header />
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>Clothing</Text>
                </View>
            </View>
            {categoriesTab === ''
                ? <ActivityIndicator />
                : <View style={styles.body}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.list}>
                        <View style={styles.categories}>
                            <View style={styles.menu}>
                                <Tabs
                                    onChange={() => setSelectedTab('All')}
                                    size='sm'
                                >
                                    <Tabs.Bar borderBottomWidth={0} >
                                        <Tabs.Tab
                                            // bgColor={selectedTab ? Colors.yellow : Colors.white}
                                            borderBottomWidth={0}
                                            borderRadius={40}
                                            display='flex'
                                        >
                                            <Text
                                                style={[
                                                    styles.textMenu,
                                                    {
                                                        // color: selectedTab ? Colors.white : Colors.dark,
                                                        marginHorizontal: 3
                                                    }
                                                ]}
                                            >All </Text>
                                        </Tabs.Tab>
                                    </Tabs.Bar>
                                </Tabs>
                            </View>
                            <CategoriesTab menu={categoriesTab} />
                        </View>
                    </ScrollView>
                </View>}
        </NativeBaseProvider>
    );
}

