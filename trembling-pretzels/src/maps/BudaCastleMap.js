import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

var styles = require('./MapStyles');

export default class BudaCastleMap extends Component {
  static navigationOptions = {
    title: 'Buda Castle Map',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 47.496396,
            longitude: 19.039773,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            title="Buda Castle"
            coordinate={{
              latitude: 47.496396,
              longitude: 19.039773,
            }}
            anchor={{ x: 0.69, y: 1 }}
          />
        </MapView>
      </View>
    );
  }
}
