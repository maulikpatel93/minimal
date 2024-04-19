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

export default function Faqs() {
  return (
    <Page title="Faqs">
      <RootStyle>
        Faqs
      </RootStyle>
    </Page>
  );
}
