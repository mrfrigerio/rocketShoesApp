import React from 'react'
import { Container, Button, Action } from './styles'

export default function Home({ navigation }) {
  return (
    <Container>
      <Button onPress={() => navigation.navigate('Cart')}>
        <Action>Go</Action>
      </Button>
    </Container>
  )
}
Home.navigationOptions = {
  title: 'Home'
}
