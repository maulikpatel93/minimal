import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import { ModuleEditView } from 'src/sections/module/view';

// ----------------------------------------------------------------------

export default function ModuleEditPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Module Edit</title>
      </Helmet>

      <ModuleEditView id={`${id}`} />
    </>
  );
}
