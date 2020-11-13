import React, { Component } from 'react';
import { Text, Button, Image, ScrollView, View, Pressable } from 'react-native';

var styles = require('./ScreenStyles');

export default class BudaCastleScreen extends Component {
  static navigationOptions = {
    title: 'Buda Castle',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <>
        <ScrollView style={{ backgroundColor: 'lightgreen' }}>
          <View style={styles.margin}>
            <Text style={styles.titleText}>Buda Castle</Text>
            <Text style={styles.mainText}>
              Buda Castle is the historical castle and palace complex of the
              Hungarian kings in Budapest. It was first completed in 1265, but
              the original castle was destroyed during WWII and the massive
              Baroque palace today occupying its place was built between 1749
              and 1769. It's now home to the Hungarian National Gallery and The
              Budapest History Museum.
            </Text>
            <Image
              style={styles.img}
              source={require('./pictures/budacastle.jpg')}
            />
            <Text></Text>
            <Pressable
              onPress={() =>
                navigate('Buda Castle Map', { name: 'Buda Castle' })
              }>
              <Text style={styles.pressable}>Show it on the map!</Text>
            </Pressable>
          </View>
        </ScrollView>
      </>
    );
  }
}
