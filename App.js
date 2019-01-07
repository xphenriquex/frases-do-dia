import React, { Component } from 'react';
import { View, Text} from 'react-native';

const estilos = {

  principal: {
    flex: 1,
    backgroundColor: 'cornflowerblue',
    height: 500,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },

  topo: {
    flex: 1,
    fontSize: 30,
    backgroundColor: 'brown',
    color: '#FFF',
    textAlign: 'center',
    
  },

  conteudo: {
    flex: 5,
    fontSize: 30,
    backgroundColor: 'yellowgreen',
    color: '#FFF',
    textAlign: 'center',
    
  },

  rodape: {
    flex: 1,
    fontSize: 30,
    backgroundColor: 'orangered',
    color: '#FFF',
    textAlign: 'center',
    
  }
};

export default class App2 extends Component {
  render() {

    const { principal, topo, conteudo, rodape } = estilos;

    return (
      <View style={ principal }>
          <Text style={ topo }>Topo</Text>
          <Text style={ conteudo }>Conteudo</Text>
          <Text style={ rodape }>Rodape</Text>
      </View>
    )
  }
}

