/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, StyleSheet, TouchableHighlight, Text, View,TextInput} from 'react-native';

export default class App extends Component {
  state = { input : ''}
   onChangeText = val =>{
     this.setState({input:val})
   }
  render() {
    //array.map((item,index) => )
    return (
      <View style={styles.container}>
        <Text>People:</Text>
        <TextInput
          onChangeText = {this.onChangeText}
          style = {styles.input}
          />
        <Text>{this.state.input}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent:'center',
      padding: 20
      //alignItems: 'center'
    },
    textContainer:{
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    textHeading:{
      fontSize: 28,
    },
    text:{
      fontSize: 14,
      color: '#ccc',
    },
    input:{
      borderWidth: 1,
      borderColor: '#ddd',
      height: 32,
    },
});
