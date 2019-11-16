import produce from 'immer'

function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        draft.push(action.product)
      })

    default:
      return state
  }
  return []
}

export default cart
