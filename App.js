import React, { Component } from 'react';
import { View, Button} from 'react-native';

const Estilos = {
  principal: {
    paddingTop: 40
  }
};

const botaoPressionado = () => { alert('Botão pressionado!') }

export default class App2 extends Component {
  render() {

    const { principal } = Estilos;

    return (
      <View style={ principal }>
        
        <Button 
          title="Clique aqui"
          color="#841584"
          onPress={botaoPressionado}
          accessibilityLabel="Clique para ver as noticias"

        />

      </View>
    )
  }
}

