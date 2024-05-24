import { Helmet } from 'react-helmet-async';
import { SubModuleListView } from 'src/sections/submodule/view';

// ----------------------------------------------------------------------

export default function SubModuleListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: SubModule List</title>
      </Helmet>

      <SubModuleListView />
    </>
  );
}
