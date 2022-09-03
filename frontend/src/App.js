import { useState,useEffect } from 'react';
import './App.css';
import Navbar from './screens/generales/Navbar'
import Home from './screens/Home'
import Products from './screens/Products'
import Footer from './screens/generales/Footer'
import ItemDetailContainer from './screens/items/ItemDetailContainer'
import Login from './screens/generales/Login.jsx'
import {Route, Routes} from "react-router-dom";
import UsuariosAction from './redux/actions/UsuariosAction'
import { useDispatch } from 'react-redux'
import Snackbar from './screens/generales/Snackbar'
import Cart from './screens/Cart'
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
    {/* <Snackbar/> */}
      <Navbar setIsShowCart={setIsShowCart} isShowCart={isShowCart} handleCloseCart={handleCloseCart}/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/:categoria' element={<Products/>}/>{/* aca va a depender si pusimos remera, pantalones o accesorios */}
      <Route path='/productos' element={<Products/>}/>
      <Route path='/productos/:nombre' element={<ItemDetailContainer/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
      {/*<Home/>  PATH */}
      {/* <ItemDetail/> */}
    </Routes>
      <Footer/>
      </>
  )
}




export default App;
