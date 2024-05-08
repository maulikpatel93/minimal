import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { endpoints } from 'src/utils/axios';
import HandleResponse from "../HandleResponse";
import HandleError from "../HandleError";
const API_URL = import.meta.env.VITE_HOST_API;

export const passwordChangeApi = createAsyncThunk("profile/password/update", async (formValues, thunkAPI) => {
    try {
      const resposedata = await axios.post(API_URL + `afterlogin/auth/changepassword`, formValues)
        .then((response) => HandleResponse(thunkAPI, response, "changepassword"))
        .catch((error) => HandleError(thunkAPI, error, "changepassword"));
      return resposedata;
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  isApiStatus: {
    passwordChangeApi: "",
  }
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(passwordChangeApi.pending, (state) => {
        state.isApiStatus = { ...state.isApiStatus, passwordChangeApi: "loading" };
      })
      .addCase(passwordChangeApi.fulfilled, (state, action) => {
        state.isApiStatus = { ...state.isApiStatus, passwordChangeApi: "succeeded" };
      })
      .addCase(passwordChangeApi.rejected, (state) => {
        state.isApiStatus = { ...state.isApiStatus, passwordChangeApi: "failed" };
      });
  },
});

export const { reset } = profileSlice.actions;
export default profileSlice.reducer;
