import React, { Component } from 'react';
import { Modal, TouchableHighlight, StyleSheet, Image, View, Text, Slider, NetInfo, Alert, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import CoverFlow from 'react-native-coverflow';

import { CARDS, SLIDES } from '@assets/images';

const { width, height } = Dimensions.get('window');

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
    },
    text: {
        textAlign: 'center',
        color: '#c6322d'
    },
    modal_main_container: {
        top: 0,
        width: '100%',
        left: 0,
        right: 0,
        bottom: 0,
        maxHeight: height,
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    modal: {
        top: '10%',
        width: '90%',
        left: '5%',
        right: 'auto',
        bottom: '10%',
        minHeight: 600,
        maxHeight: height,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    modal_sub_container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flex: 1,
    },
    modal_content_container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flex: 1,
    },
    modal_image: {
        width: 320,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
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
            launch: false,
            modalVisible: false,
            active: null
        };
    }

    componentDidMount = () => {
        //If there is internet
        NetInfo.isConnected.fetch().then(isConnected => {

            (isConnected) ? this.toggleLaunch(true) : this.toggleLaunch(false);
        });

        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
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

    renderRoot = () => {

        const { spacing, wingSpan, rotation, perspective, scaleDown, scaleFurther, midRotation } = this.state;

        return ((this.state.launch) ? <CoverFlow
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
            initialSelection={9}>
            {this.renderImages()}
        </CoverFlow> : <View style={styles.container}><Text style={styles.text}>Please enable your internet and launch the application again</Text></View>);
    }

    onPress = (item) => {

        let active = Object.keys(SLIDES)[item];
        let image = SLIDES[active];
        this.setState({ active, image }, () => {
            console.log(active);
            console.log(image);
            this.props.navigation.navigate('Vehicle', { vehicle: { image, key: active } });
        });

    }

    onChange = (item) => {
        //
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
        //console.log(SLIDES['1C']);
        return (
            <View style={{ flex: 1 }}>
                {this.renderRoot()}
            </View>
        );
    }
}