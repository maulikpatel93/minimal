import Container from '@mui/material/Container';
import { paths } from 'src/routes/paths';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import ModuleForm from '../ModuleForm';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

export default function ModuleCreateView() {
  const settings = useSettingsContext();
  const { t } = useTranslation();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading={t('role-management.modules.create.title')}
        links={[
          {
            name: t('role-management.modules.dashboard'),
            href: paths.dashboard.root,
          },
          {
            name: t('role-management.modules.title2'),
            href: paths.dashboard.roleManagement.module.list,
          },
          { name: t('role-management.modules.create.label') },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <ModuleForm />
    </Container>
  );
}