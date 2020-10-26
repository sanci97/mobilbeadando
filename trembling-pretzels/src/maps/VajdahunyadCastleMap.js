import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

var styles = require('./MapStyles');

export default class VajdahunyadCastleMap extends Component {
  static navigationOptions = {
    title: 'Vajdahunyad Castle Map',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 47.515206,
            longitude: 19.083090,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            title="Vajdahunyad Castle"
            coordinate={{
              latitude: 47.515206,
              longitude: 19.083090,
            }}
            anchor={{ x: 0.69, y: 1 }}
          />
        </MapView>
      </View>
    );
  }
}
