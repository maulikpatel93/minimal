import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';
import TabEditView from 'src/sections/tab/view/tab-edit-view';

// ----------------------------------------------------------------------

export default function TabEditPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: Tab Edit</title>
      </Helmet>

      <TabEditView id={`${id}`} />
    </>
  );
}
