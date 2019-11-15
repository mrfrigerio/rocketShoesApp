import styled from 'styled-components/native'
import { BaseButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin: 0 15px;
`

export const Logo = styled.Image`
  width: 185px;
  height: 24px;
`
export const LogoContainer = styled(BaseButton)``

export const Bag = styled(BaseButton)`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const Badge = styled.View`
  background: #7159c1;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  position: relative;
  top: -10px;
  left: -10px;
  justify-content: center;
  align-items: center;
`
export const BadgeText = styled.Text`
  color: #fff;
  font-size: 12px;
  line-height: 14px;
`
