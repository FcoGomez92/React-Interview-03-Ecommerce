export const cartInitialState = (JSON.parse(window.localStorage.getItem('cart'))) || []

export const CART_ACTIONS_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REDUCE_FROM_CART: 'REDUCE_FROM_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

const updateLocalStorageCart = newState => {
  window.localStorage.setItem('cart', JSON.stringify(newState))
}

export const cartReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case CART_ACTIONS_TYPES.ADD_TO_CART: {
      const productInCartIndex = state.findIndex(elem => elem.product.id === payload.id)
      if (productInCartIndex >= 0) {
        const newState = [...state]
        newState[productInCartIndex].qty++
        updateLocalStorageCart(newState)

        return newState
      }
      const newState = [...state, { product: payload, qty: 1 }]
      updateLocalStorageCart(newState)

      return newState
    }

    case CART_ACTIONS_TYPES.REDUCE_FROM_CART: {
      const productInCartIndex = state.findIndex(elem => elem.product.id === payload.id)
      const newState = [...state]
      newState[productInCartIndex].qty--
      updateLocalStorageCart(newState)

      return newState
    }

    case CART_ACTIONS_TYPES.REMOVE_FROM_CART: {
      const newState = state.filter(elem => elem.product.id !== payload.id)
      updateLocalStorageCart(newState)

      return newState
    }

    case CART_ACTIONS_TYPES.CLEAR_CART: {
      updateLocalStorageCart([])

      return []
    }
  }
  return state
}
