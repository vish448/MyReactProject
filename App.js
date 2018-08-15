/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, TouchableHighlight, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; //Adding MaterialIcons

export default class App extends Component<Props> {
 onPress = () =>{
   alert('Button Pressed')
 };
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor='rgba(50,185,255,.8)'
          onPress={this.onPress}
          style={styles.button}>
          <View style={styles.textContainer}>
           <Icon name="home" size={30} color="#FFF" />
            <Text style={styles.text}>Home</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent:'center',
      //alignItems: 'center'
    },
  button:{margin: 10, backgroundColor: 'rgba(50,183,255,1)', borderRadius: 30,padding: 12},
  textContainer:{ justifyContent: 'center',alignItems:'center', flexDirection:'row'},
  text: {marginLeft: 18, color: '#FFF', fontSize: 18},


});
