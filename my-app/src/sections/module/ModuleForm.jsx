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
import { ModuleCreateApi, ModuleUpdateApi } from 'src/redux/slices/moduleSlice';

// ----------------------------------------------------------------------

export default function ModuleForm({ currentModule }) {
  const router = useRouter();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const access = currentModule ? currentModule.access.split(',') : [];
  const dispatch = useDispatch();
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
    console.log('data: ', data);
    try {
      if(data && data.id){
        const action = await dispatch(ModuleUpdateApi(data));
        if (action.meta.requestStatus === 'fulfilled') {
          enqueueSnackbar('Module Updated Successfully', { variant: 'success' });
          // reset();
        } else if (action.meta.requestStatus === 'rejected') {
          const status = action.payload.status;
          const message = action.payload.message;
          const data = action.payload.data;
          if (status === 422 && data) {
            console.log("STATUS422")
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
      }else{
        const action = await dispatch(ModuleCreateApi(data));
        if (action.meta.requestStatus === 'fulfilled') {
          enqueueSnackbar('Module Updated Successfully', { variant: 'success' });
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
      // dispatch(ModuleUpdateApi(data));
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
              <RHFTextField name="title" label={t('title')} />
              <RHFTextField name="icon" label={t('icon')} />
              <RHFTextField name="route" label={t('route')} />
              <RHFSelect name="panel" label={t('panel')}>
                {PANEL_OPTIONS.map((panel) => (
                  <MenuItem key={panel.value} value={panel.value}>
                    {t(panel.label)}
                  </MenuItem>
                ))}
              </RHFSelect>
            </Box>
            <Box sx={{ mt:3 }}>
              <RHFAutocomplete
                name="access"
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
            <Stack alignItems="flex-start" sx={{ mt: 3 }}>
              <RHFSwitch
                name="is_active"
                labelPlacement="start"
                label={
                  <>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {t('is active')}
                    </Typography>
                  </>
                }
                sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
              />
            </Stack>
            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                {!currentModule ? 'Create Module' : 'Save Changes'}
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
