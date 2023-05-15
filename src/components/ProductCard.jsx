import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

export function ProductCard ({ product, addToCart, removeFromCart, isInCart }) {
  return (
    <li className='product'>
      <img src={product.thumbnail} alt={product.title + ' image.'} />
      <div className='product-data'>
        <h3>{product.title}</h3>
        <div className='price-cta'>
          <h4>- ${product.price} -</h4>
          <button
            className={isInCart ? 'cart-cta remove' : 'cart-cta'}
            onClick={isInCart ? removeFromCart : addToCart}
          >
            {isInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
          </button>
        </div>
      </div>
    </li>
  )
}
