import React from 'react';
import { StyleSheet, Text, ScrollView, Image, StatusBar, TouchableHighlight, Alert } from 'react-native';
import MovieItem from './movie-item';

export default class MovieList extends React.Component {
  render() {
    return (
      <ScrollView style={styles.movieList}>
        <MovieItem
          title="Senhor do aneis 1"
          grade="9,7"
          year="2015"
          cover="https://mardehistorias.files.wordpress.com/2010/09/o-senhor-dos-aneis.jpg" />
          <MovieItem
            title="Senhor do aneis 2"
            grade="9,7"
            year="2015"
            cover="https://mardehistorias.files.wordpress.com/2010/09/o-senhor-dos-aneis.jpg" />
          <MovieItem
            title="Senhor do aneis 3"
            grade="9,8"
            year="2018"
            cover="https://mardehistorias.files.wordpress.com/2010/09/o-senhor-dos-aneis.jpg" />
          <MovieItem
            title="Senhor do aneis 4"
            grade="5"
            year="2016"
            cover="https://mardehistorias.files.wordpress.com/2010/09/o-senhor-dos-aneis.jpg" />
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
