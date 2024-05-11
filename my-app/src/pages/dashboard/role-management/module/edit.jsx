import { Helmet } from 'react-helmet-async';
// sections
import ModuleEditView from 'src/sections/module/view/module-edit-view';

// ----------------------------------------------------------------------

export default function ModuleEditPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Module Edit</title>
      </Helmet>

      <ModuleEditView />
    </>
  );
}
