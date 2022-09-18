import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { setActive } from '../../redux/actions/ChangeActiveCategoryActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles';

const CategoryCard = ({ imageSource, description, setActive, index, active }) => {
    const curStyles = styles(active === index);

    return (
        <TouchableOpacity onPress={() => setActive(index)}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} 
                colors={active === index ? ['#23cff2', '#23cff2'] : ['#0d3b66', '#042345']} 
                style={curStyles.mainBlock}
            >
                <Image source={imageSource} style={curStyles.image} />
                <Text style={curStyles.descriptionText}>{description}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const mapStateToProps = state => {
    const { active } = state.ChangeActive;
    return { active };
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setActive
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCard);