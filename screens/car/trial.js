import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, Text } from 'react-native';
import { Scene, Loading, Button } from '../common';
import cacheAssets from '../utils/cacheAssets';

import "../../three";
import '../utils/domElement';
import '../utils/resize';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    statusBarUnderlay: {
        height: 24,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    nav: {
        flexDirection: 'row',
        width: '40%'
    }
});

export default class Trial extends Component {

    state = { assetsLoaded: false, sceneLoaded: false, errors: null, status: null, progress: null, color: null };

    async componentDidMount() {
        this.loadAssetsAsync();
    }

    changeColor = (color) => {
        this.setState({ color });
    }

    loadAssetsAsync = () => {

        try {

            cacheAssets();

        } catch (e) {

            this.setState({ errors: e.message });

        } finally {
            this.setState({ assetsLoaded: true });
        }
    }

    renderLoading = () => (<Loading progress={this.state.progress} errors={this.state.errors} />);

    render() {
        const { assetsLoaded, sceneLoaded } = this.state;
        if (!assetsLoaded) {
            return this.renderLoading();
        }
        return (
            <View style={styles.container}>

                <Scene
                    progress={(progress) => this.setState({ progress })}
                    status={(status) => this.setState({ status })}
                    color={this.state.color}
                    reportError={(errors) => this.setState({ errors })}
                    onFinishedLoading={() => this.setState({ sceneLoaded: true })} />

                {!sceneLoaded && this.renderLoading()}

                <View style={styles.nav}>
                    <Text>{this.state.status}</Text>
                    <Button onClick={() => this.changeColor('red')}>Red</Button>
                    <Button onClick={() => this.changeColor('blue')}>Blue</Button>
                </View>
            </View>
        );
    }
}

