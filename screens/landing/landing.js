import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Slider, Alert } from 'react-native';

import CoverFlow from 'react-native-coverflow';
import { CARDS } from '@assets/images';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    item: {
        width: 64 * 2.5,
        height: 90 * 2.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
    },
});


export default class Landing extends Component {

    constructor(props) {

        super(props);

        const values = {
            spacing: 100,
            wingSpan: 80,
            rotation: 50,
            midRotation: 50,
            scaleDown: 0.8,
            scaleFurther: 0.75,
            perspective: 800,
            cards: 11,
        };

        this.V = ({ name, caption, min, max, step, value }) => (
            <View style={{ flex: 1 }}>
                <Text>{caption}:{value}</Text>
                <Slider
                    minimumValue={min}
                    maximumValue={max}
                    step={step}
                    value={value}
                    onValueChange={v => this.setState({ [name]: v })}
                />
            </View>
        );

        this.state = values;
    }

    onChange = (item) => {
        console.log(`'Current Item', ${item}`);
    }

    onPress = (item) => {
        //Alert.alert(`Pressed on current item ${item}`);

        this.props.navigation.navigate('Home')
    }

    getCards(count) {
        const res = [];
        const keys = Object.keys(CARDS);
        for (let i = 0; i < count && i < keys.length; i += 1) {
            const card = keys[i];

            res.push(
                <Image
                    key={card}
                    source={CARDS[card]}
                    resizeMode="contain"
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '90%',
                    }}
                />);
        }
        return res;
    }

    render() {
        const V = this.V;
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
                    initialSelection={5}
                >
                    {this.getCards(cards)}
                </CoverFlow>
            </View>
        );
    }
}