import React, { Component } from 'react';
import { Text, Button, Image, ScrollView, View, Pressable } from 'react-native';

var styles = require('./ScreenStyles');

export default class VajdahunyadCastleScreen extends Component {
  static navigationOptions = {
    title: 'Vajdahunyad Castle',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <>
        <ScrollView>
          <View>
            <Text style={styles.titleText}>Vajdahunyad Castle</Text>
            <Text></Text>
            <Text style={styles.mainText}>
              
            </Text>
            <Text></Text>
            <Image
              style={styles.img}
              source={require('./pictures/vajdahunyadcastle.jpg')}
            />
            <Text></Text>
            <Image
              style={styles.img}
              source={require('./pictures/anonymus.jpg')}
            />
            <Text></Text>
            <Pressable
              onPress={() => navigate('Vajdahunyad Castle Map', { name: 'Vajdahunyad Castle' })}>
              <Text style={styles.pressable}>Show it on the map!</Text>
            </Pressable>
          </View>
        </ScrollView>
      </>
    );
  }
}
