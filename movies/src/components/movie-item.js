import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, TouchableHighlight, Alert } from 'react-native';

export default class MovieItem extends React.Component {
  render() {
    return (
      <View style={styles.movieItem}>
        <View style={styles.movieItemHeader}>
          <ImageBackground source={{uri:'https://mardehistorias.files.wordpress.com/2010/09/o-senhor-dos-aneis.jpg'}} resizeMode="cover" style={styles.movieItemHeaderImage}>
            <Text style={styles.movieItemHeaderText}>Senhor dos Anéis</Text>
          </ImageBackground>
        </View>
        <Text style={styles.movieItemText}>
          2015 - IMDB 9,7
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  movieItem: {
    backgroundColor: '#ffffff',
    margin: 0,
    padding: 0,
    marginBottom: 10,
    borderRadius: 2,
    elevation: 1,
    width: '100%'
  },

  movieItemHeader: {
    height: 156,
    margin: 0,
    position: 'relative',
    width: '100%'
  },

  movieItemHeaderImage: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },

  movieItemHeaderText: {
    fontSize: 24,
    fontWeight: '500',
    margin: 0,
    padding: 0,
    paddingLeft: 10,
    color: '#ffffff',
    position: 'absolute',
    bottom: 0
  },

  movieItemText: {
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10
  }
});
