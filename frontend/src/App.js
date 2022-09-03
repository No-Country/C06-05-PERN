import { useState,useEffect } from 'react';
import './App.css';
import Navbar from './screens/generales/Navbar'
import SideShoppingCart from './screens/SideShoppingCart.jsx'
import Home from './screens/Home'
import Products from './screens/Products'
import Footer from './screens/generales/Footer'
import ItemDetailContainer from './screens/items/ItemDetailContainer'
import Login from './screens/generales/Login.jsx'
import {Route, Routes} from "react-router-dom";
import UsuariosAction from './redux/actions/UsuariosAction'
import { useDispatch } from 'react-redux'
function App() {

  const [isShowCart, setIsShowCart] = useState(false)
  const dispatch = useDispatch()
  const handleCloseCart = () => {
    setTimeout(()=>{
      setIsShowCart(!isShowCart) 
    }, 500)
  }
  
useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      const token = localStorage.getItem("token")
      dispatch(UsuariosAction.VerificarToken(token))
    }
  }, [])

  return (
    <>
      <Navbar setIsShowCart={setIsShowCart} isShowCart={isShowCart} handleCloseCart={handleCloseCart}/>
    {isShowCart && <SideShoppingCart setIsShowCart={setIsShowCart} isShowCart={isShowCart} handleCloseCart={handleCloseCart}/>}
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/:categoria' element={<Products/>}/>{/* aca va a depender si pusimos remera, pantalones o accesorios */}
      <Route path='/productos' element={<Products/>}/>
      <Route path='/productos/:nombre' element={<ItemDetailContainer/>}/>
      <Route path='/login' element={<Login/>}/>
      {/*<Home/>  PATH */}
      {/* <ItemDetail/> */}
    </Routes>
      <Footer/>
      </>
  )
}




export default App;
