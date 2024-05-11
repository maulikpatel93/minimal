import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isOpenModal: false,
  IsModalTitle:"",
  IsModalDescription:"",
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    reset: () => initialState,
    openModal: (state, action) => {
        console.log('action: ', action.payload);
        state.isOpenModal = true;
        state.IsModalTitle = action.payload.title;
        state.IsModalDescription = action.payload.description;
      },
    closeModal: (state) => {
        state.isOpenModal = false;
        state.IsModalTitle = "";
        state.IsModalDescription = "";
    },
  }
});

export const {reset,openModal,closeModal} = commonSlice.actions;
export default commonSlice.reducer;
