import React, { Component } from 'react';
import { StyleSheet, NetInfo, View } from 'react-native';
import { Scene, Loading } from '../common';
import cacheAssets from '../utils/cacheAssets';

import "../../three";
import '../utils/domElement';
import '../utils/resize';

import {
    Icon,
    View as SmoothView,
    Text,
    Button
} from '@shoutem/ui';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
    },
    statusBarUnderlay: {
        height: 24,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    nav: {
        flexDirection: 'row',
        width: '40%'
    },
    containerTwo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        textAlign: 'center',
        color: '#c6322d'
    }
});

export default class Car extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft: <Button onPress={() => navigation.goBack()} ><Icon name="back" /></Button>,
    });

    state = { assetsLoaded: false, sceneLoaded: false, errors: null, status: null, progress: null, color: null, launch: false };

    async componentDidMount() {

        //If there is internet
        NetInfo.isConnected.fetch().then(isConnected => {

            (isConnected) ? this.toggleLaunch(true) : this.toggleLaunch(false);
        });

        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);

        this.loadAssetsAsync();

    }

    toggleLaunch = (status) => {

        let change = (this.state.launch === status) ? false : true;
        if (change) {
            this.setState({ launch: status });
        }
    }

    handleConnectivityChange = (isConnected) => {
        if (isConnected) {
            NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
        }
    }

    renderScene = () => {
        return (
            <View style={styles.container}>
                <Scene
                    progress={(progress) => this.setState({ progress })}
                    status={(status) => this.setState({ status })}
                    color={this.state.color}
                    reportError={(errors) => this.setState({ errors })}
                    onFinishedLoading={() => this.setState({ sceneLoaded: true })} />

                {!this.state.sceneLoaded && this.renderLoading()}

                <SmoothView styleName="horizontal">
                    <Text>{this.state.status}{this.state.errors}</Text>
                    <Button styleName="dark" onPress={() => this.changeColor('red')}><Text>Red</Text></Button>
                    <Button styleName="dark" onPress={() => this.changeColor('blue')}><Text>Blue</Text></Button>
                </SmoothView>
            </View>
        );
    }

    renderNoConnection = () => {
        return (
            <View style={styles.containerTwo}>
                <Text style={styles.text}>Please enable your internet and launch the application again</Text>
            </View>
        );
    }

    renderRoot = () => {

        return ((this.state.launch) ? this.renderScene() : this.renderNoConnection());
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
        const { assetsLoaded } = this.state;
        if (!assetsLoaded) {
            return this.renderLoading();
        }
        return (
            <View style={styles.container}>

                {this.renderRoot()}

            </View>
        );
    }
}

