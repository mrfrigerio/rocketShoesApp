import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
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

export default function Cart() {
  const dispatch = useDispatch()

  function handleUpdateAmount(id, amount) {
    dispatch(CartActions.updateAmountRequest(id, amount))
  }

  function handleRemoveProduct(id) {
    dispatch(CartActions.removeProduct(id))
  }

  const { cart, totalPriceFormatted } = useSelector(state => ({
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
  }))

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
                onPress={() => handleRemoveProduct(product.id)}
              />
            </ItemSpecs>
            <ItemPriceBar>
              <SelectPrice>
                <Icon
                  name="minus-circle-outline"
                  size={20}
                  onPress={() => handleUpdateAmount(product.id, -1)}
                />
                <ItemAmount value={String(product.amount)} editable={false} />
                <Icon
                  name="plus-circle-outline"
                  size={20}
                  onPress={() => handleUpdateAmount(product.id, 1)}
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
