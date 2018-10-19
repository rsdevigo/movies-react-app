import React from 'react';
import { StyleSheet, Button, TextInput, Alert, View, Text } from 'react-native';

export default class MovieForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      movie: {
        title: "",
        grade: "",
        year: "",
        cover: ""
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>
          <Text>Nome do filme</Text>
          <TextInput
            style={{height: 40}}
            placeholder={this.state.movie.title}
            onChangeText={(text) => {
              this._updateField(text, 'title');
            }}
          />
          <Text>Nota do filme no IMDB</Text>
          <TextInput
            style={{height: 40}}
            placeholder="Dê a nota do filme do IMDB"
            onChangeText={(text) => {
              this._updateField(text, 'grade');
            }}
          />
          <Text>Link para uma imagem do filme</Text>
          <TextInput
            style={{height: 40}}
            placeholder={this.state.movie.cover}
            onChangeText={(text) => {
              this._updateField(text, 'cover');
            }}
          />
          <Text>Ano de lançamento do filme</Text>
          <TextInput
            style={{height: 40}}
            placeholder={this.state.movie.year}
            onChangeText={(text) => {
              this._updateField(text, 'year');
            }}
          />
          <Button
            title="Adicionar filme"
            color="#336f6f"
            accessibilityLabel="Toque no botão mostarda para adicionar o filme"
            onPress={() => {
              this.addMovie();
            }}
          />
      </View>
    );
  }

  async addMovie () {
    try {
      let response = await fetch('http://192.168.3.104:3000/api/v1/movies',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.movie)
      });
      let responseJson = await response.json();
      this.setState({movie: {
        title: "",
        grade: "",
        year: "",
        cover: ""
      }});
      Alert.alert(responseJson.message);

    } catch (error) {
      console.error(error);
    }
  }
  _updateField(value, field) {
    this.setState(function(prevState) {
      prevState.movie[field] = value;
      return prevState;
    });
  }
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 8
  }
});
