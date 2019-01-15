import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheContatos = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
  render() {
    return (    
      <View>
        <StatusBar
          backgroundColor='#CCC'
        />
        <BarraNavegacao voltar navigator={this.props.navigator}/>

        <View style={styles.cabecalho}>
          <Image source={detalheContatos} />
          <Text style={styles.txtTitulo}>Contatos</Text>
        </View>

        <View style={ styles.detalheContatos }>
            <Text style={ styles.txtContatos }>TEL: (11) 1234-1232</Text>
            <Text style={ styles.txtContatos }>CEL: (11) 91234-1234</Text>
            <Text style={ styles.txtContatos }>E-MAIL: contato@atmconsultoria.com</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20,
  },
  txtTitulo: {
    fontSize: 30,
    color: '#61BD8C',
    marginLeft: 10,
    marginTop: 25,
  },
  detalheContatos: {
      marginTop: 20,
      padding: 20,
  },
  txtContatos: {
    fontSize: 18,
  },
});


