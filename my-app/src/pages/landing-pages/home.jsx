/* eslint-disable import/no-unresolved */
// @mui
import { styled } from '@mui/material/styles';

import Page from 'src/components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  height: '100%',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="The starting point for your next project">
      <RootStyle>
        Home
        <ContentStyle>Home</ContentStyle>
      </RootStyle>
    </Page>
  );
}
