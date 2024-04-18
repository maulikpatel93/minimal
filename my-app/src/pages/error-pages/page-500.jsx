/* eslint-disable import/no-unresolved */
import { Helmet } from 'react-helmet-async';

import { Page500View } from 'src/sections/error';

// ----------------------------------------------------------------------

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title> 500 Page Not Found </title>
      </Helmet>

      <Page500View />
    </>
  );
}
