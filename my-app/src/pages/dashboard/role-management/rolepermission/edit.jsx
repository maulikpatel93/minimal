import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';
import { RolePermissionEditView } from 'src/sections/rolepermission/view';


// ----------------------------------------------------------------------

export default function RolePermissionEditPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> Dashboard: RolePermission Edit</title>
      </Helmet>

      <RolePermissionEditView id={`${id}`} />
    </>
  );
}
