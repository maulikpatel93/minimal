import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { endpoints } from 'src/utils/axios';
import HandleResponse from "../HandleResponse";
import HandleError from "../HandleError";
const API_URL = import.meta.env.VITE_HOST_API;

export const ModuleListApi = createAsyncThunk("module/list", async (formValues, thunkAPI) => {
    try {
        const resposedata = await axios.get(API_URL + `afterlogin/module/list`, {
            params: formValues
          })
            .then((response) => HandleResponse(thunkAPI, response, "afterlogin/module/list"))
            .catch((error) => HandleError(thunkAPI, error, "afterlogin/module/list"));
        return resposedata;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const ModuleUpdateApi = createAsyncThunk("module/update", async (formValues, thunkAPI) => {
    try {
        const resposedata = await axios.get(API_URL + `afterlogin/module/update`, formValues)
            .then((response) => HandleResponse(thunkAPI, response, "afterlogin/module/update"))
            .catch((error) => HandleError(thunkAPI, error, "afterlogin/module/update"));
        return resposedata;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const ModuleDeleteApi = createAsyncThunk("module/delete", async (formValues, thunkAPI) => {
    try {
        const resposedata = await axios.get(API_URL + `afterlogin/module/delete`, formValues)
            .then((response) => HandleResponse(thunkAPI, response, "afterlogin/module/delete"))
            .catch((error) => HandleError(thunkAPI, error, "afterlogin/module/delete"));
        return resposedata;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

const initialState = {
    request: { list: {}, update: {}, delete: {} },
    list: "",
    update: "",
    delete: "",
    loading: { list: false, update: false, delete: false }
};

export const moduleSlice = createSlice({
    name: "module",
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers(builder) {
        builder
            //ModuleListApi
            .addCase(ModuleListApi.pending, (state) => {
                state.loading.list = true
            })
            .addCase(ModuleListApi.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading.list = false
            })
            .addCase(ModuleListApi.rejected, (state) => {
                state.list = [];
                state.loading.list = false
                
            })

            //ModuleUpdateApi
            .addCase(ModuleUpdateApi.pending, (state, action) => {
                state.loading.update = true;
            })
            .addCase(ModuleUpdateApi.fulfilled, (state, action) => {
                state.update = action.payload;
                state.request.update = action.meta && action.meta.arg
                state.loading.update = false;
            })
            .addCase(ModuleUpdateApi.rejected, (state, action) => {
                state.update = ""
                state.loading.update = false;
            })

            //ModuleDeleteApi
            .addCase(ModuleDeleteApi.pending, (state, action) => {
                state.loading.delete = true;
            })
            .addCase(ModuleDeleteApi.fulfilled, (state, action) => {
                state.delete = action.payload;
                state.request.delete = action.meta && action.meta.arg
                state.loading.delete = false;
            })
            .addCase(ModuleDeleteApi.rejected, (state, action) => {
                state.delete = ""
                state.loading.delete = false;
            });
    },
});

export const { reset } = moduleSlice.actions;
export default moduleSlice.reducer;
