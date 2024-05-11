import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { endpoints } from 'src/utils/axios';
import HandleResponse from "../HandleResponse";
import HandleError from "../HandleError";
const API_URL = import.meta.env.VITE_HOST_API;

export const moduleListViewApi = createAsyncThunk("module/list", async (formValues, thunkAPI) => {
    try {
        const resposedata = await axios.get(API_URL + `afterlogin/module/list`, formValues)
            .then((response) => HandleResponse(thunkAPI, response, "afterlogin/module/list"))
            .catch((error) => HandleError(thunkAPI, error, "afterlogin/module/list"));
        return resposedata;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
}
);

const initialState = {
    isModuleList: [],
    isApiStatus: {
        moduleListViewApi: "",
    }
};

export const moduleSlice = createSlice({
    name: "module",
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers(builder) {
        builder
            .addCase(moduleListViewApi.pending, (state) => {
                state.isApiStatus = { ...state.isApiStatus, moduleListViewApi: "loading" };
            })
            .addCase(moduleListViewApi.fulfilled, (state, action) => {
                state.isModuleList = action.payload;
                state.isApiStatus = { ...state.isApiStatus, moduleListViewApi: "succeeded" };
            })
            .addCase(moduleListViewApi.rejected, (state) => {
                state.isModuleList = [];
                state.isApiStatus = { ...state.isApiStatus, moduleListViewApi: "failed" };
            });
    },
});

export const { reset } = moduleSlice.actions;
export default moduleSlice.reducer;
