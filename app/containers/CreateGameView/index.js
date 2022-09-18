import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

const CreateGameView = () => {
  return (
    <>
      <Header />
      <View style={styles.mainBlock}>
        <Text style={styles.mainText}>Create Game View</Text>
      </View>
    </>
  );
}

export default CreateGameView;