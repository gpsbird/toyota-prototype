import React, { Component } from 'react'
import { View, Text, StyleSheet, Slider, AsyncStorage } from 'react-native'
import { Card, CardItem, Button } from '../common'
import cacheAssets from '../utils/cacheAssets';

const styles = StyleSheet.create({
    text: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
    }
})

export default class Home extends Component {

    state = {
        assetsLoaded: false
    }

    async componentDidMount() {
        this.loadAssetsAsync();
    }

    loadAssetsAsync = () => {

        try {

            cacheAssets();

        } catch (e) {

            this.setState({ errors: e.message });

        } finally {
            this.setState({ assetsLoaded: true });
            this.renderJson();
        }
    }

    renderJson = async () => {
        try {
            const body = JSON.parse(await AsyncStorage.getItem('front_left_wheel'));
            console.log(body);
        } catch (error) {
            console.error(error);
        }
    }

    render() {

        return (

            <Card animate="slideInLeft">

                <CardItem>

                    {(this.state.assetsLoaded) ? <Text style={styles.text} >This is a test</Text> : null}

                </CardItem>

            </Card>

        );

    }
}