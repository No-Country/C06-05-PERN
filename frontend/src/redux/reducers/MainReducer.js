import { combineReducers } from 'redux';
import ProductosReducer from './ProductosReducer'
import UsuariosReducer from './UsuariosReducer'
import CarritoReducer from './CarritoReducer'
const MainReducer = combineReducers({
    ProductosReducer,
    UsuariosReducer,
    CarritoReducer
})

export default MainReducer;