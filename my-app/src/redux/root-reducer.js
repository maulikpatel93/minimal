import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices
import checkoutReducer from './slices/checkoutSlice';
import dropdownReducer from './slices/dropdownSlice';
import authReducer from './slices/authSlice';

// // ----------------------------------------------------------------------

const persistConfigs = [
  {
    key: 'checkout',
    storage,
    keyPrefix: 'eventmanage-',
  },
  {
    key: 'dropdown',
    storage,
    keyPrefix: 'eventmanage-',
  },
  {
    key: 'auth',
    storage,
    keyPrefix: 'eventmanage-',
  },
  // Add more persist configurations as needed...
];

// Define an array of reducers
const reducers = {
  checkout: checkoutReducer,
  dropdown:dropdownReducer,
  auth:authReducer
};

// Combine all reducers into a single reducer
const rootReducer = combineReducers(
  Object.keys(reducers).reduce((acc, key, index) => {
    acc[key] = persistReducer(persistConfigs[index], reducers[key]);
    return acc;
  }, {})
);

export default rootReducer;

// const checkoutPersistConfig = {
//   key: 'checkout',
//   storage,
//   keyPrefix: 'redux-',
// };
// const dropdownPersistConfig = {
//   key: 'dropdown',
//   storage,
//   keyPrefix: 'redux-',
// };

// export const rootReducer = combineReducers({
//   checkout: persistReducer(checkoutPersistConfig, checkoutReducer),
// });
