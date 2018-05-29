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
                            "uri": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg"
                        },
                        "title": "Gaspar Brasserie",
                        "description": "Expect an intimate venue with the ambience of a private "
                            + "club. The mood is casual, the guests sublime."
                    },
                    {
                        "source": {
                            "uri": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg"
                        },
                        "title": "Chalk Point Kitchen",
                        "description": "Stylish restaurant serving market-to-table American fare "
                            + "in modern farmhouse digs with cellar bar."
                    },
                    {
                        "source": {
                            "uri": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg"
                        },
                        "title": "Kyoto Amber Upper East",
                        "description": "Amber Upper East is located on the corner of 80th and 3rd "
                            + "Avenue. We serve Japanese and Asian cuisines."
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
