import produce from 'immer'

function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        draft.push({ ...action.product, amount: 1 })
      })
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draft => {
        const alreadyExistentProductIndex = draft.findIndex(
          p => p.id === action.id
        )
        const currentAmount = draft[alreadyExistentProductIndex].amount
        draft[alreadyExistentProductIndex].amount = Math.max(
          1,
          currentAmount + action.amount
        )
      })

    case '@cart/REMOVE':
      return produce(state, draft => {
        const alreadyExistentProductIndex = draft.findIndex(
          p => p.id === action.id
        )
        if (alreadyExistentProductIndex >= 0) {
          draft.splice(alreadyExistentProductIndex, 1)
        }
      })
    default:
      return state
  }
}

export default cart
