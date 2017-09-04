import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'

import HomeScreen from './screens/Home'
import SearchScreen from './screens/Search'
import SettingsScreen from './screens/Settings'

const TabNav = TabNavigator({
  Home: {
    screen: HomeScreen
  },
  Search: {
    screen: SearchScreen
  },
  Settings: {
    screen: SettingsScreen
  }
})

export default class App extends Component {
  render() {
    return (
      <TabNav />
    )
  }
}
