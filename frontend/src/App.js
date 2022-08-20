import { Fragment } from 'react';
import './App.css';
import Navbar from './screens/generales/Navbar'
import ItemDetail from './screens/ItemDetail.jsx'
function App() {
  return (
    <Fragment>
      <Navbar />
      <ItemDetail/>
    </Fragment>
  )
}

export default App;
