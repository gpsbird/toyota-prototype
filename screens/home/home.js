import React, { Component } from 'react'
import { View, Text, StyleSheet, Slider } from 'react-native'
import { Card, CardItem, Button } from '../common'

const styles = StyleSheet.create({
    text: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
    }
})

export default class Home extends Component {

    render() {

        return (

            <Card animate="slideInLeft">

                <CardItem>
                    <Text style={styles.text} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel venenatis purus, et feugiat neque. Maecenas dolor diam, vulputate ac aliquam vel, tristique ac metus. Praesent eu purus diam. Nunc ut neque vel leo ultrices ullamcorper. Aliquam porta dui ac diam tempor commodo. Ut sit amet tellus accumsan, lacinia ex et, vulputate diam. Donec nec fringilla lacus, in varius enim. Praesent placerat, turpis id laoreet aliquam, arcu ligula efficitur nunc, at dapibus orci urna quis massa. Vestibulum non mi volutpat, tristique sem sed, tristique lorem. Pellentesque rutrum diam at massa scelerisque, non auctor lacus ultrices. Quisque erat nibh, finibus sed gravida in, facilisis id risus. Vestibulum pretium erat ex, nec bibendum ante varius at. Aliquam velit dui, ultricies at nisl id, sagittis tempus magna. Nullam vel tincidunt arcu. Suspendisse at orci scelerisque arcu ultrices eleifend. In nisi eros, tempor in maximus non, aliquet eu justo.
                    </Text>

                </CardItem>

            </Card>

        );

    }
}