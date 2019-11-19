import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.ScrollView`
  flex: 1;
  /* justify-content: flex-start; */
  /* align-items: center; */
  background: #191920;
`

export const CartContainer = styled.View`
  background: #fff;
  margin: 20px 15px;
  padding: 20px;
  border-radius: 4px;
  align-items: center;
`

export const CartItem = styled.View`
  width: 100%;
  margin-bottom: 15px;
`

export const ItemSpecs = styled.View`
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
`

export const ItemDescription = styled.View`
  flex: 1;
  margin-left: 10px;
`

export const ItemImage = styled.Image`
  width: 80px;
  height: 80px;
`

export const ItemTitle = styled.Text`
  font-family: Arial;
  font-size: 14px;
  line-height: 18px;
`

export const ItemPrice = styled.Text`
  font-family: Arial;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-top: 5px;
`

export const ItemTotalPrice = styled.Text`
  font-family: Arial;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`

export const ItemPriceBar = styled.View`
  width: 100%;
  padding: 10px 20px;
  background: #eee;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`

export const SelectPrice = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ItemAmount = styled.TextInput`
  background: #fff;
  color: #000;
  height: 26px;
  width: 40px;
  border-radius: 4px;
  text-align: center;
  margin: 0 10px;
`

export const TotalLabel = styled.Text`
  font-family: Arial;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-top: 30px;
  color: #999;
`

export const TotalPrice = styled.Text`
  font-family: Arial;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  margin-top: 10px;
`

export const CheckoutButton = styled(RectButton)`
  align-items: center;
  width: 80%;
  background: #7159c1;
  border-radius: 4px;
  margin-top: 30px;
`

export const CheckoutButtonText = styled.Text`
  font-family: Arial;
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  color: #fff;
  padding: 10px;
`
