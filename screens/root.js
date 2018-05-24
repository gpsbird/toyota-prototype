import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Image, StyleSheet, Platform } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Button } from './common';
import { logoimage } from '@assets/images';
import Landing from './landing/landing';
import Vehicle from './landing/vehicle';
import Introduction from './landing/introduction';
import Home from './home/home';
import Car from './car/car';

const styles = StyleSheet.create({
  header: {
    height: 50
  },
  logocontainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
  },
  logo: {
    width: 80,
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'flex-start'
  },
  nav: {
    flexDirection: 'row'
  }
})

class Logo extends React.Component {
  render() {
    return (
      <View style={styles.logocontainer}>
        <FastImage
          source={logoimage}
          style={styles.logo}
        />
      </View>
    );
  }
}

const Root = createStackNavigator(
  {
    Introduction, Landing, Details: Car, Vehicle
  },
  {
    initialRouteName: 'Introduction',
    navigationOptions: ({ navigation }) => ({
      headerRight: <Logo navigation={navigation} />,
      headerStyle: styles.header,
      /*headerRight: (
        <View style={styles.nav}>
          <Button onClick={() => navigation.navigate('Introduction')}>Intro</Button>
          <Button onClick={() => navigation.navigate('Landing')}>Gallery</Button>
          <Button onClick={() => navigation.navigate('Details')}>Details</Button>
        </View>
      )*/
    })
  }
);

export default Root
