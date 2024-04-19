/* eslint-disable import/no-unresolved */
// @mui
import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

import Page from 'src/components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function About() {
  return (
    <Page title="About us">
      <RootStyle>
        About us

        <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />

      </RootStyle>
    </Page>
  );
}
