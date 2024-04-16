import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import MainLayout from '../layout/main';

// const HomePage = lazy(() => import('../pages/home'));


const Loadable = (Component) => (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { pathname } = useLocation();

    return (
        <Suspense fallback={'...loading'}>
            <Component {...props} />
        </Suspense>
    );
};

const HomePage = Loadable(lazy(() => import('../pages/home')));

// ----------------------------------------------------------------------

export default function Router() {

    const routes = useRoutes([
        {
            element: (
                <MainLayout>
                    <Outlet />
                </MainLayout>
            ),
            children: [
                { path: <HomePage />, index: true },
            ],
        }
    ]);

    return routes;
}
