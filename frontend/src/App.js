import { Fragment } from 'react';
import './App.css';
import Navbar from './screens/generales/Navbar'
import ItemDetail from './screens/ItemDetail.jsx'
import Home from './screens/Home';
import Footer from './screens/generales/Footer.jsx'
import { Route, Routes } from 'react-router-dom';
import Products from './screens/generales/ProductCard'
import ItemDetail2 from './screens/ItemDetail2';

const Mensaje = (Element)=> <h1>Catálogo de remeras</h1>

function App() {
  return (
   
       <Fragment>
          <Navbar/>
            {/* <Routes>
              <Route path ='/' element={ <Home/>}/>
              <Route path ='/remeras' element={  <Products/>} />
            </Routes> */}
            <ItemDetail2/>
          <Footer/>
        </Fragment>

    

    
  )
}




export default App;
