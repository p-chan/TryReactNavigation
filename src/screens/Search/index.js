import React, { Component } from 'react'
import { Text } from 'react-native'

export default class SearchScreen extends Component {
  static navigationOption = {
    tabBarLabel: 'Search'
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Text>Hello from Search</Text>
    )
  }
}
