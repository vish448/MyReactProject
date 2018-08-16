/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, StyleSheet, TouchableHighlight, Text, View} from 'react-native';


const people = [
  { name:'Vishang', age:33},
  { name:'Nirali', age:28}
]

export default class App extends Component {

  renderItems(){
    return people.map(this.renderItem)
  }
  renderItem = ({ item }) =>{
    return(
      <View style={styles.textContainer}>
        <Text
          style={styles.textHeading}>
            {item.name}
        </Text>
        <Text
          style={styles.text}>
            Age: {item.age}
        </Text>
      </View>
    )
  }

  render() {

    //array.map((item,index) => )
    return (
      <View style={styles.container}>
      <FlatList
        data={people}
        keyExtractor = {item => item.name}
        renderItem={this.renderItem}
        />
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
    }
});
