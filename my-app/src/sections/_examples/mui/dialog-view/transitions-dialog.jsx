import React, { forwardRef } from 'react';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, openModal } from 'src/redux/slices/commonSlice';

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function TransitionsDialog() {
  const dispatch = useDispatch();
  const isOpenModal = useSelector((state) => state.common.isOpenModal);
  const modalTitle = useSelector((state) => state.common.IsModalTitle);
  const modalDescription = useSelector((state) => state.common.IsModalDescription);

  const handleCloseDialog = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <Dialog
        keepMounted
        open={isOpenModal}
        TransitionComponent={Transition}
        onClose={handleCloseDialog}
      >
        <DialogTitle>{modalTitle}</DialogTitle>

        <DialogContent sx={{ color: 'text.secondary' }}>
          {modalDescription.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" onClick={handleCloseDialog}>
            Disagree
          </Button>
          <Button variant="contained" onClick={handleCloseDialog} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
