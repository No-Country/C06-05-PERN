import { combineReducers } from 'redux';
import ProductosReducer from './ProductosReducer'
import UsuariosReducer from './UsuariosReducer'
const MainReducer = combineReducers({
    ProductosReducer,
    UsuariosReducer
})

export default MainReducer;