import { Fragment, useState } from 'react';
import './App.css';
import Navbar from './screens/generales/Navbar'
import ItemDetail from './screens/ItemDetail.jsx'
import SideShoppingCart from './screens/SideShoppingCart.jsx'
import Home from './screens/Home'
import Products from './screens/Products'
function App() {
  const [isShowCart, setIsShowCart] = useState(false)
  const handleCloseCart = () => {
    setTimeout(()=>{
      setIsShowCart(!isShowCart) 
    }, 500)
  }
  console.log(isShowCart)
  return (
    <Fragment>
      <Navbar setIsShowCart={setIsShowCart} isShowCart={isShowCart} handleCloseCart={handleCloseCart}/>
      {/*<Home/>  PATH */}
      {/* <ItemDetail/> */}
      {isShowCart && <SideShoppingCart setIsShowCart={setIsShowCart} isShowCart={isShowCart} handleCloseCart={handleCloseCart}/>}
      <Products/>
    </Fragment>
  )
}

export default App;
