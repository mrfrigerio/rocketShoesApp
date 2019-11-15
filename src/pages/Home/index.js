import React from 'react'
import { Image } from 'react-native'
import { Container, Button, Action } from './styles'
import logoImg from '../../assets/images/background.svg'

export default function Home({ navigation }) {
  return (
    <Container>
      <Image source={logoImg} />
      <Button onPress={() => navigation.navigate('Cart')}>
        <Action>Home</Action>
      </Button>
    </Container>
  )
}
// Home.navigationOptions = {
//   title: 'Home'
// }
