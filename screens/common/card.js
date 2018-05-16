import React from 'react'
import { View, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'

const styles = StyleSheet.create({

    container: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10,
        minHeight: 50
    }

})

const Card = (props) => {

    return (

        <Animatable.View animation={(props.animate) ? props.animate : 'fadeInLeft'} style={styles.container}>
            {props.children}
        </Animatable.View>
    )

}

export { Card };
