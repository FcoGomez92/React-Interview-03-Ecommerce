import { createContext, useContext, useState, useEffect } from 'react'
import { products as mockedProducts } from '../mocks/products.json'

const FilterContext = createContext(null)

export const FilterContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState({
    category: '',
    price: Math.max(...mockedProducts.map(p => p.price))
  })

  useEffect(() => {
    setProducts(mockedProducts)
  }, [])

  const changeFilters = (value, filter) => {
    setFilters(prevSt => {
      return {
        ...prevSt,
        [filter]: value
      }
    })
  }

  const filteredProduct = products.filter(p => {
    return p.price <= filters.price && (
      !filters.category || p.category === filters.category
    )
  })

  const categories = [...new Set(products.map(p => p.category))]

  const values = {
    initialProducts: products,
    filteredProduct,
    filters,
    changeFilters,
    categories
  }

  return (
    <FilterContext.Provider value={values}>
      {children}
    </FilterContext.Provider>
  )
}

export function useFilterContext () {
  const context = useContext(FilterContext)

  if (!context) {
    throw new Error('Error with FilterContext')
  }

  return context
}
