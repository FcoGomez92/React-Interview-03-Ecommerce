import { AddToCartIcon } from './Icons'

export function ProductCard ({ product }) {
  return (
    <li className='product'>
      <img src={product.thumbnail} alt={product.title + ' image.'} />
      <div className='product-data'>
        <h3>{product.title}</h3>
        <div className='price-cta'>
          <h4>- ${product.price} -</h4>
          <button className='add'>
            <AddToCartIcon />
          </button>
        </div>
      </div>
    </li>
  )
}
