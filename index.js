import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Root from './screens/root';
import Orientation from 'react-native-orientation';
import SplashScreen from 'react-native-smart-splash-screen'

export default class toyota extends Component {

    componentDidMount() {
        // this locks the view to Landscape Mode
        Orientation.lockToLandscape();

        //Close the splash screen
        SplashScreen.close({
            animationType: SplashScreen.animationType.scale,
            duration: 850,
            delay: 500,
        });

    }



    render() {

        console.disableYellowBox = true;

        return <Root />
    }



}//End of component

AppRegistry.registerComponent('toyota', () => toyota); 
