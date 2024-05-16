import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthGuard } from 'src/auth/guard';
import DashboardLayout from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

// OVERVIEW
const IndexPage = lazy(() => import('src/pages/dashboard/app'));

const UserAccountPage = lazy(() => import('src/pages/account/account'));

// MODULE
const ModuleListPage = lazy(() => import('src/pages/dashboard/role-management/module/list'));
const ModuleCreatePage = lazy(() => import('src/pages/dashboard/role-management/module/new'));
const ModuleEditPage = lazy(() => import('src/pages/dashboard/role-management/module/edit'));
//submodule
const SubModuleListPage = lazy(() => import('src/pages/dashboard/role-management/submodule/list'));
const SubModuleCreatePage = lazy(() => import('src/pages/dashboard/role-management/submodule/new'));
const SubModuleEditPage = lazy(() => import('src/pages/dashboard/role-management/submodule/edit'));
//rolepermission
const RolePermissionListPage = lazy(() => import('src/pages/dashboard/role-management/rolepermission/list'));
const RolePermissionCreatePage = lazy(() => import('src/pages/dashboard/role-management/rolepermission/new'));
const RolePermissionEditPage = lazy(() => import('src/pages/dashboard/role-management/rolepermission/edit'));

// // TEST RENDER PAGE BY ROLE
// const PermissionDeniedPage = lazy(() => import('src/pages/dashboard/permission'));
// BLANK PAGE
// const BlankPage = lazy(() => import('src/pages/dashboard/blank'));

// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [
      { element: <IndexPage />, index: true },
      {
        path: 'role-management',
        children: [
          {
            path: 'modules',
            children: [
              { path: 'list', element: <ModuleListPage /> },
              { path: 'new', element: <ModuleCreatePage /> },
              { path: ':id/edit', element: <ModuleEditPage /> },
            ],
          },
          {
            path: 'submodule',
            children: [
              { path: 'list', element: <SubModuleListPage /> },
              { path: 'new', element: <SubModuleCreatePage /> },
              { path: ':id/edit', element: <SubModuleEditPage /> },
            ],
          },
          {
            path: 'role-permission',
            children: [
              { path: 'list', element: <RolePermissionListPage /> },
              { path: 'new', element: <RolePermissionCreatePage /> },
              { path: ':id/edit', element: <RolePermissionEditPage /> },
            ],
          },
        ],
      },
      {
        path: 'user',
        children: [{ path: 'account', element: <UserAccountPage /> }],
      },
      // { path: 'permission', element: <PermissionDeniedPage /> },
      // { path: 'blank', element: <BlankPage /> },
    ],
  },
];
