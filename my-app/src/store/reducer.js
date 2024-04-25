import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './Slices/cartSlice.js';
import productReducer from './Slices/productSlice.js';
import dropDownReducer from './Slices/dropdownSlice.js';
import authReducer from './Slices/authSlice.js';

const reducer = combineReducers({
  auth: persistReducer(
    {
      key: 'auth',
      storage,
      keyPrefix: 'eventplan-',
      debug: false,
      timeout: 20000,
    },
    authReducer,
  ),
  dropdown: persistReducer(
    {
      key: 'dropdown',
      storage,
      keyPrefix: 'eventplan-',
      debug: false,
      timeout: 20000,
    },
    dropDownReducer,
  ),
  cart: persistReducer(
    {
      key: 'cart',
      storage,
      keyPrefix: 'eventplan-',
      debug: false,
      timeout: 20000,
    },
    cartReducer,
  ),
  product: persistReducer(
    {
      key: 'product',
      storage,
      keyPrefix: 'eventplan-',
      debug: false,
      timeout: 20000,
    },
    productReducer,
  )
});

export default reducer;