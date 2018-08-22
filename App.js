/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, StyleSheet, TouchableHighlight, Text, View,TextInput,Button} from 'react-native';

export default class App extends Component {
  state = { username : '' , password : '', formData: ''}
   onChangeText = (key, val) =>{
     this.setState({[key]:val})
   }
   submit = () => {
     const userData = {
       username : this.state.username,
       password : this.state.password,
       signedIn : true
     }
     this.setState({formData:JSON.stringify(userData)})
   }
  render() {
    //array.map((item,index) => )
    return (
      <View style={styles.container}>
        <Text>Login Form</Text>
        <TextInput
          onChangeText = {val => this.onChangeText('username',val)}
          style = {styles.input}
          placeholder = 'Username'
          autoComplete = 'none'
          autoCorrect = {false}
                    />
        <TextInput
          onChangeText = {val => this.onChangeText('password',val)}
          style = {styles.input}
          placeholder = 'Password'
          autoComplete = 'none'
          autoCorrect = {false}
          secureTextEntry= {true}
                    />
       <Button onPress={this.submit} title="Submit" />
       <Text>{this.state.formData}</Text>

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
      textAlign: 'center',
    },
    text:{
      fontSize: 14,
      color: '#ccc',
    },
    input:{
      borderWidth: 1,
      borderColor: '#ddd',
      height: 50,
      paddingLeft: 10,
      marginBottom: 10,
      color: '#000',
    },
});
