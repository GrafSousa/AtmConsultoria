import React, { Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

import CenaPrincial from './src/components/CenaPrincipal';

export default class app5 extends Component {
  render() {
    return (
      <CenaPrincial />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
