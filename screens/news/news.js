import React, { Component } from 'react';
import { DrawerActions } from 'react-navigation';
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
    GridRow
} from '@shoutem/ui';

export default class News extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft: <Button onPress={() => navigation.dispatch(DrawerActions.openDrawer())} ><Icon name="sidebar" /></Button>,
    });


    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.state = {
            restaurants: [
                {
                    "name": "Latest Chrome Rims",
                    "address": "185 Sutter St, San Francisco, CA 94109",
                    "image": { "url": "https://firebasestorage.googleapis.com/v0/b/toyota-kenya.appspot.com/o/news%2Fchrome.jpg?alt=media&token=8eda756a-e05a-43f4-8075-9b2f0fce4ff7" },
                },
                {
                    "name": "Rav 4 2018",
                    "address": "527 Broome St, New York, NY 10013",
                    "image": { "url": "https://firebasestorage.googleapis.com/v0/b/toyota-kenya.appspot.com/o/news%2Frav4-2.jpg?alt=media&token=296f304f-f18d-497b-be97-6788497474ee" },
                },
                {
                    "name": "Where is Caldina",
                    "address": "225 Mulberry St, New York, NY 10012",
                    "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" },
                },
                {
                    "name": "Latest Chrome Rims",
                    "address": "185 Sutter St, San Francisco, CA 94109",
                    "image": { "url": "https://firebasestorage.googleapis.com/v0/b/toyota-kenya.appspot.com/o/news%2Fchrome.jpg?alt=media&token=8eda756a-e05a-43f4-8075-9b2f0fce4ff7" },
                },
                {
                    "name": "Rav 4 2018",
                    "address": "527 Broome St, New York, NY 10013",
                    "image": { "url": "https://firebasestorage.googleapis.com/v0/b/toyota-kenya.appspot.com/o/news%2Frav4-2.jpg?alt=media&token=296f304f-f18d-497b-be97-6788497474ee" },
                },
                {
                    "name": "Where is Caldina",
                    "address": "225 Mulberry St, New York, NY 10012",
                    "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" },
                },
                {
                    "name": "Latest Chrome Rims",
                    "address": "185 Sutter St, San Francisco, CA 94109",
                    "image": { "url": "https://firebasestorage.googleapis.com/v0/b/toyota-kenya.appspot.com/o/news%2Fchrome.jpg?alt=media&token=8eda756a-e05a-43f4-8075-9b2f0fce4ff7" },
                }

            ],
        }
    }

    renderRow(rowData, sectionId, index) {
        // rowData contains grouped data for one row,
        // so we need to remap it into cells and pass to GridRow
        if (index === '0') {
            return (
                <TouchableOpacity key={index}>
                    <ImageBackground
                        styleName="large"
                        source={{ uri: rowData[0].image.url }}
                    >
                        <Tile>
                            <Title styleName="md-gutter-bottom">{rowData[0].name}</Title>
                            <Subtitle styleName="sm-gutter-horizontal">{rowData[0].address}</Subtitle>
                        </Tile>
                    </ImageBackground>
                    <Divider styleName="line" />
                </TouchableOpacity>
            );
        }

        const cellViews = rowData.map((restaurant, id) => {
            return (
                <TouchableOpacity key={id} styleName="flexible">
                    <Card styleName="flexible">
                        <Image
                            styleName="medium-wide"
                            source={{ uri: restaurant.image.url }}
                        />
                        <View styleName="content">
                            <Subtitle numberOfLines={3}>{restaurant.name}</Subtitle>
                            <View styleName="horizontal">
                                <Caption styleName="collapsible" numberOfLines={2}>{restaurant.address}</Caption>
                            </View>
                        </View>
                    </Card>
                </TouchableOpacity>
            );
        });

        return (
            <GridRow columns={2}>
                {cellViews}
            </GridRow>
        );
    }

    render() {
        const restaurants = this.state.restaurants;
        // Group the restaurants into rows with 2 columns, except for the
        // first restaurant. The first restaurant is treated as a featured restaurant
        let isFirstArticle = true;
        const groupedData = GridRow.groupByRows(restaurants, 2, () => {
            if (isFirstArticle) {
                isFirstArticle = false;
                return 2;
            }
            return 1;
        });

        return (
            <Screen>

                <ListView
                    data={groupedData}
                    renderRow={this.renderRow}
                />
            </Screen>
        );
    }



}//
