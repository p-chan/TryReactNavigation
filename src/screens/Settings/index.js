import React, { Component } from 'react'
import { Text } from 'react-native'

export default class SettingsScreen extends Component {
  static navigationOption = {
    tabBarLabel: 'Settings'
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Text>Hello from Settings</Text>
    )
  }
}
