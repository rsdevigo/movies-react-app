import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableHighlight, Modal, Alert, Button, TextInput } from 'react-native';
import MovieForm from './movie-form';

export default class AppHeader extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalVisible:  false,
      movie: {
        title: "",
        grade: "",
        year: 0,
        cover: ""
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.movieHeader}>
          <StatusBar hidden={true}/>
          <View style={styles.movieHeaderTitle}>
            <Image style={styles.movieHeaderLogo} source={{uri: this.props.icon}} />
            <Text style={styles.movieHeaderTitleText}>{this.props.title}</Text>
          </View>
          <View>
            <TouchableHighlight onPress={this._onPressButton.bind(this)} underlayColor="transparent">
               <View style={styles.movieHeaderButton}>
                 <Text style={styles.movieHeaderButtonText}>+</Text>
               </View>
             </TouchableHighlight>
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <View style={{margin: 8}}>
            <MovieForm />
            <Button
              title="Fechar formulário"
              color="#ffdb58"
              accessibilityLabel="Toque no botão mostarda para fechar o formulário"
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            />
          </View>
        </Modal>
      </View>
    );
  }
  setModalVisible (visible) {
    this.setState({modalVisible: visible});
  }
  _onPressButton() {
    this.setModalVisible(true);
  }
}




const styles = StyleSheet.create({
  container: {
    height: 56,
  },
  movieHeader: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#009688',
  },
  movieHeaderTitle: {
    paddingLeft: 10,
    paddingRight: 10,
    margin: 0,
    flex: 1,
    flexDirection: 'row'
  },
  movieHeaderTitleText: {
    fontWeight: "500",
    color: "#ffffff",
    fontSize: 20,
    margin: 0,
    padding: 0,
    paddingLeft: 10
  },
  movieHeaderLogo: {
    width: 32,
    height: 32
  },
  movieHeaderButton: {
    marginRight: 10,
    width: 32,
    height: 32,
  },
  movieHeaderButtonText: {
    fontSize: 30,
    textAlign: 'center',
    lineHeight: 32,
    color: '#ffffff'
  }


});
