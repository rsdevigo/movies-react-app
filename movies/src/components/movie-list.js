import React from 'react';
import { StyleSheet, Text, ScrollView, Image, StatusBar, TouchableHighlight, Alert } from 'react-native';
import MovieItem from './movie-item';

export default class MovieList extends React.Component {
  render() {
    return (
      <ScrollView style={styles.movieList}>
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
      </ScrollView>
    );
  }
}




const styles = StyleSheet.create({
  movieList: {
    margin: 8,
    padding: 0,
    backgroundColor: '#eeeeee'
  }
});
