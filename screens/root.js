import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Button, Image, StyleSheet, Platform } from 'react-native';
import { logoimage } from '@assets/images';
import Landing from './landing/landing';
import Home from './home/home';
import Monkey from './car/monkey';

const styles = StyleSheet.create({
  header: {
    // marginLeft: 15
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
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

class Logo extends React.Component {
  render() {
    return (
      <View style={styles.logocontainer}>
        <Image
          source={logoimage}
          style={styles.logo}
        />
      </View>
    );
  }
}

const Root = createStackNavigator(
  {
    Landing, Home: Monkey
  },
  {
    initialRouteName: 'Home',
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Logo navigation={navigation} />,
      headerStyle: styles.header,
      headerRight: (
        <View style={styles.nav}>
          <Button
            color="#c6322d"
            title="Gallery"
            onPress={() => navigation.navigate('Landing')}
          />
          <Button
            color='#c6322d'
            title="Details"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      )
    })
  }
);

export default Root
