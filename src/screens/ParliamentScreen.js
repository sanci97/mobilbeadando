import React, { Component } from 'react';
import { Text, Button, Image, ScrollView, View, Pressable } from 'react-native';

var styles = require('./ScreenStyles');

export default class ParlamentScreen extends Component {
  static navigationOptions = {
    title: 'Hungarian Parliament',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <>
        <ScrollView style={{ backgroundColor: 'pink' }}>
          <View style={styles.margin}>
            <Text style={styles.titleText}>Hungarian Parliament</Text>
            <Text></Text>
            <Text style={styles.mainText}>
              Parliament of Budapest is the seat of the National Assembly of
              Hungary. It was built from 1884 to 1904, designed Imre Steindl in
              a neo-Gothic style. Thanks to the work of multiple great
              restaurators through the years like Temesváry Bruder Katalin, the
              Hungarian Parliament is in a great condition even after 100 years,
              two world wars and the '56 revolution!
            </Text>
            <Text></Text>
            <Image
              style={styles.img}
              source={require('./pictures/parliament.jpg')}
            />
            <Text></Text>
            <Pressable
              onPress={() =>
                navigate('Parliament Map', { name: 'Parliament' })
              }>
              <Text style={styles.pressable}>Show it on the map!</Text>
            </Pressable>
          </View>
        </ScrollView>
      </>
    );
  }
}
