import React from 'react'
import { View, Text, ActivityIndicator} from 'react-native'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'

//import { withAuthenticator } from 'aws-amplify-react-native'

const Home = (props) => <View>
  <Text>Home</Text>
  <Text onPress={() => props.navigation.navigate('Page2')}>Go to page 2</Text>
</View>

const Page2 = (props) => <View>
  <Text>Page2</Text>
  <Text onPress={() => props.navigation.goBack()}>Home</Text>
</View>

const Unauthorized = () => <View>
  <Text>Unauthorized User</Text>
</View>

class Initializing extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Main')
    }, 2000)
  }
  render() {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator />
      <Text>Initializing</Text>
    </View>
  }
}

const Main = createStackNavigator({
  Home: { screen: Home },
  Page2: { screen: Page2 }
})

const MainNav = createSwitchNavigator({
  Initializing: { screen: Initializing },
  Main: { screen: Main },
  Unauthorized: { screen: Unauthorized }
})

export default MainNav
