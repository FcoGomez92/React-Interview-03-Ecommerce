import { useCartContext } from '../context/cartContext'
import { CartIcon } from './Icons'

export function Cart () {
  const { cart, addToCart, reduceFromCart, removeFromCart, clearCart } = useCartContext()

  const total = cart.reduce((acc, act, i) => {
    return acc + (act.qty * act.product.price)
  }, 0) ?? 0

  return (
    <>
      <label htmlFor='cart-btn' className='cart-toggle'>
        {cart && cart.length > 0 && (
          <div className='cart-indicator' />
        )}
        <CartIcon />
      </label>
      <input id='cart-btn' type='checkbox' hidden />
      <section className='cart-container'>
        <header className='cart-header'>
          <h2>Cart:</h2>
          {cart && cart.length > 0 && (<button onClick={clearCart}>clear</button>)}
        </header>
        <main className='cart-products-container'>
          {cart && (cart.length > 0
            ? (
              <ul className='cart-products'>
                {cart.map(({ product, qty }) => {
                  return (
                    <li className='cart-item' key={product.id}>
                      <img src={product.thumbnail} alt='' />
                      <strong>{product.title}</strong>
                      <div className='manage-qty'>
                        <button onClick={qty > 1 ? () => reduceFromCart(product) : () => removeFromCart(product)}>-</button>
                        <strong>{qty}</strong>
                        <button onClick={() => addToCart(product)}>+</button>
                      </div>
                    </li>
                  )
                })}
              </ul>)
            : <p>No products in cart yet.</p>)}
        </main>
        <footer className='sub-total'>
          <h3>TOTAL:</h3>
          <span>${total}</span>
        </footer>
      </section>
    </>
  )
}
