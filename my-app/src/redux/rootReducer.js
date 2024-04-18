/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// slices
import dashboardReducer from './slices/dashboard';

// import mailReducer from './slices/mail';

// ----------------------------------------------------------------------

const rootPersistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'redux-',
    whitelist: [],
};

const dashboardPersistConfig = {
    key: 'dashboard',
    storage,
    keyPrefix: 'redux-',
    whitelist: [],
};

const rootReducer = combineReducers({
    //   mail: mailReducer,
    dashboard: persistReducer(dashboardPersistConfig, dashboardReducer),
});

export { rootReducer, rootPersistConfig };
