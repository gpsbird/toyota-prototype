import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        width: '100%'
    },
    container_two: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        width: '100%',
        minHeight: 100
    }
})

const CardItem = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const CardItemTwo = (props) => {
    return (
        <View style={styles.container_two}>
            {props.children}
        </View>
    )
}


export { CardItem, CardItemTwo };