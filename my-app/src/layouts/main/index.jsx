/* eslint-disable perfectionist/sort-named-imports */
/* eslint-disable import/no-unresolved */
/* eslint-disable perfectionist/sort-imports */
import { Box, Container, Link, Stack, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Logo from 'src/components/logo';

export default function MainLayout() {
    return (
        <Stack sx={{ minHeight: 1 }}>

            <Outlet />

            <Box sx={{ flexGrow: 1 }} />

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
        </Stack>
    );
}
