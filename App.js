/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, StyleSheet, TouchableHighlight, Text, View} from 'react-native';


/*const people = [
  { name:'Sam', age:33},
  { name:'Matt', age:28},
  { name:'John', age:22},
]*/

export default class App extends Component {
  state = {people: [], refreshing: false, page: 1}
  async componentDidMount(){
    this.fetchData()
  }

  fetchData = async() => {
    this.setState({refreshing:true})
    try {
      const data = await fetch(`https://swapi.co/api/people?page=${this.state.page}`)
      const json = await data.json()
      this.setState({
        people : json.results,
        page : this.state.page + 1,
        refreshing: false
      })
    }catch (err){
      console.log('Error fetching date', err)
    }
  }

/*  onRefresh = () => {
    this.setState({ refreshing:true }, () => {
      setTimeout(() => {
        const newPeople = [
          ...this.state.people,
          { name: 'Linda', age:23},
          { name: 'Nathan',age:27},
          {name:'Jennifer',age:12},
        ]
        this.setState({people:newPeople,refreshing:false})
      }, 2400)
    })
  }*/
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
            Gender: {item.gender}
        </Text>
      </View>
    )
  }

  render() {

    //array.map((item,index) => )
    return (
      <View style={styles.container}>
        <Text>People:</Text>
      <FlatList
        onRefresh={this.fetchData}
        refreshing={this.state.refreshing}
        data={this.state.people}
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
    }
});
