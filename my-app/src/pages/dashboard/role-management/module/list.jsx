import { Helmet } from 'react-helmet-async';

import { ModuleListView } from 'src/sections/module/view';

// ----------------------------------------------------------------------

export default function ModuleListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Module List</title>
      </Helmet>

      <ModuleListView />
    </>
  );
}
