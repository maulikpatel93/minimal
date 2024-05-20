import PropTypes from 'prop-types';

import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { _userList } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useSelector } from 'src/redux/store';
import SubModuleForm from '../TabForm';

// ----------------------------------------------------------------------

export default function TabEditView({ id }) {
  const settings = useSettingsContext();
  const currentModule = useSelector((state) => state.tab.detail);
 
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
            name: 'SubModule',
            href: paths.dashboard.roleManagement.submodule.list,
          },
          { name: 'Edit' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <SubModuleForm currentModule={currentModule} />
    </Container>
  );
}

TabEditView.propTypes = {
  id: PropTypes.string,
};
