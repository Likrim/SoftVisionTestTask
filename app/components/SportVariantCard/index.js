import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const SportVariantCard = ({ imageSource, mainText, description }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={imageSource} />
            <View>
                <View style={styles.descriptionContainer}>
                    <Image source={require('../../assets/clock.png')} style={styles.descriptionImage}/>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <Text style={styles.mainText}>{mainText}</Text>
            </View>
        </View>
    );
};

export default SportVariantCard;