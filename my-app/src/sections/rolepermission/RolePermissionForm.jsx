import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useMemo, useCallback } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { fData } from 'src/utils/format-number';

import { countries } from 'src/assets/data';

import Label from 'src/components/label';
import { useSnackbar } from 'src/components/snackbar';
import FormProvider, {
  RHFSwitch,
  RHFTextField,
  RHFUploadAvatar,
  RHFAutocomplete,
  RHFSelect,
} from 'src/components/hook-form';
import { useDispatch, useSelector } from 'src/redux/store';
import { useTranslation } from 'react-i18next';
import { Chip, Divider, MenuItem } from '@mui/material';
import Iconify from 'src/components/iconify';
import { PANEL_OPTIONS } from 'src/_data/map/_module';
import { SubModuleCreateApi, SubModuleUpdateApi } from 'src/redux/slices/subModuleSlice';
import { position } from 'stylis';

// ----------------------------------------------------------------------

export default function RolePermissionForm({ currentModule }) {
  const router = useRouter();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const access = currentModule ? currentModule.permissions.split(',') : [];
  const dispatch = useDispatch();
  const ModuleDropDownList = useSelector((state) => state.rolepermission.isRolePermissionDropdownList);
  const ModuleDropDownData = ModuleDropDownList && ModuleDropDownList.modules	&& ModuleDropDownList.modules.length > 0 ? ModuleDropDownList.modules : [];
  const RoleDropDownData = ModuleDropDownList && ModuleDropDownList.roles	&& ModuleDropDownList.roles.length > 0 ? ModuleDropDownList.roles : [];
  const TabDropDownData = ModuleDropDownList && ModuleDropDownList.tabs	&& ModuleDropDownList.tabs.length > 0 ? ModuleDropDownList.tabs : [];
  const SubModuleDropDownData = ModuleDropDownList && ModuleDropDownList.submodules	&& ModuleDropDownList.submodules.length > 0 ? ModuleDropDownList.submodules : [];
  const NewModuleSchema = Yup.object().shape({
    // title: Yup.string().required(t('title is required')),
    // panel: Yup.string().required(t('panel is required')),
    // access: Yup.array().min(1, t('Must have at least 1 access')),
    // route: Yup.string().trim(),
    // icon: Yup.string().trim(),
    // is_active: Yup.boolean(),
  });

  const defaultValues = useMemo(
    () => ({
      id: currentModule?.id || '',
      module_id: currentModule?.module_id || '',
      sub_module_id:currentModule?.sub_module_id || '',
      tab_id: currentModule?.tab_id || '',
      role_id: currentModule?.role_id || '',
      module_type: currentModule?.module_type || '',
      permissions: currentModule?.permissions.split(',') || [],
    }),
    [currentModule]
  );

  const methods = useForm({
    resolver: yupResolver(NewModuleSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (data && data.id) {
        const action = await dispatch(SubModuleUpdateApi(data));
        if (action.meta.requestStatus === 'fulfilled') {
          enqueueSnackbar('Module Updated Successfully', { variant: 'success' });
          router.push(paths.dashboard.roleManagement.submodule.list);
          // reset();
        } else if (action.meta.requestStatus === 'rejected') {
          const status = action.payload.status;
          const message = action.payload.message;
          const data = action.payload.data;
          if (status === 422 && data) {
            Object.keys(data).forEach((field) => {
              const errorMessage = data[field].join(', '); // Join the error messages for the field
              setError(field, {
                type: 'manual', // Set the error type as 'manual'
                message: errorMessage, // Provide the error message
              });
            });

            // Open the dialog with the error message
            // dispatch(openModal({ title: 'Validation Error', description: errorMessage }));
          } else {
            enqueueSnackbar(action.payload || 'An error occurred', { variant: 'error' });
          }
        }
      } else {
        const action = await dispatch(SubModuleCreateApi(data));
        if (action.meta.requestStatus === 'fulfilled') {
          enqueueSnackbar('Module Updated Successfully', { variant: 'success' });
          router.push(paths.dashboard.roleManagement.submodule.list);
          // reset();
        } else if (action.meta.requestStatus === 'rejected') {
          const status = action.payload.status;
          const message = action.payload.message;
          const data = action.payload.data;
          if (status === 422 && data) {
            // Construct the error message to display in the dialog
            Object.keys(data).forEach((field) => {
              const errorMessage = data[field].join(', '); // Join the error messages for the field
              setError(field, {
                type: 'manual', // Set the error type as 'manual'
                message: errorMessage, // Provide the error message
              });
            });

            // Open the dialog with the error message
            // dispatch(openModal({ title: 'Validation Error', description: errorMessage }));
          } else {
            enqueueSnackbar(action.payload || 'An error occurred', { variant: 'error' });
          }
        }
      }
      // await new Promise((resolve) => setTimeout(resolve, 500));
      // dispatch(SubModuleUpdateApi(data));
      // reset();
      // enqueueSnackbar(currentModule ? 'Update success!' : 'Create success!');
      // router.push(paths.dashboard.user.list);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid sm={12}>
          <Card sx={{ p: 3 }}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
             <RHFTextField name="module_type" label={t('Module Type')} />
              <RHFSelect name="module_id" label={t('Module')}>
                {ModuleDropDownData.map((module) => (
                  <MenuItem key={module.value} value={module.value}>
                    {t(module.label)}
                  </MenuItem>
                ))}
              </RHFSelect>
              <RHFSelect name="sub_module_id" label={t('Sub Module')}>
                {SubModuleDropDownData.map((module) => (
                  <MenuItem key={module.value} value={module.value}>
                    {t(module.label)}
                  </MenuItem>
                ))}
              </RHFSelect>
              <RHFSelect name="tab_id" label={t('Tab')}>
                {TabDropDownData.map((module) => (
                  <MenuItem key={module.value} value={module.value}>
                    {t(module.label)}
                  </MenuItem>
                ))}
              </RHFSelect>
              <RHFSelect name="role_id" label={t('Role')}>
                {RoleDropDownData.map((module) => (
                  <MenuItem key={module.value} value={module.value}>
                    {t(module.label)}
                  </MenuItem>
                ))}
              </RHFSelect>
              <RHFAutocomplete
                name="permissions"
                label={t('Access')}
                placeholder={t('+ Access')}
                multiple
                freeSolo
                options={access.map((option) => option)}
                getOptionLabel={(option) => option}
                renderOption={(props, option) => (
                  <li {...props} key={option}>
                    {option}
                  </li>
                )}
                renderTags={(selected, getTagProps) =>
                  selected &&
                  selected.length > 0 &&
                  selected.map((option, index) => (
                    <Chip
                      {...getTagProps({ index })}
                      key={option}
                      label={option}
                      size="small"
                      color="info"
                      variant="soft"
                    />
                  ))
                }
              />
              
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                  {!currentModule ? 'Create SubModule' : 'Save Changes'}
                </LoadingButton>
              </Stack>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

RolePermissionForm.propTypes = {
  currentModule: PropTypes.object,
};
