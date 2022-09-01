import { Fragment } from 'react';
import './App.css';
import Navbar from './screens/generales/Navbar'
import ItemDetail from './screens/ItemDetail.jsx'
import Home from './screens/Home';
import Footer from './screens/generales/Footer.jsx'
import { Route, Routes } from 'react-router-dom';
import Products from './screens/generales/ProductCard'
import ItemDetail2 from './screens/ItemDetail2';
import Loginx from './screens/generales/Login';



function App() {
  return (
   
       <Fragment>
          <Navbar/>
            
          <Loginx/>

            <Routes>
              <Route path ='/' element={ <Home/>}/>
              <Route path ='/remeras' element={ <ItemDetail2/>} />
            </Routes>
           
          <Footer/>
        </Fragment>

    

    
  )
}




export default App;
