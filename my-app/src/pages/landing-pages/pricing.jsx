/* eslint-disable import/no-unresolved */
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Switch, Container, Typography } from '@mui/material';

import Page from 'src/components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: '100%',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function Pricing() {
  return (
    <Page title="Pricing">
      <RootStyle>
        <Container>
          <Typography variant="h3" align="center" paragraph>
            Flexible plans for your
            <br /> community&apos;s size and needs
          </Typography>
          <Typography align="center" sx={{ color: 'text.secondary' }}>
            Choose your plan and make modern online conversation magic
          </Typography>

          <Box sx={{ my: 5 }}>
            <Stack direction="row" alignItems="center" justifyContent="flex-end">
              <Typography variant="overline" sx={{ mr: 1.5 }}>
                MONTHLY
              </Typography>
              <Switch />
              <Typography variant="overline" sx={{ ml: 1.5 }}>
                YEARLY (save 10%)
              </Typography>
            </Stack>
            <Typography variant="caption" align="right" sx={{ color: 'text.secondary', display: 'block' }}>
              * Plus applicable taxes
            </Typography>
          </Box>

        </Container>
      </RootStyle>
    </Page>
  );
}
