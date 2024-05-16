import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import ModuleForm from '../SubModuleForm';

// ----------------------------------------------------------------------

export default function SubModuleCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new module"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Module',
            href: paths.dashboard.roleManagement.module.list,
          },
          { name: 'Create' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <ModuleForm />
    </Container>
  );
}
