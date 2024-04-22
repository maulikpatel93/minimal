/* eslint-disable perfectionist/sort-named-imports */
/* eslint-disable import/no-unresolved */
/* eslint-disable perfectionist/sort-imports */
import { Box, Container, Link, Stack, Typography } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import Logo from 'src/components/logo';
import MainHeader from './main-header';
import MainFooter from './main-footer';

export default function MainLayout() {
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />
      <Outlet />

      <Box sx={{ flexGrow: 1 }} />

      {isHome ? (
        <MainFooter />
      ) : (
        <Box
          sx={{
            py: 5,
            textAlign: 'center',
            position: 'relative',
            bgcolor: 'background.default',
          }}
        >
          <Container>
            <Logo sx={{ mb: 1, mx: 'auto' }} />

            <Typography variant="caption" component="p">
              © All rights reserved
              <br /> made by &nbsp;
              <Link href="https://minimals.cc/">minimals.cc</Link>
            </Typography>
          </Container>
        </Box>
      )}
    </Stack>
  );
}
