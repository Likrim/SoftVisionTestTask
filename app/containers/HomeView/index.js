import React from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

const HomeView = () => {
  return (
    <>
      <Header />
      <View style={styles.mainBlock}>
        <Text style={styles.mainText}>Home View</Text>
      </View>
    </>
  );
}

export default HomeView;