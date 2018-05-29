import React, { Component } from 'react';
import { createStackNavigator, createDrawerNavigator, DrawerActions } from 'react-navigation';
import { StyleSheet, Platform } from 'react-native';
import FastImage from 'react-native-fast-image';
import { logoimage } from '@assets/images';
import Landing from './landing/landing';
import Simple from './landing/simple';
import Vehicle from './landing/vehicle';
import Introduction from './landing/introduction';
import Home from './home/home';
import News from './news/news';
import Book from './book/book';
import Login from './login/login';
import Signup from './register/register';
import Photos from './photos/photos';
import Car from './car/car';
import DrawerContent from './sidebar';
import {
  Icon,
  View,
  Button
} from '@shoutem/ui';

const styles = StyleSheet.create({
  header: {
    height: 50
  },
  container: {
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
  }
})

class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FastImage
          source={logoimage}
          style={styles.logo}
        />
      </View>
    );
  }
}


const Menu = createStackNavigator({
  Simple: { screen: Simple },
  Landing: { screen: Landing },
  Vehicle: { screen: Vehicle },
  Details: { screen: Car },
  News: { screen: News },
  Book: { screen: Book },
  Login: { screen: Login },
  Signup: { screen: Signup },
  Photos: { screen: Photos }
}, {
    gesturesEnabled: false,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Button onPress={() => navigation.dispatch(DrawerActions.openDrawer())} ><Icon name="sidebar" /></Button>,
      headerRight: <Logo />,
      headerStyle: styles.header,
    }),
  },
);



const Root = createDrawerNavigator({
  Introduction: { screen: Introduction },
  Menu: { screen: Menu }
}, {
    drawerWidth: 250,
    initialRouteName: 'Introduction',
    drawerPosition: 'left',
    contentComponent: DrawerContent

  });


export default Root
