import { useState, useEffect } from 'react'
import { products as mockedProducts } from '../mocks/products.json'

export function useFilters () {
  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState({
    search: '',
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
    ) && (
      !filters.search || p.title.toLowerCase().includes(filters.search.toLowerCase())
    )
  })

  const categories = [...new Set(products.map(p => p.category))]

  return {
    initialProducts: products,
    filteredProduct,
    filters,
    changeFilters,
    categories
  }
}
