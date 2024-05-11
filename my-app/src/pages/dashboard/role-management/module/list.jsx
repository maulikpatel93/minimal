import { Helmet } from 'react-helmet-async';
// sections
import { ModuleList } from 'src/sections/module/view';

// ----------------------------------------------------------------------

export default function list() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Module List</title>
      </Helmet>

      <ModuleList />
    </>
  );
}
