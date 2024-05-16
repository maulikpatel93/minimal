import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { endpoints } from 'src/utils/axios';
import HandleResponse from "../HandleResponse";
import HandleError from "../HandleError";
const API_URL = import.meta.env.VITE_HOST_API;

export const rolePermissionApi = createAsyncThunk("rolepermission/role-access", async (formValues, thunkAPI) => {
  try {
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

export const RolePermissionListApi = createAsyncThunk("rolepermission/role-permission", async (formValues, thunkAPI) => {
  try {
    const responsedata = await axios.get(API_URL + `afterlogin/role-permission/list`, formValues)
      .then((response) => HandleResponse(thunkAPI, response, "role-permission"))
      .catch((error) => HandleError(thunkAPI, error, "role-permission"));
    return responsedata;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
}
);

export const RolePermissionDropdownListApi = createAsyncThunk("rolepermission/dropdown/list", async (formValues, thunkAPI) => {
  try {
    const resposedata = await axios.get(API_URL + `afterlogin/role-permission/dropdown/list`)
      .then((response) => HandleResponse(thunkAPI, response, "afterlogin/role-permission/dropdown/list"))
      .catch((error) => HandleError(thunkAPI, error, "afterlogin/role-permission/dropdown/list"));
    return resposedata;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const RolePermissionUpdateApi = createAsyncThunk("rolepermission/update", async (formValues, thunkAPI) => {
  try {
    const resposedata = await axios.put(API_URL + `afterlogin/role-permission/update/${formValues?.id}`, formValues)
      .then((response) => HandleResponse(thunkAPI, response, "afterlogin/role-permission/update"))
      .catch((error) => HandleError(thunkAPI, error, "afterlogin/role-permission/update"));
    return resposedata;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const RolePermissionCreateApi = createAsyncThunk("rolepermission/create", async (formValues, thunkAPI) => {
  try {
    const resposedata = await axios.post(API_URL + `afterlogin/role-permission/create`, formValues)
      .then((response) => HandleResponse(thunkAPI, response, "afterlogin/role-permission/create"))
      .catch((error) => HandleError(thunkAPI, error, "afterlogin/role-permission/create"));
    return resposedata;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const RolePermissionDetailApi = createAsyncThunk("rolepermission/detail", async (formValues, thunkAPI) => {
  try {
    const resposedata = await axios.get(API_URL + `afterlogin/role-permission/detail/${formValues?.id}`, formValues)
      .then((response) => HandleResponse(thunkAPI, response, "afterlogin/role-permission/update"))
      .catch((error) => HandleError(thunkAPI, error, "afterlogin/role-permission/update"));
    return resposedata;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const RolePermissionDeleteApi = createAsyncThunk("rolepermission/delete", async (formValues, thunkAPI) => {
  try {
    const urlParams = new URLSearchParams();
    formValues.forEach(value => {
      urlParams.append('module_id[]', value);
    });

    const response = await axios.delete(API_URL + `afterlogin/role-permission/delete?${urlParams}`)
      .then((response) => HandleResponse(thunkAPI, response, "afterlogin/role-permission/delete"))
      .catch((error) => HandleError(thunkAPI, error, "afterlogin/role-permission/delete"));

    return response;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const initialState = {
  isRolePermissions: [],
  isRolePermissionList: [],
  isRolePermissionDropdownList: [],
  isRolePermissionDetail: "",
  isApiStatus: {
    rolePermissionApi: "",
    RolePermissionListApi: ""
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
      .addCase(RolePermissionDropdownListApi.pending, (state) => {
        state.isApiStatus = { ...state.isApiStatus, RolePermissionDropdownListApi: "loading" };
      })
      .addCase(RolePermissionDropdownListApi.fulfilled, (state, action) => {
        state.isRolePermissionDropdownList = action.payload;
        state.isApiStatus = { ...state.isApiStatus, RolePermissionDropdownListApi: "succeeded" };
      })
      .addCase(RolePermissionDropdownListApi.rejected, (state) => {
        state.isRolePermissionDropdownList = [];
        state.isApiStatus = { ...state.isApiStatus, RolePermissionDropdownListApi: "failed" };
      })
      .addCase(RolePermissionCreateApi.pending, (state) => {
        state.isApiStatus = { ...state.isApiStatus, RolePermissionCreateApi: "loading" };
      })
      .addCase(RolePermissionCreateApi.fulfilled, (state, action) => {
        state.isApiStatus = { ...state.isApiStatus, RolePermissionCreateApi: "succeeded" };
      })
      .addCase(RolePermissionCreateApi.rejected, (state) => {
        state.isApiStatus = { ...state.isApiStatus, RolePermissionCreateApi: "failed" };
      })
      .addCase(RolePermissionUpdateApi.pending, (state) => {
        state.isApiStatus = { ...state.isApiStatus, RolePermissionUpdateApi: "loading" };
      })
      .addCase(RolePermissionUpdateApi.fulfilled, (state, action) => {
        state.isApiStatus = { ...state.isApiStatus, RolePermissionUpdateApi: "succeeded" };
      })
      .addCase(RolePermissionUpdateApi.rejected, (state) => {
        state.isApiStatus = { ...state.isApiStatus, RolePermissionUpdateApi: "failed" };
      })
      .addCase(RolePermissionDetailApi.pending, (state) => {
        state.isApiStatus = { ...state.isApiStatus, RolePermissionDetailApi: "loading" };
      })
      .addCase(RolePermissionDetailApi.fulfilled, (state, action) => {
        state.isRolePermissionDetail = action.payload;
        state.isApiStatus = { ...state.isApiStatus, RolePermissionDetailApi: "succeeded" };
      })
      .addCase(RolePermissionDetailApi.rejected, (state) => {
        state.isRolePermissionDetail = "";
        state.isApiStatus = { ...state.isApiStatus, RolePermissionDetailApi: "failed" };
      })
      .addCase(RolePermissionDeleteApi.pending, (state) => {
        state.isApiStatus = { ...state.isApiStatus, RolePermissionDeleteApi: "loading" };
      })
      .addCase(RolePermissionDeleteApi.fulfilled, (state, action) => {
        state.isApiStatus = { ...state.isApiStatus, RolePermissionDeleteApi: "succeeded" };
      })
      .addCase(RolePermissionDeleteApi.rejected, (state) => {
        state.isApiStatus = { ...state.isApiStatus, RolePermissionDeleteApi: "failed" };
      })
      .addCase(RolePermissionListApi.pending, (state) => {
        state.isApiStatus = { ...state.isApiStatus, RolePermissionListApi: "loading" };
      })
      .addCase(RolePermissionListApi.fulfilled, (state, action) => {
        state.isRolePermissionList = action.payload;
        state.isApiStatus = { ...state.isApiStatus, RolePermissionListApi: "succeeded" };
      })
      .addCase(RolePermissionListApi.rejected, (state) => {
        state.isRolePermissionList = [];
        state.isApiStatus = { ...state.isApiStatus, RolePermissionListApi: "failed" };
      })
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

export const { reset } = rolePermissionSlice.actions;
export default rolePermissionSlice.reducer;
