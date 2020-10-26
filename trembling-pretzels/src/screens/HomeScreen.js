import React, { Component } from 'react';
import { Button, StyleSheet, Text } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <>
        <Button
          title="Buda Castle"
          onPress={() => navigate('Buda Castle', { name: 'Buda Castle' })}
        />
        <Text></Text>
        <Button
          title="Parlament"
          onPress={() => navigate('Parlament', { name: 'Parlament' })}
        />
        <Text></Text>
        <Button
          title="Vajdahunyad Castle"
          onPress={() =>
            navigate('Vajdahunyad Castle', { name: 'Vajdahunyad Castle' })
          }
        />
      </>
    );
  }
}
