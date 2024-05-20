import { paramCase } from 'src/utils/change-case';

import { _id, _postTitles } from 'src/_mock/assets';

// ----------------------------------------------------------------------

const MOCK_ID = _id[1];

const MOCK_TITLE = _postTitles[2];

const ROOTS = {
  AUTH: '/auth',
  // AUTH_DEMO: '/auth-demo',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  components: '/components',
  docs: 'https://docs.minimals.cc',
  changelog: 'https://docs.minimals.cc/changelog',
  zoneUI: 'https://mui.com/store/items/zone-landing-page/',
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  freeUI: 'https://mui.com/store/items/minimal-dashboard-free/',
  figma:
    'https://www.figma.com/file/hjxMnGUJCjY7pX8lQbS7kn/%5BPreview%5D-Minimal-Web.v5.4.0?type=design&node-id=0-1&mode=design&t=2fxnS70DuiTLGzND-0',
  product: {
    root: `/product`,
    checkout: `/product/checkout`,
    details: (id) => `/product/${id}`,
    demo: {
      details: `/product/${MOCK_ID}`,
    },
  },
  post: {
    root: `/post`,
    details: (title) => `/post/${paramCase(title)}`,
    demo: {
      details: `/post/${paramCase(MOCK_TITLE)}`,
    },
  },
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/login`,
      register: `${ROOTS.AUTH}/register`,
    },
  },
  
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    roleManagement :{
      root: `${ROOTS.DASHBOARD}/role-management`,
      module: {
        root: `${ROOTS.DASHBOARD}/role-management/module`,
        new: `${ROOTS.DASHBOARD}/role-management/modules/new`,
        list: `${ROOTS.DASHBOARD}/role-management/modules/list`,
        edit: (id) => `${ROOTS.DASHBOARD}/role-management/modules/${id}/edit`,
      },
      submodule: {
        root: `${ROOTS.DASHBOARD}/role-management/submodule`,
        new: `${ROOTS.DASHBOARD}/role-management/submodule/new`,
        list: `${ROOTS.DASHBOARD}/role-management/submodule/list`,
        edit: (id) => `${ROOTS.DASHBOARD}/role-management/submodule/${id}/edit`,
      },
      tab: {
        root: `${ROOTS.DASHBOARD}/role-management/tab`,
        new: `${ROOTS.DASHBOARD}/role-management/tab/new`,
        list: `${ROOTS.DASHBOARD}/role-management/tab/list`,
        edit: (id) => `${ROOTS.DASHBOARD}/role-management/tab/${id}/edit`,
      },
      rolepermission: {
        root: `${ROOTS.DASHBOARD}/role-management/role-permission`,
        new: `${ROOTS.DASHBOARD}/role-management/role-permission/new`,
        list: `${ROOTS.DASHBOARD}/role-management/role-permission/list`,
        edit: (id) => `${ROOTS.DASHBOARD}/role-management/role-permission/${id}/edit`,
      },
    },
    user: {
      root: `${ROOTS.DASHBOARD}/user`,
      new: `${ROOTS.DASHBOARD}/user/new`,
      list: `${ROOTS.DASHBOARD}/user/list`,
      profile: `${ROOTS.DASHBOARD}/user/profile`,
      account: `${ROOTS.DASHBOARD}/user/account`,
      edit: (id) => `${ROOTS.DASHBOARD}/user/${id}/edit`
    },
  },
};
