import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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

class Home extends Component {
  state = {
    products: []
  }

  async componentDidMount() {
    const { data } = await api.get('/products')
    const dataFormatted = data.map(product => {
      product.priceFormatted = currencyFormatter.format(product.price)
      return product
    })
    this.setState({
      products: [...dataFormatted]
    })
  }

  handleAddProduct(id) {
    const { addProductRequest } = this.props
    addProductRequest(id)
  }

  render() {
    const { amount } = this.props
    const { products } = this.state
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
              <AddButton onPress={() => this.handleAddProduct(item.id)}>
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
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount
    return amount
  }, {})
})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
