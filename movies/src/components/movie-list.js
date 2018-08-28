import React from 'react';
import { StyleSheet, Text, ScrollView, Image, StatusBar, TouchableHighlight, Alert } from 'react-native';
import MovieItem from './movie-item';

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          id: 1,
          title: "Senhor do aneis 1",
          grade: "9,7",
          year: 2015,
          cover: "https://mardehistorias.files.wordpress.com/2010/09/o-senhor-dos-aneis.jpg",
          favorite: false
        },
        {
          id: 2,
          title: "Senhor do aneis 2",
          grade: "9,7",
          year: 2015,
          cover: "https://mardehistorias.files.wordpress.com/2010/09/o-senhor-dos-aneis.jpg",
          favorite: false
        },
        {
          id: 3,
          title: "Senhor do aneis 3",
          grade: "9,7",
          year: 2015,
          cover: "https://mardehistorias.files.wordpress.com/2010/09/o-senhor-dos-aneis.jpg",
          favorite: true
        },
        {
          id: 4,
          title: "Senhor do aneis 4",
          grade: "9,7",
          year: 2015,
          cover: "https://mardehistorias.files.wordpress.com/2010/09/o-senhor-dos-aneis.jpg",
          favorite: false
        }
      ]
    }
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
    return (
      <ScrollView style={styles.movieList}>
        {this.state.movies.map(this.renderMovieItem.bind(this))}
      </ScrollView>
    );
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
