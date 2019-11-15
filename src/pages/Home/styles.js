import styled from 'styled-components/native'
import { TouchableHighlight } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #191920;
`

export const Button = styled(TouchableHighlight)`
  background: #7159c1;
  width: 100px;
  height: 40px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`

export const Action = styled.Text`
  font-family: Arial;
  font-size: 16px;
  color: #fff;
`
