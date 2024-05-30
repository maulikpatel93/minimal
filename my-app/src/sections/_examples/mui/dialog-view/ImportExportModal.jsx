import React, { forwardRef } from 'react';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from 'src/redux/slices/commonSlice';
import * as Yup from 'yup';
import { useState } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from '@emotion/styled';

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const fileTypes = [
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];

const LoginSchema = Yup.object().shape({
  excell_file: Yup.mixed()
    .required('File is required')
    .test('fileType', 'Unsupported file format', (value) => {
      return value && fileTypes.includes(value.type);
    }),
});

const defaultValues = {
  excell_file: '',
};

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function ImportExportModal() {
  const dispatch = useDispatch();
  const isOpenModal = useSelector((state) => state.common.isOpenModal);
  const modalTitle = useSelector((state) => state.common.IsModalTitle);
  const modalDescription = useSelector((state) => state.common.IsModalDescription);

  const handleCloseDialog = () => {
    dispatch(closeModal());
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = methods;

  const file = watch('excell_file');

  const onSubmit = async (data) => {
    try {
      console.log('File uploaded:', data.excell_file);
      // Handle file upload logic here
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Dialog
        keepMounted
        open={isOpenModal}
        TransitionComponent={Transition}
        onClose={handleCloseDialog}
      >
        <DialogTitle sx={{ mb: 2, pb: 0 }}>{modalTitle}</DialogTitle>
        <DialogContent sx={{ color: 'text.secondary', mb: 3 }}>{modalDescription}</DialogContent>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogContent>
              <Controller
                name="excell_file"
                control={control}
                render={({ field }) => (
                  <Button
                    color="inherit"
                    component="label"
                    variant="outlined"
                    sx={{ width: '100%' }}
                  >
                    Upload file
                    <VisuallyHiddenInput
                      type="file"
                      accept=".xls,.xlsx,.csv"
                      onChange={(e) => {
                        field.onChange(e.target.files[0]);
                      }}
                    />
                  </Button>
                )}
              />
              {file && <p>{file.name}</p>}
              {errors.excell_file && <span>{errors.excell_file.message}</span>}
            </DialogContent>
            <DialogActions>
              <Button variant="outlined" onClick={handleCloseDialog}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" autoFocus>
                Import
              </Button>
            </DialogActions>
          </form>
        </FormProvider>
      </Dialog>
    </div>
  );
}
