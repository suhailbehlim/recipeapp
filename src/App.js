import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Categories from './Components/Categories'
import Pages from './Pages/Pages'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Categories/>
      <Pages/>
    </BrowserRouter>
     
    </div>
  )
}
export default App