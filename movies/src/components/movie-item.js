import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableHighlight, Alert } from 'react-native';

export default class MovieItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Aqui estou mais um dia !</Text>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
