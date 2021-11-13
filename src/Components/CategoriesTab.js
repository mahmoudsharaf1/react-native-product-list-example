
import React, { useState, useEffect } from 'react';
import { Text, Tabs, VStack } from 'native-base';

export const renderTab = (menu) => {
    const [selectedTab, setSelectedTab] = useState('All')


    const isActive = selectedTab === menu;
    return (
        <VStack
            key={`menu-${menu}`}
            style={styles.menu}
        >
            <Tabs
                onChange={() => setSelectedTab(menu)}
                size='sm'
                index={0}
            >
                <Tabs.Bar borderBottomWidth={0} >
                    <Tabs.Tab
                        bgColor={isActive ? Colors.yellow : Colors.white}
                        borderBottomWidth={0}
                        paddingVertical={2}
                        borderRadius={40}
                        paddingHorizontal={5}
                    >
                        <Text
                            style={[
                                styles.textMenu,
                                { color: isActive ? Colors.white : Colors.dark }
                            ]}
                        > {menu} </Text>
                    </Tabs.Tab>
                </Tabs.Bar>
            </Tabs>
        </VStack >
    );
}