import PropTypes from 'prop-types';

import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { _userList } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import ModuleNewEditForm from '../module-new-edit-form';

// ----------------------------------------------------------------------

export default function ModuleEditView({ id }) {
  const settings = useSettingsContext();

  const currentModule = _userList.find((user) => user.id === id);

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
            name: 'Module',
            href: paths.dashboard.roleManagement.module.list,
          },
          { name: currentModule?.name },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <ModuleNewEditForm currentModule={currentModule} />
    </Container>
  );
}

ModuleEditView.propTypes = {
  id: PropTypes.string,
};
