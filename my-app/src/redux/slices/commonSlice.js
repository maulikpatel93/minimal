import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isOpenModal: false,
  IsModalTitle:"",
  IsModalDescription:"",
  IsmodalFrom:""
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    reset: () => initialState,
    openModal: (state, action) => {
        state.isOpenModal = true;
        state.IsModalTitle = action.payload.title;
        state.IsModalDescription = action.payload.description;
        state.IsmodalFrom = action.payload.modalFrom;
      },
    closeModal: (state) => {
        state.isOpenModal = false;
        state.IsModalTitle = "";
        state.IsModalDescription = "";
        state.IsmodalFrom = "";
    },
  }
});

export const {reset,openModal,closeModal} = commonSlice.actions;
export default commonSlice.reducer;
