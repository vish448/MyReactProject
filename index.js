/** @format */

import {AppRegistry, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//removing yellow box in the simulator
YellowBox.ignoreWarnings(['Remote Degugger'])

AppRegistry.registerComponent(appName, () => App);
