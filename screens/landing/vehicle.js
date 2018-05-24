import PropTypes from 'prop-types';
import React, { Component } from 'react';
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
        headerLeft: <Button onPress={() => navigation.goBack(null)} ><Icon name="back" /></Button>,
    });


    render() {

        const vehicle = this.props.navigation.getParam('vehicle', {});

        return (
            <Screen styleName="paper full-screen">

                <ScrollView>
                    <ImageBackground
                        styleName="large hero"
                        animationName="hero"
                        source={{ uri: vehicle.image }}>
                        <Tile animationName="hero">
                            <Title>Vehicle name</Title>
                            <Subtitle>Model</Subtitle>
                        </Tile>
                    </ImageBackground>

                    <Screen styleName="paper">

                        <Button styleName="dark border full-width" onPress={() => this.props.navigation.navigate('Details')}>
                            <Icon name="my-location" />
                            <Text>View 3D</Text>
                        </Button>



                        <Text styleName="md-gutter multiline">Description: Cras et luctus tortor, eu cursus tellus. Vivamus gravida non nisl dignissim ultricies. In ultrices ut lorem eget aliquet. </Text>

                        <Divider styleName="line" />

                        <Row>
                            <Icon name="trophy" />
                            <View styleName="vertical">
                                <Subtitle>Capacity</Subtitle>
                                <Text numberOfLines={1}>XYX</Text>
                            </View>
                        </Row>

                        <Divider styleName="line" />

                        <Row>
                            <Icon name="equalizer" />
                            <View styleName="vertical">
                                <Subtitle>Engine</Subtitle>
                                <Text numberOfLines={1}>ABC</Text>
                            </View>
                        </Row>

                        <Divider styleName="line" />

                        <Row>
                            <Icon name="history" />
                            <View styleName="vertical">
                                <Subtitle>Year</Subtitle>
                                <Text numberOfLines={1}>IJK</Text>
                            </View>
                        </Row>

                        <Divider styleName="line" />
                    </Screen>
                </ScrollView>
            </Screen>
        );
    }
}
