/**
 * MÉTODOS DO SAGA
 * call - Responsável por chamar ,métodos assíncroos e que retornam Promises
 * put - Dispara uma action do Redux
 * all - Serve para cadastrar diversos listeners all([ ...listeners ])
 * takeEvery listener. syntax takeLatest('Action_Name', funcName)
 * takeLast listener
 * take liestener
 * select - responsável por buscar informações dentro do estado
 * */

import { call, put, select, all, takeLatest } from 'redux-saga/effects'
import { Alert } from 'react-native'
import * as CartActions from './actions'
import api from '../../../services/api'

const {
  updateAmountSuccess,
  updateAmountRequest,
  addProductSuccess
} = CartActions

function* addTocart({ id }) {
  const alreadyExistentProduct = yield select(state =>
    state.cart.find(product => product.id === id)
  )

  if (alreadyExistentProduct) {
    yield put(updateAmountRequest(id, 1))
  } else {
    const response = yield call(api.get, `/products/${id}`)
    yield put(addProductSuccess({ ...response.data, amount: 1 }))
  }
}

function* updateAmount({ id, amount }) {
  const alreadyExistentProduct = yield select(state =>
    state.cart.find(p => p.id === id)
  )
  const { data: stock } = yield call(api.get, `/stock/${id}`)

  if (alreadyExistentProduct) {
    if (alreadyExistentProduct.amount + amount > stock.amount) {
      Alert.alert('😭', 'Produto sem estoque suficiente!')
      return
    }
    yield put(updateAmountSuccess(id, amount))
  }
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addTocart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount)
])
