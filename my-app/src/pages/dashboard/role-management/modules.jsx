import { Helmet } from 'react-helmet-async';
import { ModuleView } from 'src/sections/module/view';

// ----------------------------------------------------------------------

export default function ModulesPage() {
  return (
    <>
      <Helmet>
        <title> Module: App</title>
      </Helmet>
      <ModuleView/>
    </>
  );
}
