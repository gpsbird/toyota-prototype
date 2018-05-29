import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
//import { Button } from 'react-native-elements'
import Orientation from 'react-native-orientation';
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
    Button,
    Tile,
    Screen,
} from '@shoutem/ui';


export default class Vehicle extends Component {

    static navigationOptions = ({ navigation }) => ({

        headerLeft: <Button onPress={() => { const vehicle = navigation.getParam('vehicle', {}); console.log(vehicle); navigation.goBack(); }} ><Icon name="back" /></Button>,
    });

    state = {
        image: 'large'
    }

    componentDidMount = () => {
        Orientation.addOrientationListener(this.orientationDidChange);
    }

    componentWillUnmount() {
        // Remember to remove listener
        Orientation.removeOrientationListener(this.orientationDidChange);
    }

    orientationDidChange = (orientation) => {
        if (orientation === 'LANDSCAPE') {
            this.setState({ image: 'large-portrait' });
        } else {
            this.setState({ image: 'large' });
        }
    }


    render() {

        const vehicle = this.props.navigation.getParam('vehicle', {});

        return (
            <Screen styleName="paper">

                <ScrollView>
                    <ImageBackground
                        styleName={`${this.state.image} hero`}
                        animationName="hero"
                        source={{ uri: vehicle.image.url }}>
                        <Tile animationName="hero">
                            <Title>{vehicle.name}</Title>
                            <Subtitle>{vehicle.model}</Subtitle>
                        </Tile>
                    </ImageBackground>

                    <Screen styleName="paper">

                        <Button styleName="secondary border" onPress={() => this.props.navigation.navigate('Details')}>
                            <Icon name="my-location" />
                            <Text>View 3D</Text>
                        </Button>



                        <Text styleName="md-gutter multiline">Description: Cras et luctus tortor, eu cursus tellus. Vivamus gravida non nisl dignissim ultricies. In ultrices ut lorem eget aliquet. </Text>

                        <Divider styleName="line" />

                        <Row>
                            <Icon name="trophy" />
                            <View styleName="horizontal">
                                <Subtitle>Capacity: </Subtitle>
                                <Text numberOfLines={1}>{vehicle.capacity}</Text>
                            </View>
                        </Row>

                        <Divider styleName="line" />

                        <Row>
                            <Icon name="equalizer" />
                            <View styleName="horizontal">
                                <Subtitle>Engine CC: </Subtitle>
                                <Text numberOfLines={1}>{vehicle.cc}</Text>
                            </View>
                        </Row>

                        <Divider styleName="line" />

                        <Row>
                            <Icon name="history" />
                            <View styleName="horizontal">
                                <Subtitle>Year: </Subtitle>
                                <Text numberOfLines={1}>{vehicle.year}</Text>
                            </View>
                        </Row>

                        <Divider styleName="line" />
                    </Screen>
                </ScrollView>
            </Screen>
        );
    }
}
