import { Helmet } from 'react-helmet-async';
import TabListView from 'src/sections/tab/view/tab-list-view';

// ----------------------------------------------------------------------

export default function TabListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: SubModule List</title>
      </Helmet>

      <TabListView/>
    </>
  );
}
