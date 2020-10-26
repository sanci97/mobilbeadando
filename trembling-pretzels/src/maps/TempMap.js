import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

var styles = require('./MapStyles');

export default class TempMap extends Component {
  static navigationOptions = {
    title: 'TempMap',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 47.4723,
            longitude: 19.0624,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            title="ELTE IK"
            coordinate={{
              latitude: 47.4723,
              longitude: 19.0624,
            }}
            anchor={{ x: 0.69, y: 1 }}
          />
        </MapView>
      </View>
    );
  }
}
