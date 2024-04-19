/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-unresolved */
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

import Page from 'src/components/Page';


// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: '100%',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function Payment() {
  // eslint-disable-next-line no-unused-vars
  const isDesktop = useResponsive('up', 'md');

  return (
    <Page title="Payment">
      <RootStyle>
        <Container>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h3" align="center" paragraph>
              Let's finish powering you up!
            </Typography>
            <Typography align="center" sx={{ color: 'text.secondary' }}>
              Professional plan is right for you.
            </Typography>
          </Box>


        </Container>
      </RootStyle>
    </Page>
  );
}
