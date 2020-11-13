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
        <ScrollView style={{ backgroundColor: 'lightblue' }}>
          <View style={styles.margin}>
            <Text style={styles.titleText}>Vajdahunyad Castle</Text>
            <Text style={styles.mainText}>
              Vajdahunyad Castle was built in 1896 as part of the Millennial
              Exhibition which celebrated the 1,000 years of Hungary. The castle
              was designed by Ignác Alpár and features copies of several
              landmark buildings from different parts of the former Kingdom of
              Hungary and so it displays different architectural styles:
              Romanesque, Gothic, Renaissance, and Baroque. Originally, it was
              made from cardboard and wood, but due to its popularity it was
              rebuilt from stone and brick between 1904 and 1908. Today, it
              houses the Museum of Hungarian Agriculture, the biggest
              agricultural museum in Europe.
            </Text>
            <Image
              style={styles.img}
              source={require('./pictures/vajdahunyadcastle.jpg')}
            />
            <Text style={styles.mainText}>
              The statue of the chronicler Anonymus (by Miklós Ligeti) is also
              displayed in the castle court. Anonymus lived in the 12th century
              (his true identity is unknown, but he was a notary of Béla III of
              Hungary), who wrote the chronicle Gesta Hungarorum (Deeds of the
              Hungarians).
            </Text>
            <Image
              style={styles.img}
              source={require('./pictures/anonymus.jpg')}
            />
            <Pressable
              onPress={() =>
                navigate('Vajdahunyad Castle Map', {
                  name: 'Vajdahunyad Castle',
                })
              }>
              <Text style={styles.pressable}>Show it on the map!</Text>
            </Pressable>
          </View>
        </ScrollView>
      </>
    );
  }
}
