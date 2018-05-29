import React, { Component } from 'react';
import { DrawerActions } from 'react-navigation';
import { StyleSheet } from 'react-native';
import {
    ScrollView,
    Icon,
    Row,
    Subtitle,
    Overlay,
    Text,
    Title,
    View,
    Button,
    ImageBackground,
    Divider,
    Card,
    ListView,
    Caption,
    TouchableOpacity,
    Tile,
    Image,
    Screen,
    GridView,
    TextInput,
    GridRow
} from '@shoutem/ui';


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

export default class Signup extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft: <Button onPress={() => navigation.dispatch(DrawerActions.openDrawer())} ><Icon name="sidebar" /></Button>,
    });

    render() {

        return (
            <Screen style={styles.container} styleName="paper">
                <ScrollView>

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

                    <View styleName="vertical">
                        <TextInput placeholder={'Full name'} />
                    </View>

                    <View styleName="vertical">
                        <TextInput placeholder={'Username'} />
                    </View>

                    <View styleName="vertical">
                        <TextInput placeholder={'Phone'} />
                    </View>

                    <View styleName="vertical">
                        <TextInput placeholder={'Email'} />
                    </View>

                    <View styleName="vertical">
                        <TextInput secureTextEntry placeholder={'Password'} />
                    </View>

                    <View styleName="horizontal">

                        <Button styleName="confirmation secondary">
                            <Icon name="add-friend" />
                            <Text>Register</Text>
                        </Button>

                    </View>
                </ScrollView>
            </Screen>
        );
    }



}//
