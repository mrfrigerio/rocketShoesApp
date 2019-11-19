import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as CartActions from '../../store/modules/cart/actions'
import currencyFormatter from '../../utils/currencyFormatter'
import {
  Container,
  CartContainer,
  CartItem,
  ItemSpecs,
  ItemDescription,
  ItemTitle,
  ItemPrice,
  ItemTotalPrice,
  ItemPriceBar,
  SelectPrice,
  ItemAmount,
  ItemImage,
  TotalLabel,
  TotalPrice,
  CheckoutButton,
  CheckoutButtonText
} from './styles'

class Cart extends Component {
  handleUpdateAmount(id, amount) {
    const { updateAmountRequest } = this.props
    updateAmountRequest(id, amount)
  }

  handleRemoveProduct(id) {
    const { removeProduct } = this.props
    removeProduct(id)
  }

  render() {
    const { cart, totalPriceFormatted } = this.props
    return (
      <Container>
        <CartContainer>
          {cart.map(product => (
            <CartItem key={product.id}>
              <ItemSpecs>
                <ItemImage source={{ uri: product.image }} />
                <ItemDescription>
                  <ItemTitle>{product.title}</ItemTitle>
                  <ItemPrice>{product.priceFormatted}</ItemPrice>
                </ItemDescription>
                <Icon
                  name="delete-forever"
                  size={24}
                  color="#7159c1"
                  onPress={() => this.handleRemoveProduct(product.id)}
                />
              </ItemSpecs>
              <ItemPriceBar>
                <SelectPrice>
                  <Icon
                    name="minus-circle-outline"
                    size={20}
                    onPress={() => this.handleUpdateAmount(product.id, -1)}
                  />
                  <ItemAmount value={String(product.amount)} editable={false} />
                  <Icon
                    name="plus-circle-outline"
                    size={20}
                    onPress={() => this.handleUpdateAmount(product.id, 1)}
                  />
                </SelectPrice>
                <ItemTotalPrice>{product.subtotal}</ItemTotalPrice>
              </ItemPriceBar>
            </CartItem>
          ))}
          <TotalLabel>TOTAL</TotalLabel>
          <TotalPrice>{totalPriceFormatted}</TotalPrice>
          <CheckoutButton>
            <CheckoutButtonText>FINALIZAR PEDIDO</CheckoutButtonText>
          </CheckoutButton>
        </CartContainer>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    priceFormatted: currencyFormatter.format(product.price),
    subtotal: currencyFormatter.format(product.price * product.amount)
  })),
  totalPriceFormatted: currencyFormatter.format(
    state.cart.reduce((total, product) => {
      total += product.price * product.amount
      return total
    }, 0)
  )
})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
