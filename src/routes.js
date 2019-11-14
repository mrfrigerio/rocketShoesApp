import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './pages/Home'
import Cart from './pages/Cart'

const stackNavigator = createStackNavigator(
  {
    Home,
    Cart
  },
  {
    headerBackTitleVisible: true,
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#7159c1'
      },
      headerTintColor: '#fff'
    }
  }
)

export default createAppContainer(stackNavigator)
