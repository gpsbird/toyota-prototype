import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'

export class Button extends React.Component {

    state = {
        bgColor: '#fff'
    }

    animate = (e) => {
        this.setState({ bgColor: 'mediumspringgreen' });
        this.refs.text.pulse();
        //this.refs.text.transitionTo({ opacity: 0.2 });
        this.props.onClick(e);
    }


    render() {

        const styles = StyleSheet.create({
            button: {
                flex: 1,
                alignSelf: 'stretch',
                backgroundColor: this.state.bgColor,
                borderRadius: 3,
                borderWidth: 1,
                borderColor: '#007aff',
                marginLeft: 5,
                marginRight: 5
            },

            disabled_button: {
                flex: 1,
                alignSelf: 'stretch',
                backgroundColor: '#ccc',
                borderRadius: 3,
                borderWidth: 1,
                borderColor: '#ccc',
                marginLeft: 5,
                marginRight: 5
            },

            text: {
                alignSelf: 'center',
                color: '#007aff',
                fontSize: 14,
                fontWeight: '600',
                paddingTop: 10,
                paddingBottom: 10
            },

            disabled_text: {
                alignSelf: 'center',
                color: '#868686',
                fontSize: 14,
                fontWeight: '600',
                paddingTop: 10,
                paddingBottom: 10
            }

        })

        const { disabled, children } = this.props;

        return (
            <TouchableOpacity onPress={(e) => this.animate(e)} style={(disabled) ? styles.disabled_button : styles.button} disabled={disabled} >
                <Animatable.Text ref="text" style={(disabled) ? styles.disabled_text : styles.text}>{children}</Animatable.Text>
            </TouchableOpacity>
        )
    }

}
