/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Animated,
  Image, StyleSheet, TouchableHighlight, Text, View, Button} from 'react-native';

//TODO:
// Animated. => view.,image, text
//1. Animated component from react Native.
//2. Create animate value on the class
//3. Create animated component and set a style propety using animated Value
//4. Create & Trigger the animation

export default class App extends Component {
  animatedValue = new Animated.Value(0)
  animate = () => {
    Animated.timing(
      this.animatedValue,
      {
          toValue:1,
          duration:2000
      }
      // TODO:
      //1.animatd property
      //2. config
    ).start()
  }
  render() {
    const margin = this.animatedValue.interpolate({
      inputRange:[0,1], outputRange:[0,200]
    })
    const backgroundColor = this.animatedValue.interpolate({
      inputRange:[0,1], outputRange:['red','orange']
    })
    const rotation = this.animatedValue.interpolate({
      inputRange:[0,1], outputRange:['0deg','360deg']
    })
    return (
      <View style={styles.container}>
        <Button title="Animate" onPress={this.animate}></Button>
        <Animated.View style={{
            transform: [{
              rotate: rotation
            }],
            height:50,width:50,backgroundColor,marginTop: margin, marginLeft: margin
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      //justifyContent:'center',
      //padding: 20,
      marginTop: 20,
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
