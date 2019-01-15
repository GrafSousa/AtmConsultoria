import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincial from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';

export default class app5 extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'principal' }}
        renderScene={(route, navigator) => {
          if(route.id === 'principal') {
            return (<CenaPrincial navigator={navigator}/>);
          }

          if(route.id === 'cliente') {
            return (<CenaClientes navigator={navigator}/>);
          }

          if(route.id === 'contatos') {
            return (<CenaContatos navigator={navigator}/>);
          }

          if(route.id === 'empresa') {
            return (<CenaEmpresa navigator={navigator}/>);
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
