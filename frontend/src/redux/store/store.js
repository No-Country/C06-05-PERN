import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import MainReducer from '../reducers/MainReducer'
import thunk from 'redux-thunk';  /* VIEWER THUNK */

let store = configureStore( { reducer: MainReducer }, applyMiddleware(thunk))

export default store;