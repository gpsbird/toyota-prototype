import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Slider, Alert } from 'react-native';
import FastImage from 'react-native-fast-image';
import CoverFlow from 'react-native-coverflow';
import { CARDS, SLIDES } from '@assets/images';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 384,
        height: 240
    }
});


export default class Landing extends Component {

    constructor(props) {

        super(props);

        this.state = {
            spacing: 200,
            wingSpan: 80,
            rotation: 50,
            midRotation: 50,
            scaleDown: 0.8,
            scaleFurther: 0.75,
            perspective: 800,
            cards: 11,
        };
    }


    onChange = (item) => {
        console.log(`'Current Item', ${item}`);
    }

    onPress = (item) => {
        this.props.navigation.navigate('Home')
    }

    renderImages = () => {
        return Object.keys(SLIDES).map((key, index) => {

            return <FastImage
                key={index}
                style={styles.image}
                source={{
                    uri: SLIDES[key],
                    priority: FastImage.priority.normal,
                }}
                resizeMode={null} />
        });
    }


    render() {

        const { spacing, wingSpan, rotation, perspective, scaleDown, scaleFurther, midRotation, cards } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <CoverFlow
                    style={styles.container}
                    onChange={this.onChange}
                    onPress={this.onPress}
                    spacing={spacing}
                    wingSpan={wingSpan}
                    rotation={rotation}
                    midRotation={midRotation}
                    scaleDown={scaleDown}
                    scaleFurther={scaleFurther}
                    perspective={perspective}
                    initialSelection={9}
                >
                    {this.renderImages()}
                </CoverFlow>
            </View>
        );
    }
}