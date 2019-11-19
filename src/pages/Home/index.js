import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import currencyFormatter from '../../utils/currencyFormatter'
import * as CartActions from '../../store/modules/cart/actions'
import {
  Container,
  ProductList,
  ProductCard,
  ProductImage,
  Title,
  Price,
  AddButton,
  BtnIcon,
  IconText,
  BtnText
} from './styles'
import api from '../../services/api'

export default function Home() {
  const [products, setProducts] = useState([])
  const amount = useSelector(state =>
    state.cart.reduce((amountObj, product) => {
      amountObj[product.id] = product.amount
      return amountObj
    }, {})
  )

  const dispatch = useDispatch()

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products')
      const dataFormatted = data.map(product => {
        product.priceFormatted = currencyFormatter.format(product.price)
        return product
      })
      setProducts([...dataFormatted])
    }

    loadProducts()
  }, [])

  function handleAddProduct(id) {
    dispatch(CartActions.addProductRequest(id))
  }

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <ProductCard>
            <ProductImage source={{ uri: item.image }} />
            <Title>{item.title}</Title>
            <Price>{item.priceFormatted}</Price>
            <AddButton onPress={() => handleAddProduct(item.id)}>
              <BtnIcon>
                <Icon
                  name="add-shopping-cart"
                  size={24}
                  color="#fff"
                  style={{ marginRight: 5 }}
                />
                <IconText>{amount[item.id] || 0}</IconText>
              </BtnIcon>
              <BtnText>adicionar</BtnText>
            </AddButton>
          </ProductCard>
        )}
      />
    </Container>
  )
}
