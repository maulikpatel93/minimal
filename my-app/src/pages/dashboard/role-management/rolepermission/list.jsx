import { Helmet } from 'react-helmet-async';
import { RolePermissionListView } from 'src/sections/rolepermission/view';

// ----------------------------------------------------------------------

export default function RolePermissionListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: RolePermission List</title>
      </Helmet>

      <RolePermissionListView />
    </>
  );
}
