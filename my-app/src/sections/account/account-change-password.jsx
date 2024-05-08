import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { useBoolean } from 'src/hooks/use-boolean';

import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { useDispatch } from 'react-redux';
import { passwordChangeApi } from 'src/redux/slices/profileSlice';
import { Alert } from '@mui/material';
import { useState } from 'react';

// ----------------------------------------------------------------------

export default function AccountChangePassword() {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const password = useBoolean();
  const [alertBox, setAlertBox] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const ChangePassWordSchema = Yup.object().shape({
    // old_password: Yup.string().required('Old Password is required'),
    // password: Yup.string()
    //   .required('New Password is required')
    //   .min(6, 'Password must be at least 6 characters')
    //   .test(
    //     'no-match',
    //     'New password must be different than old password',
    //     (value, { parent }) => value !== parent.old_password
    //   ),
    //   confirm_password: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match'),
  });

  const defaultValues = {
    old_password: '',
    password: '',
    confirm_password: '',
  };

  const methods = useForm({
    resolver: yupResolver(ChangePassWordSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const action = await dispatch(passwordChangeApi(data));
      console.log('action: ', action);
  
      if (action.meta.requestStatus === 'fulfilled') {
        enqueueSnackbar('Password changed successfully', { variant: 'success' });
        reset();
      } else if (action.meta.requestStatus === 'rejected') {
        if (action.payload && action.payload.error) {
          // Iterate over the keys of the error object
          Object.keys(action.payload.error).forEach((key) => {
            // Set error message for each field
            methods.setError(key, action.payload.error[key]);
          });
          // Set alert box to true
          setAlertBox(true);
        } else {
          enqueueSnackbar(action.payload || 'An error occurred', { variant: 'error' });
        }
      }
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <>
      {!!alertBox && (
        <Alert
          severity="error"
          sx={{ m: 3 }}
          onClose={() => {
            setAlertBox(false);
            setErrorMsg('');
          }}
        >
          {errorMsg}
        </Alert>
      )}
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Stack component={Card} spacing={3} sx={{ p: 3 }}>
          <RHFTextField
            name="old_password"
            type={password.value ? 'text' : 'password'}
            label="Old Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={password.onToggle} edge="end">
                    <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <RHFTextField
            name="password"
            label="New Password"
            type={password.value ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={password.onToggle} edge="end">
                    <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            helperText={
              <Stack component="span" direction="row" alignItems="center">
                <Iconify icon="eva:info-fill" width={16} sx={{ mr: 0.5 }} /> Password must be
                minimum 6+
              </Stack>
            }
          />

          <RHFTextField
            name="confirm_password"
            type={password.value ? 'text' : 'password'}
            label="Confirm New Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={password.onToggle} edge="end">
                    <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <LoadingButton
            type="submit"
            variant="contained"
            loading={isSubmitting}
            sx={{ ml: 'auto' }}
          >
            Save Changes
          </LoadingButton>
        </Stack>
      </FormProvider>
    </>
  );
}
