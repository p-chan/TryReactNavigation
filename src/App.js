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
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    style: {
      height: 49,
      borderTopWidth: 0,
      backgroundColor: '#fafafa',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: -1.5
      },
      shadowOpacity: .09,
      shadowRadius: 1,
      elevation: 1
    }
  }
})

export default class App extends Component {
  render() {
    return (
      <TabNav />
    )
  }
}
