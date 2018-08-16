/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, TouchableHighlight, Text, View} from 'react-native';



export default class App extends Component {
  render() {
    const people = [
      { name:'Vishang', age:33},
      { name:'Nirali', age:28}
    ]
    //array.map((item,index) => )
    return (
      <View style={styles.container}>
        {
          people.map((person,index) => <Text key={index} style={styles.text}>{person.name} is {person.age} </Text>)
        }
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
    text:{
      fontSize: 20,
      padding:12,
    }
});
