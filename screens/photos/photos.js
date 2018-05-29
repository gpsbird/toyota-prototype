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
    ImageGallery,
    ImageGalleryOverlay,
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

export default class Photos extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft: <Button onPress={() => navigation.dispatch(DrawerActions.openDrawer())} ><Icon name="sidebar" /></Button>,
    });


    constructor(props) {
        super(props);

        this.state = {
            photos:
                [
                    {
                        "source": {
                            "uri": "https://firebasestorage.googleapis.com/v0/b/toyota-kenya.appspot.com/o/gallery%2Fgallery-1.jpg?alt=media&token=ab42ea70-5d01-4396-a0f2-3be819a3ea68"
                        },
                        "title": "Toyota Land Cruiser Prado",
                        "description": "Awesome vehicle. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    },
                    {
                        "source": {
                            "uri": "https://firebasestorage.googleapis.com/v0/b/toyota-kenya.appspot.com/o/gallery%2Fgallery-2.jpg?alt=media&token=139b2271-0cff-49cd-b63b-b9edad916848"
                        },
                        "title": "Toyota Land Cruiser Interior",
                        "description": "Awesome Interior. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    },
                    {
                        "source": {
                            "uri": "https://firebasestorage.googleapis.com/v0/b/toyota-kenya.appspot.com/o/gallery%2Fgallery-3.jpg?alt=media&token=9d793809-7a33-4a34-8f36-ab8a4603a1f1"
                        },
                        "title": "Toyota Land Cruiser Prado",
                        "description": "Awesome vehicle. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    },
                    {
                        "source": {
                            "uri": "https://firebasestorage.googleapis.com/v0/b/toyota-kenya.appspot.com/o/gallery%2Fgallery-4.jpg?alt=media&token=83aa571a-8eef-4a82-86ba-42a98d132d07"
                        },
                        "title": "Toyota Rav4",
                        "description": "Awesome vehicle. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    },
                    {
                        "source": {
                            "uri": "https://firebasestorage.googleapis.com/v0/b/toyota-kenya.appspot.com/o/gallery%2Fgallery-5.jpg?alt=media&token=a27423d4-f660-49f6-a702-03931ab6d537"
                        },
                        "title": "Toyota FJ Concept",
                        "description": "Awesome vehicle. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    },
                    {
                        "source": {
                            "uri": "https://firebasestorage.googleapis.com/v0/b/toyota-kenya.appspot.com/o/gallery%2Fgallery-6.jpg?alt=media&token=2749f891-222e-4fee-9c1d-a3ed108c8e06"
                        },
                        "title": "Toyota FJ Custom",
                        "description": "Awesome vehicle. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                ]
        }
    }

    renderImageOverlay(photos) {

        return (
            <ImageGalleryOverlay
                styleName="full-screen"
                title={photos.title}
                description={photos.description}
            />
        );
    }

    render() {
        return (
            <Screen>

                <ImageGallery
                    data={this.state.photos}
                    selectedIndex={1}
                    renderImageOverlay={this.renderImageOverlay}
                />
            </Screen>
        );
    }



}//
