/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(){
    super();
    console.log("constructor called");
  };
  state = {
    greeting: "Hello World!"
  }
  updateGreeting = () => {
    this.setState ({
      greeting: "New Greeting"
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box,{backgroundColor: 'red'}]}/>
        <View style={[styles.box,{backgroundColor: 'green'}]}/>
        <View style={[styles.box,{backgroundColor: 'blue'}]}/>
      </View>
    );
  }
}

//// TODO: Todo test

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'pink',
    //flexDirection:'row',//Available option column // Setting up flex direction. By default it's column. Setting up the Flex axis to Y
    //justifyContent :'stretch', // Justify contents on Primary axis
    //alignItems:'center', //Justify contents on Secondary Axis

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  box:{
    //height: 100,
    //width: 100,
    //backgroundColor: 'green',
    margin:10,
    flex:1
  },
});
