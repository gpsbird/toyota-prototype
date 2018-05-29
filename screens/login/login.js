import React, { Component } from 'react';
import { DrawerActions } from 'react-navigation';
import { StyleSheet } from 'react-native';
//import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
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

export default class Login extends Component {

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
                        source={{ uri: "https://firebasestorage.googleapis.com/v0/b/toyota-kenya.appspot.com/o/forms%2Frav4.jpg?alt=media&token=68c81d60-6255-4d60-8f30-d5cd57d969ff" }}>
                        <Tile animationName="hero">

                            <Title>Login</Title>
                            <Subtitle>To view custom content</Subtitle>

                        </Tile>
                    </ImageBackground>

                    <View styleName="vertical">
                        <TextInput placeholder={'Username'} />
                    </View>

                    <View styleName="vertical">
                        <TextInput secureTextEntry placeholder={'Password'} />
                    </View>


                    <View styleName="horizontal">

                        <Button styleName="confirmation secondary">
                            <Icon name="lock" />
                            <Text>Login</Text>
                        </Button>

                    </View>
                </ScrollView>
            </Screen>
        );
    }



}//
