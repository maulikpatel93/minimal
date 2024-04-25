import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './Slices/cartSlice.js';
import productReducer from './Slices/productSlice.js';


const reducer = combineReducers({
  cart: persistReducer(
    {
      key: 'cart',
      storage,
      keyPrefix: 'ecommerce-',
      debug: false,
      timeout: 20000,
    },
    cartReducer,
  ),
  product: persistReducer(
    {
      key: 'product',
      storage,
      keyPrefix: 'ecommerce-',
      debug: false,
      timeout: 20000,
    },
    productReducer,
  )
});

export default reducer;