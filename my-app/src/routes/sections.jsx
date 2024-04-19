/* eslint-disable perfectionist/sort-imports */
/* eslint-disable import/no-unresolved */
import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import LogoOnlyLayout from 'src/layouts/LogoOnlyLayout';

import DashboardLayout from 'src/layouts/dashboard';
import MainLayout from 'src/layouts/main';
import ComingSoon from 'src/pages/error-pages/coming-soon';
import Maintenance from 'src/pages/error-pages/maintenance';
import About from 'src/pages/landing-pages/about';
import Contact from 'src/pages/landing-pages/contact';
import Faqs from 'src/pages/landing-pages/faqs';
import HomePage from 'src/pages/landing-pages/home';
import Payment from 'src/pages/landing-pages/payment';
import Pricing from 'src/pages/landing-pages/pricing';

// ----------------------------------------------------------------------

export default function Router() {
  const IndexPage = lazy(() => import('src/pages/app'));
  // const BlogPage = lazy(() => import('src/pages/blog'));
  const UserPage = lazy(() => import('src/pages/user'));
  // const LoginPage = lazy(() => import('src/pages/login'));
  const ProductsPage = lazy(() => import('src/pages/products'));
  const Page404 = lazy(() => import('src/pages/error-pages/page-not-found'));
  const Page500 = lazy(() => import('src/pages/error-pages/page-500'));

  const routes = useRoutes([
    // {
    //   path: 'auth',
    //   children: [
    //     {
    //       path: 'login',
    //       element: (
    //         <GuestGuard>
    //           <Login />
    //         </GuestGuard>
    //       ),
    //     },
    //     {
    //       path: 'register',
    //       element: (
    //         <GuestGuard>
    //           <Register />
    //         </GuestGuard>
    //       ),
    //     },
    //     { path: 'login-unprotected', element: <Login /> },
    //     { path: 'register-unprotected', element: <Register /> },
    //     { path: 'reset-password', element: <ResetPassword /> },
    //     { path: 'verify', element: <VerifyCode /> },
    //   ],
    // },
    {
      path: '/dashboard',
      element: (
        // <AuthGuard>
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
        // </AuthGuard>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        // { path: 'blog', element: <BlogPage /> },
      ],
    },
    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'coming-soon', element: <ComingSoon /> },
        { path: 'maintenance', element: <Maintenance /> },
        { path: 'pricing', element: <Pricing /> },
        { path: 'payment', element: <Payment /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        { path: 'about-us', element: <About /> },
        { path: 'contact-us', element: <Contact /> },
        { path: 'faqs', element: <Faqs /> },
      ],
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
