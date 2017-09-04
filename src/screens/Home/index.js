import React, { Component } from 'react'
import { Text } from 'react-native'

export default class HomeScreen extends Component {
  static navigationOption = {
    tabBarLabel: 'Home'
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Text>Hello from Home</Text>
    )
  }
}
