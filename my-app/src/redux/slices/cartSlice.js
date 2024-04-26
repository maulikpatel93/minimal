import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartApiController from "../../services/cart.service";


// export const couponCodeApplyApi = createAsyncThunk("cart/coupon_code", async (formValues, thunkAPI) => {
//   try {
//     const response = await cartApiController.couponcode(formValues, thunkAPI);
//     if (response && response.data && response.data.status) {
//       return response.data;
//     } else {
//       const errorMessage = response && response.data && response.data.message || "Error occurred";
//       throw new Error(errorMessage);
//     }
//   } catch (error) {
//     const errorMessage = error.response && error.response.data && error.response.data.message || error.message || error.toString();
//     throw new Error(errorMessage);
//   }
// });

const initialState = {
  userInfo: [],
  isReduxInitiated:"no",
  isApiStatus:{
    couponCodeApplyApi:"",
  }
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: () => initialState,
    ReduxInitiation:(state,action)=>{
      state.isReduxInitiated = action.payload;
    }
  },
  extraReducers(builder) {
    // builder
    // .addCase(orderStoreApi.pending, (state) => {
    //   state.isApiStatus = { ...state.isApiStatus, orderStoreApi: "loading" };
    // })
    // .addCase(orderStoreApi.fulfilled, (state, action) => {
    //   state.isApiStatus = { ...state.isApiStatus, orderStoreApi: "succeeded" };
    // })
    // .addCase(orderStoreApi.rejected, (state) => {
    //   state.isApiStatus = { ...state.isApiStatus, orderStoreApi: "failed" };
    // });
  },
});

export const {
  reset,ReduxInitiation
} = cartSlice.actions;
export default cartSlice.reducer;
