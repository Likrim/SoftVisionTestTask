import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

const MoreView = () => {
  return (
    <>
      <Header />
      <View style={styles.mainBlock}>
        <Text style={styles.mainText}>More View</Text>
      </View>
    </>
  );
}

export default MoreView;