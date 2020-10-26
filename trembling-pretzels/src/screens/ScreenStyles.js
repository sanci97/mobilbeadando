'use strict';

var React = require('react-native');

const styles = React.StyleSheet.create({
  titleText: {
    fontWeight: 'bold',
    marginVertical: 4,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 50,
    paddingVertical: 10,
  },
  img: {
    width: '100%',
    textAlign: 'center',
    resizeMode: 'contain',
  },
  mainText: {
    padding: 20,
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
    paddingVertical: 10,
  },
});

module.exports = styles;
