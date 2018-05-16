import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: 500
    },
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

const Spinner = ({ size }) => {
    return (
        <View style={styles.container}>

            <ActivityIndicator style={styles.spinner} size={size} />

        </View>
    )
}


export { Spinner };