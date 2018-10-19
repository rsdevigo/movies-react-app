import React from 'react';
// Importando todos o componentes nativos do React Native
import { StyleSheet, Text, ScrollView, View, ActivityIndicator, Image, StatusBar, TouchableHighlight, Alert } from 'react-native';
// Importando o componente MovieItem, pois se trata de uma lista de filmes :)
import MovieItem from './movie-item';


export default class MovieList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movies: []
    }
  }


  async fetchMovies () {
    try {
      let moviesResponse = await fetch('http://192.168.3.104:3000/api/v1/movies');
      console.log(moviesResponse);
      let moviesResponseJson = await moviesResponse.json();
      return moviesResponseJson;
    }catch (error) {
      console.log(error);
    }

  }


  async componentDidMount () {
    let moviesResponseJson = await this.fetchMovies();
    console.log(moviesResponseJson);
    this.setState({movies: moviesResponseJson, isLoading: false});
    return;
  }


  renderMovieItem (movie) {
    return <MovieItem
            title={movie.title}
            key={movie.id}
            id={movie.id}
            cover={movie.cover}
            grade={movie.grade}
            year={movie.year}
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
