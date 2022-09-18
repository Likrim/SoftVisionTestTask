import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

const MyGamesView = () => {
  return (
    <>
      <Header />
      <View style={styles.mainBlock}>
        <Text style={styles.mainText}>My Games View</Text>
      </View>
    </>
  );
}

export default MyGamesView;