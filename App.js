import React from 'react'
import { View, Text, } from 'react-native'
import { createStackNavigator } from 'react-navigation'

const Home = (props) => <View>
  <Text>Home</Text>
  <Text onPress={() => props.navigation.navigate('Page2')}>Go to page 2</Text>
</View>

const Page2 = (props) => <View>
  <Text>Page2</Text>
  <Text onPress={() => props.navigation.goBack()}>Go back</Text>
</View>

Home.navigationOptions = {
  title: 'Home'
}

Page2.navigationOptions = {
  title: 'Page 2'
}

const Navigation = createStackNavigator({
  Home: { screen: Home },
  Page2: { screen: Page2 }
})

export default Navigation
