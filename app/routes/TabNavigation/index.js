import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import screens
import CreateGameView from '../../containers/CreateGameView';
import HomeView from '../../containers/HomeView';
import JoinGameView from '../../containers/JoinGameView';
import MoreView from '../../containers/MoreView';
import MyGamesView from '../../containers/MyGamesView';

//import styles
import styles from './styles';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBar,
            tabBarActiveTintColor: 'rgba(255, 255, 255, 1)',
            tabBarInactiveTintColor: 'rgba(104, 130, 155, 1)',
            tabBarLabelStyle: styles.tabBarLabel
        }}>
            <Tab.Screen component={HomeView} name='Home' options={{
                tabBarIcon: ({focused}) => (
                    focused ? 
                    <Image source={require('../../assets/home_active.png')} style={styles.FocusedIcon}/> :
                    <Image source={require('../../assets/home.png')} style={styles.UnfocusedIcon}/>
                )
            }}/>
            <Tab.Screen component={JoinGameView} name='JoinGame' options={{
                title: 'Join Game',
                tabBarIcon: ({focused}) => (
                    focused ? 
                    <Image source={require('../../assets/join_game_active.png')} style={styles.FocusedIcon}/> :
                    <Image source={require('../../assets/join_game.png')} style={styles.UnfocusedIcon}/>
                )
            }}/>
            <Tab.Screen component={CreateGameView} name='CreateGame' options={{
                title: 'Create Game',
                tabBarIcon: ({focused}) => (
                    focused ? 
                    <Image source={require('../../assets/create_game_active.png')} style={styles.FocusedIcon}/> :
                    <Image source={require('../../assets/create_game.png')} style={styles.UnfocusedIcon}/>
                )
            }}/>
            <Tab.Screen component={MyGamesView} name='MyGames' options={{
                title: 'My Games',
                tabBarIcon: ({focused}) => (
                    focused ? 
                    <Image source={require('../../assets/star_active.png')} style={styles.FocusedIcon}/> :
                    <Image source={require('../../assets/star.png')} style={styles.UnfocusedIcon}/>
                )
            }}/>
            <Tab.Screen component={MoreView} name='More' options={{
                tabBarIcon: ({focused}) => (
                    focused ?
                    <Image source={require('../../assets/more_active.png')} style={styles.FocusedIcon}/> :
                    <Image source={require('../../assets/more.png')} style={styles.UnfocusedIcon}/>
                )
            }}/>
        </Tab.Navigator>
    );
}

export default TabNavigator;