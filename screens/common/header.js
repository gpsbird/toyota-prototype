import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: Platform.OS === 'ios' ? 60 : 40,
        paddingTop: Platform.OS === 'ios' ? 20 : 5,
        paddingBottom: 5,
        backgroundColor: '#f8f8f8',
        shadowColor: '#000',
        shadowOffset: { height: 0, width: 2 },
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative'
    },
    title: {
        fontSize: 14
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    activelink: {
        color: 'blue'
    }
})

export class Header extends Component {

    render() {
        return (
            <View style={styles.header}>

                <View style={styles.nav}>

                    <Link
                        to="/"
                        underlayColor='#f0f4f7'
                        style={styles.navItem}>
                        <Text>Home</Text>
                    </Link>

                    <Link
                        to="/car"
                        underlayColor='#f0f4f7'
                        style={styles.navItem}>
                        <Text>Car</Text>
                    </Link>

                </View>

            </View>
        )
    }

}



