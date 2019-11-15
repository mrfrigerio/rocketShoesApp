import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, LogoContainer, Logo, Bag, Badge, BadgeText } from './styles'
import logoImg from '../../assets/images/rocketshoes-logo.png'

class Header extends Component {
  render() {
    const { navigation } = this.props
    return (
      <Container>
        <LogoContainer onPress={() => navigation.navigate('Home')}>
          <Logo source={logoImg} />
        </LogoContainer>
        <Bag onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={25} color="#fff" />
          <Badge>
            <BadgeText>3</BadgeText>
          </Badge>
        </Bag>
      </Container>
    )
  }
}

export default withNavigation(Header)
