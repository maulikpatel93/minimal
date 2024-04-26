import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApiController from "../../services/auth.service.js";

export const authRegisterApi = createAsyncThunk("user/register", async (formValues, thunkAPI) => {
  try {
    const response = await authApiController.register(formValues, thunkAPI);
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

export const authLoginApi = createAsyncThunk("user/login", async (formValues, thunkAPI) => {
  try {
    const response = await authApiController.login(formValues, thunkAPI);
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
  isLoggedIn: false,
  user: null,
  isToken:"",
  isApiStatus: {
    authRegisterApi: "",
    authLoginApi: ""
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => initialState,
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    tokenSetUp: (state, action) => {
      state.isToken = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(authRegisterApi.pending, (state) => {
        state.isApiStatus = { ...state.isApiStatus, authRegisterApi: "loading" };
      })
      .addCase(authRegisterApi.fulfilled, (state,action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.isToken = action.payload.token;
        state.isApiStatus = { ...state.isApiStatus, authRegisterApi: "succeeded" };
      })
      .addCase(authRegisterApi.rejected, (state) => {
        state.isLoggedIn = false;
        state.user = null;
        state.isToken = "";
        state.isApiStatus = { ...state.isApiStatus, authRegisterApi: "failed" };
      })
      .addCase(authLoginApi.pending, (state) => {
        state.isApiStatus = { ...state.isApiStatus, authLoginApi: "loading" };
      })
      .addCase(authLoginApi.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.isToken = action.payload.token;
        state.isApiStatus = { ...state.isApiStatus, authLoginApi: "succeeded" };
      })
      .addCase(authLoginApi.rejected, (state) => {
        state.isLoggedIn = false;
        state.user = null;
        state.isToken = "";
        state.isApiStatus = { ...state.isApiStatus, authLoginApi: "failed" };
      });
  },
});



export const { reset, loginSuccess, logout,tokenSetUp } = authSlice.actions;
export default authSlice.reducer;
