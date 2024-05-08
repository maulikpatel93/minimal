import * as Yup from 'yup';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { useMockedUser } from 'src/hooks/use-mocked-user';

import { fData } from 'src/utils/format-number';

import { countries } from 'src/assets/data';

import { useSnackbar } from 'src/components/snackbar';
import FormProvider, {
  RHFSwitch,
  RHFTextField,
  RHFUploadAvatar,
  RHFAutocomplete,
} from 'src/components/hook-form';
import { useAuthContext } from 'src/auth/hooks';
import Router from 'src/routes/sections';
import { PATH_AFTER_LOGIN } from 'src/config-global';
import { useSearchParams } from 'react-router-dom';
// ----------------------------------------------------------------------

export default function AccountGeneral() {
  const { enqueueSnackbar } = useSnackbar();
  const { userupdate,user } = useAuthContext();
  const UpdateUserSchema = Yup.object().shape({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    profile_image: Yup.mixed().nullable().required('Avatar is required'),
    phone_number: Yup.string().required('Phone number is required'),
    country_code: Yup.string().required('Country is required'),
    isPublic: Yup.boolean(),
  });

  const defaultValues = {
    first_name: user?.first_name || '',
    last_name: user?.last_name || '',
    email: user?.email || '',
    profile_image: `${user?.storage_url}/${user?.profile_image}` || null,
    phone_number: user?.phone_number || '',
    country_code: '',
    isPublic: user?.isPublic || false,
  };

  const methods = useForm({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues,
  });

  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (user && countries && countries.length > 0) {
      const defaultCountries = countries.find((item) => item.value === user?.country_code);
      if (defaultCountries) {
        setValue('country_code', defaultCountries.label);
      }
    }
  }, [user, countries, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const country_code = data.country_code
      ? countries.find((item) => item.label === data.country_code)
      : null;
      const response = await userupdate?.(
        data.first_name,
        data.last_name,
        data.email,
        data.profile_image,
        data.phone_number,
        country_code?.value // Use country_code value if it exists
      );

      // Router.push(returnTo || PATH_AFTER_LOGIN);
      enqueueSnackbar('User update successful', { variant: 'success' });

    } catch (error) {
      console.error(error);
    }
  });

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('profile_image', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );
  // const handleDrop = useCallback(
  //   (acceptedFiles) => {
  //     const file = acceptedFiles[0];
  //     console.log('file: ', file);

  //     // Store the selected file in state
  //     setValue(file);

  //     const newFile = Object.assign(file, {
  //       preview: URL.createObjectURL(file),
  //     });

  //     if (file) {
  //       setValue('profile_image', file, { shouldValidate: true });

  //       // Update the profile_image value in the form data
  //       methods.setValue('profile_image', file);
  //     }
  //   },
  //   [setValue, methods]
  // );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Card sx={{ pt: 10, pb: 5, px: 3, textAlign: 'center' }}>
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

            {/* <RHFSwitch
              name="isPublic"
              labelPlacement="start"
              label="Public Profile"
              sx={{ mt: 5 }}
            /> */}

            {/* <Button variant="soft" color="error" sx={{ mt: 3 }}>
              Delete User
            </Button> */}
          </Card>
        </Grid>

        <Grid xs={12} md={8}>
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
              <RHFTextField name="first_name" label="First Name" />
              <RHFTextField name="last_name" label="Last Name" />
              <RHFTextField name="email" label="Email Address" />
              <RHFTextField name="phone_number" label="Phone Number" />
              {/* <RHFTextField name="address" label="Address" /> */}

              <RHFAutocomplete
                name="country_code"
                type="country"
                label="Country"
                placeholder="Choose a Country"
                options={countries.map((option) => option.label)}
                getOptionLabel={(option) => option}
              />

              {/* <RHFTextField name="state" label="State/Region" />
              <RHFTextField name="city" label="City" />
              <RHFTextField name="zipCode" label="Zip/Code" /> */}
            </Box>

            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
              {/* <RHFTextField name="about" multiline rows={4} label="About" /> */}

              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                Save Changes
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
