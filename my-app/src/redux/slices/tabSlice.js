import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { endpoints } from 'src/utils/axios';
import HandleResponse from "../HandleResponse";
import HandleError from "../HandleError";
const API_URL = import.meta.env.VITE_HOST_API;

export const TabListApi = createAsyncThunk("tab/list", async (formValues, thunkAPI) => {
    try {
        const resposedata = await axios.get(API_URL + `afterlogin/tab/list`, {
            params: formValues
        })
            .then((response) => HandleResponse(thunkAPI, response, "afterlogin/tab/list"))
            .catch((error) => HandleError(thunkAPI, error, "afterlogin/tab/list"));
        return resposedata;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const TabDropdownListApi = createAsyncThunk("tab/dropdown/list", async (formValues, thunkAPI) => {
    try {
        const resposedata = await axios.get(API_URL + `afterlogin/tab/dropdown/list`)
            .then((response) => HandleResponse(thunkAPI, response, "afterlogin/tab/dropdown/list"))
            .catch((error) => HandleError(thunkAPI, error, "afterlogin/tab/dropdown/list"));
        return resposedata;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const TabUpdateApi = createAsyncThunk("tab/update", async (formValues, thunkAPI) => {
    try {
        const resposedata = await axios.put(API_URL + `afterlogin/tab/update/${formValues?.id}`, formValues)
            .then((response) => HandleResponse(thunkAPI, response, "afterlogin/tab/update"))
            .catch((error) => HandleError(thunkAPI, error, "afterlogin/tab/update"));
        return resposedata;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const TabCreateApi = createAsyncThunk("tab/create", async (formValues, thunkAPI) => {
    try {
        const resposedata = await axios.post(API_URL + `afterlogin/tab/create`, formValues)
            .then((response) => HandleResponse(thunkAPI, response, "afterlogin/tab/create"))
            .catch((error) => HandleError(thunkAPI, error, "afterlogin/tab/create"));
        return resposedata;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const TabDetailApi = createAsyncThunk("tab/detail", async (formValues, thunkAPI) => {
    try {
        const resposedata = await axios.get(API_URL + `afterlogin/tab/detail/${formValues?.id}`, formValues)
            .then((response) => HandleResponse(thunkAPI, response, "afterlogin/tab/update"))
            .catch((error) => HandleError(thunkAPI, error, "afterlogin/tab/update"));
        return resposedata;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const TabDeleteApi = createAsyncThunk("tab/delete", async (formValues, thunkAPI) => {
    try {
        const urlParams = new URLSearchParams();
        formValues.forEach(value => {
            urlParams.append('module_id[]', value);
        });

        const response = await axios.delete(API_URL + `afterlogin/tab/delete?${urlParams}`)
            .then((response) => HandleResponse(thunkAPI, response, "afterlogin/tab/delete"))
            .catch((error) => HandleError(thunkAPI, error, "afterlogin/tab/delete"));

        return response;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});


// export const TabDeleteApi = createAsyncThunk("tab/delete", async (formValues, thunkAPI) => {
//     try {
//         const resposedata = await axios.delete(API_URL + `afterlogin/tab/delete`, { data: formValues })
//             .then((response) => HandleResponse(thunkAPI, response, "afterlogin/tab/delete"))
//             .catch((error) => HandleError(thunkAPI, error, "afterlogin/tab/delete"));
//         return resposedata;
//     } catch (error) {
//         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
//         return thunkAPI.rejectWithValue(message);
//     }
// });


const initialState = {
    request: { list: {}, update: {}, delete: {}, detail: {},create:{} },
    list: "",
    update: "",
    delete: "",
    detail: "",
    tabListDropDown:[],
    loading: { list: false, update: false, delete: false, detail: false,create:false,dropdown:false }
};

export const tabSlice = createSlice({
    name: "tab",
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers(builder) {
        builder
            //TabListApi
            .addCase(TabListApi.pending, (state) => {
                state.loading.list = true
            })
            .addCase(TabListApi.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading.list = false
            })
            .addCase(TabListApi.rejected, (state) => {
                state.list = [];
                state.loading.list = false

            })
            //Module dropdown list with value(id) and label(name)
            .addCase(TabDropdownListApi.pending, (state) => {
                state.loading.dropdown = true;
            })
            .addCase(TabDropdownListApi.fulfilled, (state, action) => {
                state.tabListDropDown = action.payload;
                state.loading.dropdown = false;
            })
            .addCase(TabDropdownListApi.rejected, (state) => {
                state.tabListDropDown = [];
                state.loading.dropdown = false;

            })
            //ModuleDetail
            .addCase(TabDetailApi.pending, (state) => {
                state.loading.detail = true;
            })
            .addCase(TabDetailApi.fulfilled, (state, action) => {
                state.detail = action.payload;
                state.loading.detail = false;
            })
            .addCase(TabDetailApi.rejected, (state) => {
                state.detail = {};
                state.loading.detail = false;

            })
            //TabUpdateApi
            .addCase(TabUpdateApi.pending, (state, action) => {
                state.loading.update = true;
            })
            .addCase(TabUpdateApi.fulfilled, (state, action) => {
                state.update = action.payload;
                state.request.update = action.meta && action.meta.arg
                state.loading.update = false;
            })
            .addCase(TabUpdateApi.rejected, (state, action) => {
                state.loading.create = false;
            })

            .addCase(TabCreateApi.pending, (state, action) => {
                state.loading.create = true;
            })
            .addCase(TabCreateApi.fulfilled, (state, action) => {
                state.loading.create = false;
            })
            .addCase(TabCreateApi.rejected, (state, action) => {
                state.loading.create = false;
            })

            //TabDeleteApi
            .addCase(TabDeleteApi.pending, (state, action) => {
                state.loading.delete = true;
            })
            .addCase(TabDeleteApi.fulfilled, (state, action) => {
                // if (action.payload) {
                //     const deletedIds = action.payload.flat().map(id => id.toString()); // Flattening the array of arrays and converting IDs to strings
                //     if (deletedIds && state.list.data && state.list.data.length > 0) {
                //         state.list.data = state.list.data.filter(module => !deletedIds.includes(module.id.toString()));
                //     }
                // }
                state.loading.delete = false;
            })
            .addCase(TabDeleteApi.rejected, (state, action) => {
                state.delete = ""
                state.loading.delete = false;
            });
    },
});

export const { reset } = tabSlice.actions;
export default tabSlice.reducer;
