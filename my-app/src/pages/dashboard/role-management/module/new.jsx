import { Helmet } from 'react-helmet-async';
// sections
import { ModuleCreateView } from 'src/sections/module/view';

// ----------------------------------------------------------------------

export default function ModuleCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new user</title>
      </Helmet>

      <ModuleCreateView />
    </>
  );
}
