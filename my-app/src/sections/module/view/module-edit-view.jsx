import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import { paths } from 'src/routes/paths';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import ModuleForm from '../ModuleForm';
import { useSelector } from 'src/redux/store';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

export default function ModuleEditView({ id }) {
  const settings = useSettingsContext();
  const { t } = useTranslation();
  const currentModule = useSelector((state) => state.module.detail);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading={t('Edit')}
        links={[
          {
            name: t('Dashboard'),
            href: paths.dashboard.root,
          },
          {
            name: t('Module'),
            href: paths.dashboard.roleManagement.module.list,
          },
          { name: t('Edit') },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <ModuleForm currentModule={currentModule} />
    </Container>
  );
}

ModuleEditView.propTypes = {
  id: PropTypes.string,
};