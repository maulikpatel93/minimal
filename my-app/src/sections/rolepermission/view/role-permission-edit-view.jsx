import PropTypes from 'prop-types';

import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { _userList } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useSelector } from 'src/redux/store';
import RolePermissionForm from '../RolePermissionForm';

// ----------------------------------------------------------------------

export default function RolePermissionEditView({ id }) {
  const settings = useSettingsContext();
  const currentModule = useSelector((state) => state.rolepermission.isRolePermissionDetail);
 
  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'RolePermission',
            href: paths.dashboard.roleManagement.rolepermission.list,
          },
          { name: 'Edit' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <RolePermissionForm currentModule={currentModule} />
    </Container>
  );
}

RolePermissionEditView.propTypes = {
  id: PropTypes.string,
};
