/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, TouchableHighlight, Text, View, Button} from 'react-native';

import { createStackNavigator} from 'react-navigation'
// TODO:
// Types of Navigation
// Stack, Tab, Drawer, switch

class App extends Component {


  render() {
    console.log('Props', this.props)
    return (
      <View style={styles.container}>
        <Text title="Navigation">Navigation Demo</Text>
        <Text onPress= {
            () => this.props.navigation.navigate('Screen2')
          }>To Screen2</Text>

      </View>
    );
  }
}

const Screen2 = props =><View>
  <Text>Hello from Screen2</Text>
  <Text onPress={
      ()=>props.navigation.goBack()
    }>Go Back</Text>
</View>
const Nav = createStackNavigator([
  App:{screen: App},
  Screen2:{screen: Screen2}
])

export default Nav

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingVertical: 30
    },

});
