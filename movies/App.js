import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from './src/components/app-header';
import MovieList from './src/components/movie-list';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <AppHeader />
        <MovieList />
      </View>
    );
  }
}

const styles = {
  body: {
    backgroundColor: '#eeeeee'
  }
}
