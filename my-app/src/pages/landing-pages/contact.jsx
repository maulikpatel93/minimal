/* eslint-disable import/no-unresolved */
// @mui
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

export default function Contact() {
  return (
    <Page title="Contact us">
      <RootStyle>
        Contact us
      </RootStyle>
    </Page>
  );
}
