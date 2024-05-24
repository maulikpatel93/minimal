import Container from '@mui/material/Container';
import { paths } from 'src/routes/paths';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useTranslation } from 'react-i18next';
import SubModuleForm from '../SubModuleForm';

// ----------------------------------------------------------------------

export default function SubModuleCreateView() {
  const settings = useSettingsContext();
  const { t } = useTranslation();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading={t('role-management.modules.create.create_new_module')}
        links={[
          {
            name: t('role-management.modules.create.dashboard'),
            href: paths.dashboard.root,
          },
          {
            name: t('role-management.modules.create.module'),
            href: paths.dashboard.roleManagement.module.list,
          },
          { name: t('role-management.modules.create.create') },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <SubModuleForm />
    </Container>
  );
}