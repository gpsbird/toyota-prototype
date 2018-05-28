import React, { Component } from 'react';
import { NavigationActions, DrawerActions } from 'react-navigation';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { side } from '@assets/images';

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

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        //paddingTop: 35,
        flex: 1,
    },
    separatorTop: {
        marginBottom: 30,
        height: 125,
    },
    sectionHeadingStyle: {
        textAlign: 'center',
        paddingVertical: 5,
        paddingHorizontal: 5
    },
    image: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 250,
        height: 250 * (9 / 16)
    },
    button: {
        backgroundColor: '#FF9F1C',
    }
});

class DrawerContent extends Component {

    navigateToScreen = (route) => () => {

        const navigate = NavigationActions.navigate({
            routeName: route
        });

        this.props.navigation.dispatch(navigate);
        this.props.navigation.dispatch(DrawerActions.closeDrawer());
    }

    render() {
        return (
            <View >
                <ScrollView>

                    <FastImage
                        style={styles.image}
                        source={side}
                        resizeMode={null} />


                    <Row styleName="small">
                        <Button onPress={this.navigateToScreen('Simple')}>
                            <Icon name="photo" />
                            <Text>Gallery</Text>
                        </Button>
                    </Row>

                    <Row styleName="small">
                        <Button onPress={this.navigateToScreen('Details')}>
                            <Icon name="my-location" />
                            <Text>3D View</Text>
                        </Button>
                    </Row>

                    <Row styleName="small">
                        <Button onPress={this.navigateToScreen('News')}>
                            <Icon name="news" />
                            <Text>News</Text>
                        </Button>
                    </Row>

                    <Row styleName="small">
                        <Button onPress={this.navigateToScreen('Book')}>
                            <Icon name="add-event" />
                            <Text>Book Service</Text>
                        </Button>
                    </Row>



                </ScrollView>
            </View>
        );
    }
}

DrawerContent.propTypes = {
    navigation: PropTypes.object
};

export default DrawerContent;