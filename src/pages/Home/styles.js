import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #191920;
`

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  horizontal: true
})`
  margin: 20px 15px 10px;
`

export const ProductCard = styled.View`
  width: 220;
  height: 358;
  background: #fff;
  border: 2px solid #000;
  align-items: center;
  text-align: center;
  padding: 10px;
  margin-right: 15px;
`

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`

export const Title = styled.Text.attrs({
  numberOfLines: 2
})`
  font-family: Arial;
  width: 100%;
  font-size: 16px;
  line-height: 21px;
  align-self: flex-start;
  margin-top: 10px;
`
export const Price = styled.Text`
  font-family: Arial;
  font-size: 21px;
  align-self: flex-start;
  margin-top: 5px;
  font-weight: bold;
`

export const AddButton = styled(RectButton)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  height: 42px;
  background: #7159c1;
  border-radius: 4px;
  margin-top: auto;
`

export const BtnIcon = styled.View`
  flex-direction: row;
  width: 53px;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.15);
`

export const IconText = styled.Text`
  font-family: Arial;
  color: #fff;
`
export const BtnText = styled.Text`
  flex: 1;
  font-family: Arial;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  line-height: 16px;
  color: #fff;
`
