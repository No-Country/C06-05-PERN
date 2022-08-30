import { useState } from 'react';
import './App.css';
import Navbar from './screens/generales/Navbar'
import ItemDetail from './screens/ItemDetail.jsx'
import SideShoppingCart from './screens/SideShoppingCart.jsx'
import Home from './screens/Home'
import Products from './screens/Products'
import Footer from './screens/generales/Footer'
import ItemDetailContainer from './screens/ItemDetailContainer'
import {Route, Routes} from "react-router-dom";
function App() {
  const [isShowCart, setIsShowCart] = useState(false)
  const handleCloseCart = () => {
    setTimeout(()=>{
      setIsShowCart(!isShowCart) 
    }, 500)
  }
  console.log(isShowCart)
  return (
    <>
      <Navbar setIsShowCart={setIsShowCart} isShowCart={isShowCart} handleCloseCart={handleCloseCart}/>
    {isShowCart && <SideShoppingCart setIsShowCart={setIsShowCart} isShowCart={isShowCart} handleCloseCart={handleCloseCart}/>}
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/productos' element={<Products/>}/>
      <Route path='/:categoria' element={<Products/>}/>{/* aca va a depender si pusimos remera, pantalones o accesorios */}
      <Route path='/productos/:nombre' element={<ItemDetailContainer/>}/>
      {/*<Home/>  PATH */}
      {/* <ItemDetail/> */}
    </Routes>
      <Footer/>
      </>
  )
}

export default App;
