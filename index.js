import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Root from './screens/root';

export default class toyota extends Component {
    render() {

        console.disableYellowBox = true;

        return <Root />
    }
}

AppRegistry.registerComponent('toyota', () => toyota); 
