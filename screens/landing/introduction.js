import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Button, Icon } from 'react-native-elements';
import Onboarding from 'react-native-onboarding-swiper';
import { customize_icon, location_icon, service_icon, test_drive_icon } from '@assets/images';

const backgroundColor = isLight => (isLight ? '#c5322d' : 'lightblue');
const color = isLight => backgroundColor(!isLight);

export default class Introduction extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: null,
        headerLeft: null,
        drawerIcon: null
    });

    Square = ({ isLight, selected }) => {
        let backgroundColor;
        if (isLight) {
            backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
        } else {
            backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
        }
        return (
            <View
                style={{
                    width: 6,
                    height: 6,
                    marginHorizontal: 3,
                    backgroundColor,
                }}
            />
        );
    };

    Done = ({ isLight, ...props }) => (
        <Button
            title={'Done'}
            buttonStyle={{
                backgroundColor: backgroundColor(isLight),
            }}
            containerViewStyle={{
                marginVertical: 10,
                width: 70,
                backgroundColor: backgroundColor(isLight),
            }}
            textStyle={{ color: color(isLight) }}
            {...props}
        />
    );

    Skip = ({ isLight, skipLabel, ...props }) => (
        <Button
            title={'Skip'}
            buttonStyle={{
                backgroundColor: backgroundColor(isLight),
            }}
            containerViewStyle={{
                marginVertical: 10,
                width: 70,
            }}
            textStyle={{ color: color(isLight) }}
            {...props}
        >
            {skipLabel}
        </Button>
    );

    Next = ({ isLight, ...props }) => (
        <Button
            title={'Next'}
            buttonStyle={{
                backgroundColor: backgroundColor(isLight),
            }}
            containerViewStyle={{
                marginVertical: 10,
                width: 70,
                backgroundColor: backgroundColor(isLight),
            }}
            textStyle={{ color: color(isLight) }}
            {...props}
        />
    );

    render() {

        return (
            <Onboarding
                DotComponent={this.Square}
                onSkip={() => this.props.navigation.navigate('Simple')}
                onDone={() => this.props.navigation.navigate('Simple')}
                NextButtonComponent={this.Next}
                SkipButtonComponent={this.Skip}
                DoneButtonComponent={this.Done}
                pages={[
                    {
                        backgroundColor: '#f8a841',
                        image: <FastImage source={customize_icon} />,
                        title: 'Customize',
                        subtitle: 'You can customize your favourite vehicle',
                    },
                    {
                        backgroundColor: '#fe6e58',
                        image: <FastImage source={location_icon} />,
                        title: 'Toyota Dealers',
                        subtitle: 'Locate our dealers across country',
                    },
                    {
                        backgroundColor: '#f8a841',
                        image: <FastImage source={test_drive_icon} />,
                        title: 'Test Drive',
                        subtitle: "Book for a test drive",
                    },
                    {
                        backgroundColor: '#fe6e58',
                        image: <FastImage source={service_icon} />,
                        title: 'Service',
                        subtitle: "You can now book for service",
                    },
                ]}
            />
        );
    }

}
