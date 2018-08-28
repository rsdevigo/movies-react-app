import React from 'react';
import { StyleSheet, Text, ScrollView, View, ActivityIndicator, Image, StatusBar, TouchableHighlight, Alert } from 'react-native';
import MovieItem from './movie-item';

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  async fetchMovies () {
    try {
      let moviesResponse = await fetch('https://facebook.github.io/react-native/movies.json');
      let moviesResponseJson = await moviesResponse.json();
      this.setState({movies: moviesResponseJson.movies, isLoading: false});
    }catch (error) {
      console.log(error);
    }

  }

  componentDidMount () {
    return this.fetchMovies();
  }

  renderMovieItem (movie) {
    return <MovieItem
            title={movie.title}
            key={movie.id}
            id={movie.id}
            cover='https://assets.b9.com.br/wp-content/uploads/2017/11/O-Senhor-dos-Aneis.jpg'
            grade={movie.grade}
            year={movie.releaseYear}
            onFavorite={this.markMovie.bind(this)}
            isFavorite={movie.favorite} />
  }

  markMovie(id) {
    let movie = this.state.movies.find(function(movie) {
      return movie.id == id;
    });
    movie.favorite = !movie.favorite;
    this.setState(function(prevState){
      return prevState;
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.movieList}>
          {this.state.movies.map(this.renderMovieItem.bind(this))}
        </ScrollView>
      );
    }

  }
}




const styles = StyleSheet.create({
  movieList: {
    margin: 8,
    padding: 0,
    backgroundColor: '#eeeeee',
    marginBottom: 70
  }
});
