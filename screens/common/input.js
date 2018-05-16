import React, { Component } from 'react'
import _ from 'lodash';
import { TextInput, View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        flex: 1,
    },
    label: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5
    },
    error: {
        color: 'red',
        fontSize: 9,
        marginLeft: 5,
        marginRight: 5
    },
    input: {
        alignSelf: 'stretch',
        height: 50,
        borderColor: 'transparent',
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        fontSize: 18
    }
})

export class Input extends Component {

    render() {

        const { onChange, value, placeholder, secure, error, onBlur } = this.props;

        const label = _.startCase(_.toLower(this.props.label));

        return (
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    secureTextEntry={secure}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                />
                {(error) ? <Text style={styles.error}>{error}</Text> : null}
            </View>
        )
    }
}