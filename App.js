import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './app/routes/TabNavigation';

const App = () => {
    return (
        <>
            <StatusBar backgroundColor={'rgba(3, 38, 74, 1)'}/>
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
        </>
    );
}

export default App;