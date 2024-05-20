import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices
import checkoutReducer from './slices/checkoutSlice';
import dropdownReducer from './slices/dropdownSlice';
import authReducer from './slices/authSlice';
import profileReducer from './slices/profileSlice';
import commonReducer from './slices/commonSlice';
import rolePermissionReducer from './slices/rolePermissionSlice';
import moduleReducer from './slices/moduleSlice';
import subModuleReducer from './slices/subModuleSlice';
import tabReducer from './slices/tabSlice';

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
  {
    key: 'profile',
    storage,
    keyPrefix: 'eventmanage-',
  },
  {
    key: 'common',
    storage,
    keyPrefix: 'eventmanage-',
  },
  {
    key: 'rolepermission',
    storage,
    keyPrefix: 'eventmanage-',
  },
  {
    key: 'module',
    storage,
    keyPrefix: 'eventmanage-',
  },
  {
    key: 'submodule',
    storage,
    keyPrefix: 'eventmanage-',
  },
  {
    key: 'tab',
    storage,
    keyPrefix: 'eventmanage-',
  },
  // Add more persist configurations as needed...
];

// Define an array of reducers
const reducers = {
  checkout: checkoutReducer,
  dropdown:dropdownReducer,
  auth:authReducer,
  profile:profileReducer,
  common:commonReducer,
  rolepermission:rolePermissionReducer,
  module:moduleReducer,
  submodule:subModuleReducer,
  tab:tabReducer,
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
