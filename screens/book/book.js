import React, { Component } from 'react';
import { DrawerActions } from 'react-navigation';
import { StyleSheet } from 'react-native';
import {
    ScrollView,
    Icon,
    Row,
    Subtitle,
    Text,
    Title,
    View,
    ImageBackground,
    Divider,
    Card,
    Button,
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

export default class Book extends Component {

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
                        source={{ uri: "https://firebasestorage.googleapis.com/v0/b/toyota-kenya.appspot.com/o/forms%2Frepair-2.jpg?alt=media&token=bf06734f-ff0b-4460-a9af-61951d2f7028" }}>
                        <Tile animationName="hero">
                            <Title>Book for engine service</Title>
                            <Subtitle>@ your nearest toyota dealer</Subtitle>
                        </Tile>
                    </ImageBackground>

                    <TextInput
                        placeholder={'Full name'}
                    />

                    <TextInput
                        placeholder={'Phone'}
                    />
                    <TextInput
                        placeholder={'Email'}
                    />
                    <TextInput
                        placeholder={'Pick a date'}
                    />
                    <View styleName="horizontal">


                        <Button styleName="confirmation secondary">
                            <Text>Submit</Text>
                        </Button>


                    </View>
                </ScrollView>
            </Screen>
        );
    }



}//
