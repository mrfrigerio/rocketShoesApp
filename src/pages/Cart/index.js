import React from 'react'
import { Text } from 'react-native'

import { Container } from './styles'

export default function Cart() {
  return (
    <Container>
      <Text>Cart</Text>
    </Container>
  )
}

Cart.navigationOptions = {
  title: 'Cart'
}
