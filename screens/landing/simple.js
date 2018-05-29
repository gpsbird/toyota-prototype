
import React, { Component } from 'react';
import {
    ImageBackground,
    ListView,
    Tile,
    Title,
    Overlay,
    Subtitle,
    TouchableOpacity,
    Screen,
    Divider,
    Row,
    View,
    Text,
    Icon
} from '@shoutem/ui';

import { vehicles } from '@assets/images';

export default class Simple extends Component {


    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.state = { active: null }
    }

    getData() {
        return vehicles;
    }

    showVehicle = (vehicle) => {
        this.setState({ active: vehicle }, () => {
            this.props.navigation.navigate('Vehicle', { vehicle });
        });
    }

    renderRow(vehicle) {

        return (
            <TouchableOpacity onPress={() => this.showVehicle(vehicle)}>
                <ImageBackground
                    styleName="large-banner"
                    source={{ uri: vehicle.image.url }}
                >
                    <Tile>

                        <Title styleName="md-gutter-bottom">{vehicle.name}</Title>

                    </Tile>
                </ImageBackground>
                <Divider styleName="line" />
                <Row>
                    <Icon name="settings" />
                    <View styleName="horizontal">
                        <Subtitle>Model: </Subtitle>
                        <Text numberOfLines={1}>{vehicle.model}</Text>
                    </View>
                    <View styleName="horizontal">
                        <Subtitle>Engine CC: </Subtitle>
                        <Text numberOfLines={1}>{vehicle.cc}</Text>
                    </View>
                </Row>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <Screen>

                <ListView
                    data={this.getData()}
                    renderRow={vehicle => this.renderRow(vehicle)}
                />
            </Screen>
        );
    }
}
