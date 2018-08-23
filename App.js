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
  animatedValue1 = new Animated.Value(0)
  animatedValue2 = new Animated.Value(0)
  animatedValue3 = new Animated.Value(0)

  animate = () => {
    this.animatedValue1.setValue(0)
    this.animatedValue2.setValue(0)
    this.animatedValue3.setValue(0)
    const createAnimation = (value, toValue, duration) => Animated.timing(
     value,
      {
        toValue,
        duration
      }
    )
    Animated.parallel([
      createAnimation(this.animatedValue1,100,700),
      createAnimation(this.animatedValue2,700,3000),
      createAnimation(this.animatedValue3,350,5000)
    ]).start((()=>{
      console.log('Animation Complete');
    }))
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="Animate" onPress={this.animate}></Button>
        <Animated.View style={{
            height:50,width:50, backgroundColor: 'orange',marginLeft: this.animatedValue1
          }}/>
        <Animated.View style={{
            height:50,width:50, backgroundColor: 'white',borderWidth: 1, marginRight: this.animatedValue2
          }}/>
        <Animated.View style={{
            height:50,width:50, backgroundColor: 'green', marginBottom: this.animatedValue3
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
