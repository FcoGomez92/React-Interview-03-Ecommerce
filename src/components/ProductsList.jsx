import { ProductCard } from './ProductCard'
import { useFilterContext } from '../context/filterContext'

export function ProductsList () {
  const { filteredProduct } = useFilterContext()

  return (
    <main>
      {filteredProduct && (
        filteredProduct.length > 0
          ? (
            <>
              <span>{filteredProduct.length} results</span>
              <ul className='products-list'>
                {filteredProduct.map(product => <ProductCard key={product.id} product={product} />)}
              </ul>
            </>)
          : <p>Products not found.</p>)}
    </main>
  )
}
