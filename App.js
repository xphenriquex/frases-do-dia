import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, Alert} from 'react-native';

const Estilos = {
  
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
  },

  textBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  }

};

const gerarNovaFrase = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  //frase
  var frases = Array();
  frases[0] = 'Querido Deus, graças Te dou por me ouvir, me guardar e por fazer de tudo para me ver sorrir! (Salmo 64)';
  frases[1] = 'Enquanto há vida, há esperança. (Eclesiastes 9:4)';
  frases[2] = 'O Senhor te abençoe e te guarde. O Senhor faça resplandecer o seu rosto sobre ti, e tenha misericórdia de ti. O Senhor sobre ti levante o seu rosto e te dê a paz. (Números 6:24-26)';
  frases[3] = 'O próprio Senhor irá à sua frente e estará com você; ele nunca o deixará, nunca o abandonará. Não tenha medo! Não se desanime! (Deuteronômio 31:8)';
  frases[4] = 'O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta. (1 Coríntios 13:4-7)';

  fraseEscolhida = frases[numeroAleatorio];

  Alert.alert('Frases', fraseEscolhida);
};

export default class App2 extends Component {
  render() {

    const { principal, botao, textBotao } = Estilos;

    return (
      <View style={ principal }>

        <Image source={require('./imgs/logo.png')} />

        <TouchableOpacity 
          onPress={gerarNovaFrase}
          style={botao}>
          <Text style={textBotao}>Nova frase</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

