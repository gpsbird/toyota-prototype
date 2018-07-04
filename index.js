import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Root from './screens/root';
//import Orientation from 'react-native-orientation';
import SplashScreen from 'react-native-smart-splash-screen'
import { Provider } from 'react-redux';
import store from './store'

// symbol polyfills
global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');

// collection fn polyfills
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');

export default class toyota extends Component {

    componentDidMount() {
        // this locks the view to Landscape Mode
        //Orientation.lockToLandscape();

        //Close the splash screen
        SplashScreen.close({
            animationType: SplashScreen.animationType.scale,
            duration: 850,
            delay: 500,
        });

    }



    render() {

        console.disableYellowBox = true;

        return <Provider store={store}><Root /></Provider>
    }



}//End of component

AppRegistry.registerComponent('toyota', () => toyota); 
