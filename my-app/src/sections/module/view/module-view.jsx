import { Container, useTheme } from "@mui/material";
import { useAuthContext } from "src/auth/hooks";
import { useSettingsContext } from "src/components/settings";

export default function ModuleView() {
  const { user } = useAuthContext();

  const theme = useTheme();

  const settings = useSettingsContext();
  const UserName = user && (user.first_name && user.last_name) ? user.first_name +" "+ user.last_name : "";

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      Module
    </Container>
  );
}
