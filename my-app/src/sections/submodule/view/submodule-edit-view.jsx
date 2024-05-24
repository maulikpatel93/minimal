import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import { paths } from 'src/routes/paths';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import ModuleForm from '../SubModuleForm';
import { useSelector } from 'src/redux/store';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

export default function SubModuleEditView({ id }) {
  const settings = useSettingsContext();
  const { t } = useTranslation();
  const currentModule = useSelector((state) => state.module.detail);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading={t('role-management.modules.edit_module')}
        links={[
          {
            name: t('role-management.modules.create.dashboard'),
            href: paths.dashboard.root,
          },
          {
            name: t('role-management.modules.create.module'),
            href: paths.dashboard.roleManagement.module.list,
          },
          { name: t('role-management.modules.edit') },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <ModuleForm currentModule={currentModule} />
    </Container>
  );
}

SubModuleEditView.propTypes = {
  id: PropTypes.string,
};