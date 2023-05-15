import './style.css'
import { FilterContextProvider } from './context/filterContext'
import { CartContextProvider } from './context/cartContext'
import { ProductsList } from './components/ProductsList'
import { Header } from './components/Header'
import { Cart } from './components/Cart'

export function App () {
  return (
    <div className='app-container'>
      <FilterContextProvider>
        <Header />
        <CartContextProvider>
          <Cart />
          <ProductsList />
        </CartContextProvider>
      </FilterContextProvider>
    </div>
  )
}
