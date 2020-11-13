import React, { Component } from 'react';
import { Button, StyleSheet, ScrollView, View, Text } from 'react-native';

var styles = require('./ScreenStyles');

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <>
        <ScrollView style={{backgroundColor: "black"}}>
          <View style={styles.margin}>
            <Text style={styles.mainText}>
              Welcome to my humble app! Let me guide you to Budapests most liked
              attractions. Click on one of the names, I will tell you about it
              and I will even show it on the map!
            </Text>
            <Text></Text>
            <Button
              title="Buda Castle"
              onPress={() => navigate('Buda Castle', { name: 'Buda Castle' })}
              color="green"
            />
            <Text></Text>
            <Button
              title="Hungarian Parliament"
              onPress={() => navigate('Parliament', { name: 'Parliament' })}
              color="red"
            />
            <Text></Text>
            <Button
              title="Vajdahunyad Castle"
              onPress={() =>
                navigate('Vajdahunyad Castle', { name: 'Vajdahunyad Castle' })
              }
              color="blue"
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

const pageuniquestyles = StyleSheet.create({});
