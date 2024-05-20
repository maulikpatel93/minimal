import { Helmet } from 'react-helmet-async';

import { ModuleCreateView } from 'src/sections/module/view';

// ----------------------------------------------------------------------

export default function ModuleCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new module</title>
      </Helmet>

      <ModuleCreateView />
    </>
  );
}
