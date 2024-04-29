import * as Yup from 'yup';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import { useRouter, useSearchParams } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';

import { useAuthContext } from 'src/auth/hooks';
import { PATH_AFTER_LOGIN } from 'src/config-global';

import Iconify from 'src/components/iconify';
import FormProvider, {
  RHFAutocomplete,
  RHFTextField,
  RHFUploadAvatar,
} from 'src/components/hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { authRegisterApi } from 'src/redux/slices/authSlice';
import { UserRoleDropDownApi } from 'src/redux/slices/dropdownSlice';
import { fData } from 'src/utils/format-number';
import { alert } from 'src/theme/overrides/components/alert';
import { useTheme } from '@emotion/react';
import { toast } from 'react-toastify';

// ----------------------------------------------------------------------

export default function JwtRegisterView() {
  const { register } = useAuthContext();
  console.log('register: ', register);
  const dispatch = useDispatch();
  const theme = useTheme();
  const router = useRouter();
  const [value, setValue] = useState('');
  const isUserRoleDropdown = useSelector((state) => state.dropdown.isUserRoleDropdown);
  const [errorMsg, setErrorMsg] = useState('');

  const searchParams = useSearchParams();

  const returnTo = searchParams.get('returnTo');

  const password = useBoolean();

  useEffect(() => {
    dispatch(UserRoleDropDownApi());
  }, []);

  const RegisterSchema = Yup.object().shape({
    first_name: Yup.string().required('First name required'),
    last_name: Yup.string().required('Last name required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    // password: Yup.string().required('Password is required'),
    password: Yup.string().required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .max(16, 'Password must not exceed 16 characters')
      .matches(/^(?=.*[A-Z])(?=.*\d).+$/, 'Password must contain an uppercase letter and a number'),
    roles: Yup.object().required('Role is required'),
  });

  // `id`, `first_name`,
  // `last_name`, `profile_image`,
  // `role_id`, `email`,
  // `email_verified_at`, `status`,
  // `email_otp`, `phone_otp`,
  // `password`, `remember_token`,
  // `created_at`, `updated_at

  const defaultValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    roles: '',
    profile_image: null,
    email_verified_at: 1,
    status: 1,
    email_otp: '',
    phone_otp: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await register?.(
        data.first_name,
        data.last_name,
        data.email,
        data.password,
        data.roles,
        data.profile_image,
        data.email_verified_at,
        data.status,
        data.email_otp,
        data.phone_otp
      );

      router.push(returnTo || PATH_AFTER_LOGIN);
      toast.success('Registration successful');
    } catch (error) {
      console.log('error: ', error);
      const message = error && error.message ? error.message : "";
      if(message){
        toast.danger(message);
      }
      setErrorMsg(typeof error === 'string' ? error : error.message);
    }
  });


  const rolesOptions =
    isUserRoleDropdown && isUserRoleDropdown.roles && isUserRoleDropdown.roles.length > 0
      ? isUserRoleDropdown.roles
      : [];

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      // Store the selected file in state
      setValue(file);

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('avatarUrl', newFile, { shouldValidate: true });

        // Update the profile_image value in the form data
        methods.setValue('profile_image', file);
      }
    },
    [setValue, methods]
  );

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
      <Typography variant="h4">Get started absolutely free</Typography>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2"> Already have an account? </Typography>

        <Link href={paths.auth.jwt.login} component={RouterLink} variant="subtitle2">
          Sign in
        </Link>
      </Stack>
    </Stack>
  );

  const renderTerms = (
    <Typography
      component="div"
      sx={{
        mt: 2.5,
        mb:5,
        textAlign: 'center',
        typography: 'caption',
        color: 'text.secondary',
      }}
    >
      {'By signing up, I agree to '}
      <Link underline="always" color="text.primary">
        Terms of Service
      </Link>
      {' and '}
      <Link underline="always" color="text.primary">
        Privacy Policy
      </Link>
      .
    </Typography>
  );

  const renderForm = (
    <Stack spacing={2.5} marginBottom={0}>
      <RHFUploadAvatar
        name="profile_image"
        maxSize={3145728}
        onDrop={handleDrop}
        helperText={
          <Typography
            variant="caption"
            sx={{
              mt: 3,
              mx: 'auto',
              display: 'block',
              textAlign: 'center',
              color: 'text.disabled',
            }}
          >
            Allowed *.jpeg, *.jpg, *.png, *.gif
            <br /> max size of {fData(3145728)}
          </Typography>
        }
      />
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <RHFTextField name="first_name" label="First name" />
        <RHFTextField name="last_name" label="Last name" />
      </Stack>

      <RHFTextField name="email" label="Email address" />

      <RHFTextField
        name="password"
        label="Password"
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
      />
      <RHFAutocomplete
        name="roles"
        options={rolesOptions}
        label="Role"
        helperText="Select a role that best describes the service you are looking for."
      />

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        Create account
      </LoadingButton>
    </Stack>
  );

  return (
    <>
      {renderHead}

      {!!errorMsg && (
        <Alert severity="error" sx={{ m: 3 }}>
          {errorMsg}
        </Alert>
      )}

      <FormProvider methods={methods} onSubmit={onSubmit}>
        {renderForm}
      {renderTerms}
      </FormProvider>

    </>
  );
}
