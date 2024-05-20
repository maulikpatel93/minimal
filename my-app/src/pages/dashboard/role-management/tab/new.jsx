import { Helmet } from 'react-helmet-async';
import TabCreateView from 'src/sections/tab/view/tab-create-view';

// ----------------------------------------------------------------------

export default function ModuleCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new submodule</title>
      </Helmet>

      <TabCreateView />
    </>
  );
}
