import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import CategoryCard from '../../components/CategoryCard';
import { categorys } from '../../components/CategoryCard/config';
import { connect } from 'react-redux';
import SportVariantCard from '../../components/SportVariantCard';
import { sports } from '../../components/SportVariantCard/config';

const JoinGameView = ({ active }) => {
    return (
        <>
            <Header />
            <View style={styles.mainBlock}>
                <View style={styles.horizontalScroll}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} 
                        contentContainerStyle={styles.horizontalScrollContent}
                    >
                            {categorys.map((item) => (
                                <CategoryCard imageSource={active === item.id ? item.unactiveIcon : item.icon}
                                    description={item.description}
                                    key={item.id}
                                    index={item.id}
                                />
                            ))}
                    </ScrollView>
                </View>
                <ScrollView style={styles.verticalScroll}>
                    {sports.map((item) => (
                        <SportVariantCard imageSource={item.icon}
                            description={item.description}
                            mainText={item.mainText}
                            key={item.id}
                        />
                    ))}
                </ScrollView>
            </View>
        </>
    );
}

const mapStateToProps = state => {
    const { active } = state.ChangeActive;
    return { active };
}

export default connect(mapStateToProps)(JoinGameView);