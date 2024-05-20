import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';
import { SubModuleEditView } from 'src/sections/submodule/view';

// ----------------------------------------------------------------------

export default function ModuleEditPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Module Edit</title>
      </Helmet>

      <SubModuleEditView id={`${id}`} />
    </>
  );
}
