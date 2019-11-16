import React, { Component } from 'react'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
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
    this.setState({
      products: [...data]
    })
  }

  handleAddProduct(product) {
    const { dispatch } = this.props
    dispatch({
      type: '@cart/ADD',
      product
    })
  }

  render() {
    // const { navigation } = this.props
    const { products, cartProductSize } = this.state
    return (
      <Container>
        <ProductList
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <ProductCard>
              <ProductImage source={{ uri: item.image }} />
              <Title>{item.title}</Title>
              <Price>{item.price}</Price>
              <AddButton onPress={() => this.handleAddProduct(item)}>
                <BtnIcon>
                  <Icon
                    name="add-shopping-cart"
                    size={24}
                    color="#fff"
                    style={{ marginRight: 5 }}
                  />
                  <IconText>?</IconText>
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
export default connect()(Home)
