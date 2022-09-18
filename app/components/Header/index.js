import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Header = ({title}) => {
  return (
    <>
      <View style={styles.mainBlock}>
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
      <View style={styles.separator}/>
    </>
  );
}

export default Header;