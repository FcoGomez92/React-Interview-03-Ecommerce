import './style.css'
import { ProductsList } from './components/ProductsList'
import { Header } from './components/Header'

export function App () {
  return (
    <div className='app-container'>
      <Header />
      <ProductsList />
    </div>
  )
}
