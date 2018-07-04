import React, { Component } from 'react';
import { DrawerActions } from 'react-navigation';
import { StyleSheet } from 'react-native';
import {
    ScrollView,
    Icon,
    View,
    Subtitle,
    Overlay,
    Text,
    Title,
    Button,
    ImageBackground,
    Tile,
    Image,
    Screen,

} from '@shoutem/ui';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { addUser } from './actions';
import Form from "./form";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d3d2d1',
    },
    button: {
        borderWidth: 1,
        borderColor: '#eeeeee',
        backgroundColor: '#c6322d',
    }
});

class Signup extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft: <Button onPress={() => navigation.dispatch(DrawerActions.openDrawer())} ><Icon name="sidebar" /></Button>,
    });

    render() {

        let { addUser, error } = this.props;
        let errors = error.toJS();

        return (
            <Screen style={styles.container} styleName="paper">
                <ScrollView keyboardShouldPersistTaps={'handled'}>

                    <ImageBackground
                        styleName="large-banner hero"
                        animationName="hero"
                        source={{ uri: "https://firebasestorage.googleapis.com/v0/b/toyota-kenya.appspot.com/o/forms%2Finterior.jpg?alt=media&token=5b286e2d-886d-486a-b309-ac9bc35499ae" }}>
                        <Tile animationName="hero">
                            <Overlay>
                                <Title>Signup</Title>
                                <Subtitle>To access custom content</Subtitle>
                            </Overlay>
                        </Tile>
                    </ImageBackground>

                    {(Object.keys(errors).length > 0) ? <View styleName="vertical"><Text>{error.message}</Text></View> : null}

                    <Form onSubmit={addUser} />

                </ScrollView>
            </Screen>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        error: state.users.get('error')
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
