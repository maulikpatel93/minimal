import { useLocation, Outlet } from 'react-router-dom';
// @mui
import { Stack } from '@mui/material';
// components
// import Logo from '../../components/Logo';
//
// import MainFooter from './MainFooter';
// import MainHeader from './MainHeader';

// ----------------------------------------------------------------------

export default function MainLayout() {
    const { pathname } = useLocation();

    return (
        <Stack sx={{ minHeight: 1 }}>
            <Outlet />
        </Stack>
    );
}
