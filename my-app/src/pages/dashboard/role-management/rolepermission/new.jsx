import { Helmet } from 'react-helmet-async';
import { SubModuleCreateView } from 'src/sections/submodule/view';

// ----------------------------------------------------------------------

export default function RolePermissionCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new Rolepermission</title>
      </Helmet>

      <SubModuleCreateView />
    </>
  );
}
