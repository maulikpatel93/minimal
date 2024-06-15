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
import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFSwitch, RHFTextField, RHFAutocomplete, RHFSelect } from 'src/components/hook-form';
import { useDispatch, useSelector } from 'src/redux/store';
import { useTranslation } from 'react-i18next';
import { Chip, Divider, MenuItem } from '@mui/material';
import { ModuleCreateApi, ModuleUpdateApi } from 'src/redux/slices/moduleSlice';
import { PANEL_OPTIONS } from 'src/_data/map/_module';

// ----------------------------------------------------------------------

export default function ModuleForm({ currentModule }) {
  const router = useRouter();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const access = currentModule ? currentModule.access.split(',') : [];
  const dispatch = useDispatch();


  const NewModuleSchema = Yup.object().shape({
    title: Yup.string().required(t(`role-management.modules.columns.title.required`)),
    panel: Yup.string().required(t(`role-management.modules.columns.panel.required`)),
    access: Yup.array().min(1, t(`role-management.modules.columns.access.required`)),
    route: Yup.string().trim(),
    icon: Yup.string().trim(),
    is_active: Yup.boolean(),
  });

  const defaultValues = useMemo(
    () => ({
      id: currentModule?.id || '',
      title: currentModule?.title || '',
      panel: currentModule?.panel || '',
      route: currentModule?.route || '',
      icon: currentModule?.icon || '',
      access: currentModule?.access.split(',') || [],
      is_active: currentModule?.is_active === 1 || true,
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
        const action = dispatch(ModuleUpdateApi(data));
        if (action.meta.requestStatus === 'fulfilled') {
          enqueueSnackbar(t(`success-messages.updated`), { variant: 'success' });
          router.push(paths.dashboard.roleManagement.module.list);
          // reset();
        } else if (action.meta.requestStatus === 'rejected') {
          const status = action.payload.status;
          const message = action.payload.message;
          const data = action.payload.data;
          if (status === 422 && data) {
            Object.keys(data).forEach((field) => {
              const errorMessage = data[field].join(', ');
              setError(field, {
                type: 'manual',
                message: errorMessage,
              });
            });
          } else {
            enqueueSnackbar(action.payload || t(`error-messages.error`), { variant: 'error' });
          }
        }
      } else {
        const action = dispatch(ModuleCreateApi(data));
        if (action.meta.requestStatus === 'fulfilled') {
          enqueueSnackbar(t(`success-messages.created`), { variant: 'success' });
          // reset();
        } else if (action.meta.requestStatus === 'rejected') {
          const status = action.payload.status;
          const message = action.payload.message;
          const data = action.payload.data;
          if (status === 422 && data) {
            Object.keys(data).forEach((field) => {
              const errorMessage = data[field].join(', ');
              setError(field, {
                type: 'manual',
                message: errorMessage,
              });
            });
          } else {
            enqueueSnackbar(action.payload || t(`error-messages.error`), { variant: 'error' });
          }
        }
      }
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
              <RHFTextField name="title" label={t(`role-management.modules.columns.title.label`)} />
              <RHFTextField name="icon" label={t(`role-management.modules.columns.icon.label`)} />
              <RHFTextField name="route" label={t(`role-management.modules.columns.route.label`)} />
              <RHFSelect name="panel" label={t(`role-management.modules.columns.panel.label`)}>
                {PANEL_OPTIONS.map((panel) => (
                  <MenuItem key={panel.value} value={panel.value}>
                    {t(`panel-options.${panel.label}`)}
                  </MenuItem>
                ))}
              </RHFSelect>
            </Box>
            <Box sx={{ mt: 3 }}>
              <RHFAutocomplete
                name="access"
                label={t(`role-management.modules.columns.access.label`)}
                placeholder={"+ " + t(`role-management.modules.columns.access.label`)}
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
              <Stack alignItems="flex-start" sx={{ mt: 3 }}>
                <RHFSwitch
                  name="is_active"
                  labelPlacement="start"
                  label={
                    <>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {t(`role-management.modules.columns.is_active.label`)}
                      </Typography>
                    </>
                  }
                  sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
                />
              </Stack>
              <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                  {!currentModule ? t(`role-management.modules.button.create`) : t(`role-management.modules.button.update`)}
                </LoadingButton>
              </Stack>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

ModuleForm.propTypes = {
  currentModule: PropTypes.object,
};
