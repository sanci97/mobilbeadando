import React, { Component } from 'react';
import { Text, Button, Image, ScrollView, View, Pressable } from 'react-native';

var styles = require('./ScreenStyles');

export default class ParlamentScreen extends Component {
  static navigationOptions = {
    title: 'Parlament',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <>
        <ScrollView>
          <View>
            <Text style={styles.titleText}>Parlament</Text>
            <Text></Text>
            <Text style={styles.mainText}>
              
            </Text>
            <Text></Text>
            <Image
              style={styles.img}
              source={require('./pictures/parlament.jpg')}
            />
            <Text></Text>
            <Pressable
              onPress={() => navigate('Parlament Map', { name: 'Parlament' })}>
              <Text style={styles.pressable}>Show it on the map!</Text>
            </Pressable>
          </View>
        </ScrollView>
      </>
    );
  }
}
