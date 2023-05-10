// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FilterContextProvider } from './context/filterContext'
import { App } from './app'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <FilterContextProvider>
    <App />
  </FilterContextProvider>
)
