/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions,ScrollView,Image,CameraRoll, StyleSheet, TouchableHighlight, Text, View, Button} from 'react-native';
const {width, height} = Dimensions.get('window')
export default class App extends Component {
  state = {photos: [] }
  getPhotos = async() => {
   try {
     const data = await CameraRoll.getPhotos({ first: 10, assetType: 'All' })
     console.log('photos: ', data)
     this.setState({photos: data.edges })
   } catch (err) {
     console.log('error:', err)
   }
 }
  render() {
    return (
      <View style={styles.container}>
        <Text>Camera Roll Demo</Text>
        <Button onPress={this.getPhotos} title='Get Photos' />
        <ScrollView>
          <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
        {
          this.state.photos.map((image,index) => (
            <Image
              source={{uri: image.node.image.uri}}
              style={{width: width/2,height: width/2}}
              >
            </Image>
          ))
        }</View>
      </ScrollView>
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
