import React from 'react';

import { StyleSheet, Text, View, ImageBackground, Image, StatusBar, TouchableHighlight, Alert, Button } from 'react-native';


export default class MovieItem extends React.Component {


  constructor (props) {
    super(props);
  }


  _markMovie () {
    return this.props.onFavorite(this.props.id);
  }


  render() {
    let movieButtonAction;
    let favoriteStar;

    if (!this.props.isFavorite) {
      movieButtonActionTitle = "Marcar como favorito";
      favoriteStar = <Image source={require('./star_blank.png')} style={styles.favoriteStar} />
    } else {
      movieButtonActionTitle = "Desmarcar como favorito";
      favoriteStar = <Image source={require('./star.png')} style={styles.favoriteStar} />
    }
    return (
      <View style={styles.movieItem}>
        <View style={styles.movieItemHeader}>
          <ImageBackground source={{uri: this.props.cover}} resizeMode="cover" style={styles.movieItemHeaderImage}>
            <Text style={styles.movieItemHeaderText}>{this.props.title}</Text>
          </ImageBackground>
        </View>
        <Text style={styles.movieItemText}>
          {favoriteStar} {this.props.year} - IMDB {this.props.grade}
        </Text>
        <Button
          title={movieButtonActionTitle}
          color="#ffdb58"
          accessibilityLabel="Toque no botão mostarda para favoritar"
          onPress={this._markMovie.bind(this)}
        />
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

  favoriteStar: {
    width: 32,
    height: 32
  },

  movieItemFavorite: {
    backgroundColor: '#ffdb58',
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
