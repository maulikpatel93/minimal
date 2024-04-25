import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartApiController from "../../services/cart.service";
import dropdownApiController from "src/services/dropdown.service";


export const UserRoleDropDownApi = createAsyncThunk("dropdown/userroles", async (formValues, thunkAPI) => {
  try {
    const response = await dropdownApiController.usersroleoption(formValues, thunkAPI);
    if (response && response.data && response.data.status) {
      return response.data;
    } else {
      const errorMessage = response && response.data && response.data.message || "Error occurred";
      throw new Error(errorMessage);
    }
  } catch (error) {
    const errorMessage = error.response && error.response.data && error.response.data.message || error.message || error.toString();
    throw new Error(errorMessage);
  }
});

const initialState = {
  isUserRoleDropdown: [],
  isReduxInitiated: "no",
  isApiStatus: {
    UserRoleDropDownApi: "",
  }
};

export const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    reset: () => initialState,
    ReduxInitiation: (state, action) => {
      state.isReduxInitiated = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(UserRoleDropDownApi.pending, (state) => {
        state.isApiStatus = { ...state.isApiStatus, UserRoleDropDownApi: "loading" };
      })
      .addCase(UserRoleDropDownApi.fulfilled, (state, action) => {
        state.isUserRoleDropdown = action.payload;
        state.isApiStatus = { ...state.isApiStatus, UserRoleDropDownApi: "succeeded" };
      })
      .addCase(UserRoleDropDownApi.rejected, (state) => {
        state.isUserRoleDropdown = [];
        state.isApiStatus = { ...state.isApiStatus, UserRoleDropDownApi: "failed" };
      });
  },
});

export const {
  reset, ReduxInitiation
} = dropdownSlice.actions;
export default dropdownSlice.reducer;
