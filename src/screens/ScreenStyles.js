'use strict';

var React = require('react-native');

const styles = React.StyleSheet.create({
  titleText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 50,
    color: "white",
  },
  img: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: 60,
    width: null,
    height: 400
  },
  margin: {
    padding: 20,
  },
  mainText: {
    textAlign: 'justify',
    fontSize: 15,
    color: "white",
  },
  mapButton: {
    padding: 50,
    raised: true,
    size: 20,
  },
  mapButtonView: {
    width: 150,
  },
  mapButtonView2: {
    alignItems: 'center',
  },
  pressable: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    paddingVertical: 3,
    color: "white",
  },
});

module.exports = styles;
