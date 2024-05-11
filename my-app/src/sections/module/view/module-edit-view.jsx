// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
import { useParams } from 'src/routes/hooks/use-params';
// _mock
import { _userList } from 'src/_mock';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';


// ----------------------------------------------------------------------

export default function ModuleEditView() {
  const settings = useSettingsContext();

  const params = useParams();

  const { id } = params;

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
            href: paths.dashboard.user.root,
          },
          { name: currentModule?.name },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

    </Container>
  );
}
