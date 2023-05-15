import { createContext, useContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer'

const CartContext = createContext(null)

export function CartContextProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart, reduceFromCart } = useCartReducer()

  const values = {
    cart: state,
    addToCart,
    reduceFromCart,
    removeFromCart,
    clearCart
  }

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext () {
  const context = useContext(CartContext)

  if (!context) {
    console.error('Error using CartContext')
  }

  return context
}
