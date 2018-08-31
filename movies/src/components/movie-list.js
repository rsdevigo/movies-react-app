import React from 'react';
// Importando todos o componentes nativos do React Native
import { StyleSheet, Text, ScrollView, View, ActivityIndicator, Image, StatusBar, TouchableHighlight, Alert } from 'react-native';
// Importando o componente MovieItem, pois se trata de uma lista de filmes :)
import MovieItem from './movie-item';

// Criando uma classe para representar o componente MovieList
// Essa classe por se tratar de um componente React precisa herdar a classe: React.Component
// Por isso o uso da palavra extends (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
export default class MovieList extends React.Component {
  // Todos os componentes do React possuem um construtor que recebe as propriedades quando usa-se o componente como uma TAG (props)
  // Por exemplo: <MovieList title="Lorem Ipsum" />, o valor da variável
  // props será: props = {title: 'Lorem Ipsum'}.
  // A palavra super é uma palavra reservada que invoca (chama) o método construtor da
  // classe Pai (React.Component)
  // Nesse nosso construtor criamos um estado para nosso componente: um objeto com uma propriedade booleana
  // e um vetor de filmes vazio.
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movies: []
    }
  }

  // Método assincrono, que acessa o link e pega uma lista de filmes
  // e quando ele de fato pega a lista ele altera o estado do componente
  // e avisa para redesenhar o componente na tela.
  async fetchMovies () {
    try {
      let moviesResponse = await fetch('https://facebook.github.io/react-native/movies.json');
      let moviesResponseJson = await moviesResponse.json();
      this.setState({movies: moviesResponseJson.movies, isLoading: false});
    }catch (error) {
      console.log(error);
    }

  }

  // Método da classe React.Component que é executado toda a vez que o componente é
  // montado na aplicação que faz parte do ciclo de vida do componente.
  // (https://reactjs.org/docs/react-component.html#the-component-lifecycle)
  //Nesse caso estamos chamando o método que busca os filmes no servidor.
  componentDidMount () {
    return this.fetchMovies();
  }

  //Método que é invocado para cada filme da lista de filmes do componente, ele
  // recebe um objeto com informações sobre o filme e
  // devolve uma tag: <MovieItem /> configurada com as informações do filme
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

  // Método responsável por alterar o estado de um filme da lista de filmes
  // Se o filme é favorito ele desfavorita
  // Se o filme não é favorito ele favorita
  // E então atualiza o estado do componente <MovieList /> para redesenhar a lista
  // de filmes.
  markMovie(id) {
    //Acha o filme pelo id.
    let movie = this.state.movies.find(function(movie) {
      return movie.id == id;
    });
    // Altera o valor da propriedade para a sua negação (se era true fica false, se era false fica true)
    movie.favorite = !movie.favorite;
    // Altera o estado do componente e avisa para ser redesenhado
    this.setState(function(prevState){
      return prevState;
    });
  }


  // Metodo que desenha o componente na tela
  render() {

    //Verifica se a busca pelos filmes no servidor ainda não finalizou
    //Se this.state.isLoading é verdade, então aparece um circulo rodando na tela
    // Se não, ele carrega a lista de filmes
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.movieList}>
          //A lista de filmes está guardado na propriedade this.state.movies
          //O método map ele executa a funcão que está entre parenteses para cada item
          //do vetor (movies)
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
