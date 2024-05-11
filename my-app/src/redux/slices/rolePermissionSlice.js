import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { endpoints } from 'src/utils/axios';
import HandleResponse from "../HandleResponse";
import HandleError from "../HandleError";
const API_URL = import.meta.env.VITE_HOST_API;

export const rolePermissionApi = createAsyncThunk("rolepermission/role-access", async (formValues, thunkAPI) => {
    try {
      console.log("Api Calls")
      const responsedata = await axios.get(API_URL + `afterlogin/auth/role-access`, formValues)
        .then((response) => HandleResponse(thunkAPI, response, "role-access"))
        .catch((error) => HandleError(thunkAPI, error, "role-access"));
      return responsedata;
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  isRolePermissions: [],
  isApiStatus: {
    rolePermissionApi: "",
  }
};

export const rolePermissionSlice = createSlice({
  name: "rolepermission",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(rolePermissionApi.pending, (state) => {
        state.isApiStatus = { ...state.isApiStatus, rolePermissionApi: "loading" };
      })
      .addCase(rolePermissionApi.fulfilled, (state, action) => {
        state.isRolePermissions = action.payload;
        state.isApiStatus = { ...state.isApiStatus, rolePermissionApi: "succeeded" };
      })
      .addCase(rolePermissionApi.rejected, (state) => {
        state.isRolePermissions = [];
        state.isApiStatus = { ...state.isApiStatus, rolePermissionApi: "failed" };
      });
  },
});

export const {reset} = rolePermissionSlice.actions;
export default rolePermissionSlice.reducer;
