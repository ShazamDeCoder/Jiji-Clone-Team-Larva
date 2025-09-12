import React, {useState , useEffect} from 'react'
import Hero from './component/Hero'
import Footer from './component/Footer'
import Products from './component/Products'

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Products searchTerm={searchTerm}/>
      <Footer/>
    </>
  )
}

export default App