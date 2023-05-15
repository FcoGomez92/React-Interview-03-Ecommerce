import { ProductCard } from './ProductCard'
import { useFilterContext } from '../context/filterContext'
import { useCartContext } from '../context/cartContext'

export function ProductsList () {
  const { filteredProduct } = useFilterContext()
  const { cart, addToCart, removeFromCart } = useCartContext()

  return (
    <main>
      {filteredProduct && (
        filteredProduct.length > 0
          ? (
            <>
              <span>{filteredProduct.length} results</span>
              <ul className='products-list'>
                {filteredProduct.map(product => {
                  const productInCartIndex = cart.findIndex(elem => elem.product.id === product.id)
                  const isInCart = productInCartIndex >= 0
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                      addToCart={() => addToCart(product)}
                      removeFromCart={() => removeFromCart(product)}
                      isInCart={isInCart}
                    />
                  )
                })}
              </ul>
            </>)
          : <p>Products not found.</p>)}
    </main>
  )
}
