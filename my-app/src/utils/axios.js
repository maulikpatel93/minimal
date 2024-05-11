import axios from 'axios';

import { HOST_API } from 'src/config-global';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: HOST_API, withCredentials: true, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: 'X-XSRF-TOKEN' });

axiosInstance.interceptors.response.use(
  (res) => {
    // console.log('resAXIO: ', res);

    return res
  },
  (error) => {
    return Promise.reject(({
      status:error.response?.status, 
      data:error.response?.data, 
      message:error.response?.message
     }) || 'Something went wrong');
  }
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};

// ----------------------------------------------------------------------

export const endpoints = {
  chat: '/api/chat',
  kanban: '/api/kanban',
  calendar: '/api/calendar',
  auth: {
    me: 'afterlogin/auth/me',
    login: 'beforelogin/guest/login',
    register: 'beforelogin/guest/register',
    update:'afterlogin/auth/update',
  },
  mail: {
    list: '/api/mail/list',
    details: '/api/mail/details',
    labels: '/api/mail/labels',
  },
  post: {
    list: '/api/post/list',
    details: '/api/post/details',
    latest: '/api/post/latest',
    search: '/api/post/search',
  },
  product: {
    list: '/api/product/list',
    details: '/api/product/details',
    search: '/api/product/search',
  },
};
