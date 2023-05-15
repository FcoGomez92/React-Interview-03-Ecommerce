import { createContext, useContext } from 'react'
import { useFilters } from '../hooks/useFilters'

const FilterContext = createContext(null)

export const FilterContextProvider = ({ children }) => {
  const {
    initialProducts,
    filteredProduct,
    filters,
    changeFilters,
    categories
  } = useFilters()

  const values = {
    initialProducts,
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
