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
        <ScrollView>
          <View>
            <Text style={styles.titleText}>Buda Castle</Text>
            <Text></Text>
            <Text style={styles.mainText}>
              
            </Text>
            <Text></Text>
            <Image
              style={styles.img}
              source={require('./pictures/budacastle.jpg')}
            />
            <Text></Text>
            <Pressable
              onPress={() => navigate('Buda Castle Map', { name: 'Buda Castle' })}>
              <Text style={styles.pressable}>Show it on the map!</Text>
            </Pressable>
          </View>
        </ScrollView>
      </>
    );
  }
}
