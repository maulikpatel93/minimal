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
import { useDispatch, useSelector } from 'react-redux';
import { passwordChangeApi } from 'src/redux/slices/profileSlice';
import { Alert } from '@mui/material';
import { useState } from 'react';
import { openModal } from 'src/redux/slices/commonSlice';
import AlertDialog from '../_examples/mui/dialog-view/alert-dialog';
import TransitionsDialog from '../_examples/mui/dialog-view/transitions-dialog';

// ----------------------------------------------------------------------

export default function AccountChangePassword() {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const password = useBoolean();
  const [alertBox, setAlertBox] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const isOpenModal = useSelector((state) => state.common.isOpenModal);
  const ChangePassWordSchema = Yup.object().shape({
    old_password: Yup.string().required('Old Password is required'),
    password: Yup.string()
    .required('New Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z]).{8,}$/,
      'Password must contain at least 8 characters including one uppercase letter, one lowercase letter, and one number'
    )
    .test(
      'no-match',
      'New password must be different than old password',
      (value, { parent }) => value !== parent.old_password
    ),
      confirm_password: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match'),
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
    setError,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const action = await dispatch(passwordChangeApi(data));
      if (action.meta.requestStatus === 'fulfilled') {
        enqueueSnackbar('Password changed successfully', { variant: 'success' });
        reset();
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
            helperText={""}
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
      {isOpenModal && <TransitionsDialog />}
    </>
  );
}
