import React from 'react'
import { View, Text, } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

const Home = (props) => <View>
  <Text>Home</Text>
  <Text onPress={() => props.navigation.navigate('Page2')}>Go to page 2</Text>
</View>

const Page2 = (props) => <View>
  <Text>Page2</Text>
  <Text onPress={() => props.navigation.goBack()}>Go back</Text>
</View>

const Info = (props) => <View>
  <Text>Info</Text>
  //<Text onPress={() => props.navigation.goBack()}>Go back</Text>
</View>

Home.navigationOptions = {
  title: 'Home'
}

Page2.navigationOptions = {
  title: 'Page 2'
}

Info.navigationOptions = {
  title: 'Page 2'
}

const stackNav = createStackNavigator({
  Home: { screen: Home },
  Page2: { screen: Page2 }
})

const tabNav = createBottomTabNavigator({
  Home: { screen: stackNav },
  Info: { screen: Info },
})


export default tabNav
