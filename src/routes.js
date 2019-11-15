import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Image } from 'react-native'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Header from './components/Header/index'
import logoImg from './assets/images/rocketshoes-logo.svg'

const stackNavigator = createStackNavigator(
  {
    Home,
    Cart
  },
  {
    headerBackTitleVisible: false,
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
        borderBottomColor: '#7159c1',
        borderBottomWidth: 2
      },
      headerTintColor: '#fff',
      headerLeft: null,
      headerTitle: () => <Header />
    }
  }
)

export default createAppContainer(stackNavigator)
