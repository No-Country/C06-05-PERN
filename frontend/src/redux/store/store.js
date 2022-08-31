import { configureStore } from '@reduxjs/toolkit';
import MainReducer from '../reducers/MainReducer'

let store = configureStore( { reducer: MainReducer })

export default store;