import React from 'react';
// Importando todos o componentes nativos do React Native
import { StyleSheet, Text, View, ImageBackground, Image, StatusBar, TouchableHighlight, Alert, Button } from 'react-native';

// Criando uma classe para representar o componente MovieItem
// Essa classe por se tratar de um componente React precisa herdar a classe: React.Component
// Por isso o uso da palavra extends (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
export default class MovieItem extends React.Component {

  // Todos os componentes do React possuem um construtor que recebe as propriedades quando usa-se o componente como uma TAG (props)
  // Por exemplo: <MovieItem title="Lorem Ipsum" cover="loreipsum" />, o valor da variável
  // props será: props = {title: 'Lorem Ipsum', cover: 'loreipsum'}.
  // A palavra super é uma palavra reservada que invoca (chama) o método construtor da
  // classe Pai (React.Component)
  constructor (props) {
    super(props);
  }

  //Método responsável por chamar o método do componente <movieList /> que marca
  //um filme como favorito na lista de filmes que <movieList /> tem.
  //this.props.id é um identificador único do filme na lista de filmes.
  _markMovie () {
    return this.props.onFavorite(this.props.id);
  }

  //Método responsável por desenhar o componente na tela.
  render() {
    let movieButtonAction;
    let favoriteStar;
    // Verifica se o filme está marcado como favorito
    // Se estiver, o botão fica serve para desfavoritar o filme e a estrela apresentada fica amarela.
    // Se não, o botão serve para favoritar o filme e a estrela fica apagada.
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
// Aqui estão os estilos em forma de objeto.
//Eles são usados no método render().
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
