import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import * as Animatable from 'react-native-animatable'

export class URL extends React.Component {

    render() {

        const styles = StyleSheet.create({
            url: {
                flex: 1,
                alignSelf: 'stretch',
                backgroundColor: '#fff',
                borderRadius: 3,
                borderWidth: 1,
                borderColor: '#007aff',
                marginLeft: 5,
                marginRight: 5
            },

            text: {
                alignSelf: 'center',
                color: '#007aff',
                fontSize: 16,
                fontWeight: '600',
                paddingTop: 10,
                paddingBottom: 10
            }

        })

        const { to, children } = this.props;

        return (
            <Link
                to={to}
                style={styles.url}>
                <Animatable.Text ref="text" style={styles.text}>{children}</Animatable.Text>
            </Link>
        )
    }

}
