import { Helmet } from 'react-helmet-async';
import { SubModuleCreateView } from 'src/sections/submodule/view';

// ----------------------------------------------------------------------

export default function ModuleCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new submodule</title>
      </Helmet>

      <SubModuleCreateView />
    </>
  );
}
