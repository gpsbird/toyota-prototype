import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';

export class Loading extends Component {
  static defaultProps = {
    text: "Loading..."
  }

  renderProgress = () => {
    if (!this.props.progress) {
      return null
    }
    let { loaded, total } = this.props.progress;

    return <Text style={styles.text}>{'Loading ' + loaded + ' of ' + total + ' assets'}</Text>;
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.text}</Text>
        {this.renderProgress()}
        <Text style={styles.text}>{this.props.errors}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    textAlign: 'center',
    color: '#c6322d'
  }
});
