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
  renderItem(person,index){
    return(
      <Text
        key={index}
        style={styles.text}>
          {person.name} is {person.age}
      </Text>
    )
  }

  render() {

    //array.map((item,index) => )
    return (
      <View style={styles.container}>
      <FlatList
        data={people}
        keyExtractor = {item => item.name}
        renderItem={({item}) => <Text>{item.name}</Text>}
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
    text:{
      fontSize: 20,
      padding:12,
    }
});
