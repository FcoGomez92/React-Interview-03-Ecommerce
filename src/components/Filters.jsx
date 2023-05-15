import { useState, useEffect } from 'react'
import { useFilterContext } from '../context/filterContext'

export function Filters () {
  const { filters, changeFilters, initialProducts, categories } = useFilterContext()
  const [max, setMax] = useState(2000)

  useEffect(() => {
    if (initialProducts) {
      const newProducts = initialProducts.filter(p => !filters.category || p.category === filters.category)
      const newMax = Math.max(...newProducts.map(p => p.price)) + 50
      setMax(newMax)
      changeFilters(newMax, 'price')
    }
  }, [filters.category, initialProducts])

  return (
    <section className='filters'>
      <label>Search by title:
        <input style={{ padding: '0 5px' }} type='text' placeholder='iPhone X, perfume...' value={filters.search} onChange={(e) => changeFilters(e.target.value, 'search')} />
      </label>
      <label>Category:
        <select value={filters.category} onChange={(e) => { changeFilters(e.target.value, 'category') }}>
          <option defaultValue value=''>Select category</option>
          {categories && categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </label>
      <label>Price:
        <input type='range' min={0} max={max} value={filters.price} onChange={(e) => changeFilters(e.target.value, 'price')} />
        {'$' + filters.price}
      </label>
    </section>
  )
}
