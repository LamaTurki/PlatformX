import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'
import {firestoreReducer } from 'redux-firestore'
//import shelfReducer from './shelf/reducer';
import cartReducer from './cart/reducer';
import totalReducer from './total/reducer';
import filtersReducer from './filters/reducer';
import sortReducer from './sort/reducer';
import authReducer from "./auth";
import apiStatusReducer from "./apiStatus";
import getProduct from './shelf/reducer'

  
export default combineReducers({
  //firebase: firebaseReducer,
  firestore: firestoreReducer,
  shelf: getProduct,
  cart: cartReducer,
  total: totalReducer,
  filters: filtersReducer,
  sort: sortReducer,
  firebaseReducer,
  authReducer,
  apiStatusReducer
});
