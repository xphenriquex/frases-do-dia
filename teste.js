import React, { Component } from 'react';
import { View, Text} from 'react-native';

const estilos = {
  estiloTexto: {
    fontSize: 30,
    backgroundColor: '#08509B',
    margin: 30,
    color: '#fff',
    textAlign: 'center'
    //elevation: 3,
    // fontStyle: 'italic'
    // fontWeight: '100'
    // textDecorationLine: 'underline'
  }
};

export default class App2 extends Component {
  render() {
    return (
      <View>
          <Text style={ estilos.estiloTexto }>Frases do dia</Text>
      </View>
    )
  }
}

