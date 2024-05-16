import PropTypes from 'prop-types';
import { useEffect, useReducer, useCallback, useMemo } from 'react';
// utils
import axios, { endpoints } from 'src/utils/axios';
//
import { AuthContext } from './auth-context';
import { isValidToken, setSession } from './utils';

// ----------------------------------------------------------------------

// NOTE:
// We only build demo at basic level.
// Customer will need to do some extra handling yourself if you want to extend the logic and other features...

// ----------------------------------------------------------------------

const initialState = {
  user: null,
  loading: true,
};

const reducer = (state, action) => {
  if (action.type === 'INITIAL') {
    return {
      loading: false,
      user: action.payload.user,
    };
  }
  if (action.type === 'LOGIN') {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === 'REGISTER') {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === 'USERUPDATE') {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === 'LOGOUT') {
    return {
      ...state,
      user: null,
    };
  }
  return state;
};

// ----------------------------------------------------------------------

const STORAGE_KEY = 'accessToken';

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      // Fetch CSRF token cookie
      await axios.get('/sanctum/csrf-cookie');
      // const csrfToken = response1.data.csrf_token;
      // Extract CSRF token from cookies
      // const cookies = document.cookie.split(';');
      // const csrfCookie = cookies.find(cookie => cookie.trim().startsWith('XSRF-TOKEN='));
      // const csrfToken = csrfCookie ? csrfCookie.split('=')[1] : null;
      const accessToken = sessionStorage.getItem(STORAGE_KEY);

      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);
        
        // const csrfToken = response1.data.csrf_token;
        // axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
      
        const response = await axios.get(endpoints.auth.me);

        const { user } = response.data;

        dispatch({
          type: 'INITIAL',
          payload: {
            user,
          },
        });
      } else {
        dispatch({
          type: 'INITIAL',
          payload: {
            user: null,
          },
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: 'INITIAL',
        payload: {
          user: null,
        },
      });
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = useCallback(async (email, password) => {
    const data = {
      email,
      password,
    };

    const response = await axios.post(endpoints.auth.login, data);

    const { accessToken, user } = response.data;

    setSession(accessToken);

    dispatch({
      type: 'LOGIN',
      payload: {
        user,
      },
    });
  }, []);

  // REGISTER
  const register = useCallback(async ( first_name, last_name, email, password, role_id, profile_image,phone_number,country_code, email_verified_at, status, email_otp, phone_otp ) => {
    const data = {
        first_name,
        last_name,
        email,
        password,
        role_id,
        profile_image,
        phone_number,
        country_code,
        email_verified_at,
        status,
        email_otp,
        phone_otp
    };

    const response = await axios.post(endpoints.auth.register, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const { accessToken, user } = response.data;

    sessionStorage.setItem(STORAGE_KEY, accessToken);

    dispatch({
      type: 'REGISTER',
      payload: {
        user,
      },
    });
  }, []);
  const authToken = sessionStorage.getItem(STORAGE_KEY);
  const userupdate = useCallback(async ( first_name, last_name, email, profile_image,phone_number,country_code) => {
    const data = {
        first_name,
        last_name,
        email,
        profile_image,
        phone_number,
        country_code,
    };

    const response = await axios.post(endpoints.auth.update, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const { user } = response.data;

    dispatch({
      type: 'USERUPDATE',
      payload: {
        user,
      },
    });
  }, []);

  // LOGOUT
  const logout = useCallback(async () => {
    setSession(null);
    dispatch({
      type: 'LOGOUT',
    });
  }, []);

  // ----------------------------------------------------------------------

  const checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated';

  const status = state.loading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      method: 'jwt',
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      //
      login,
      register,
      logout,
      userupdate
    }),
    [login, logout, register,userupdate, state.user, status]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
