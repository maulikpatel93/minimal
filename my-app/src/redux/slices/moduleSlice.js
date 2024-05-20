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

export const ModuleDropdownListApi = createAsyncThunk("module/dropdown/list", async (formValues, thunkAPI) => {
    try {
        const resposedata = await axios.get(API_URL + `afterlogin/module/dropdown/list`)
            .then((response) => HandleResponse(thunkAPI, response, "afterlogin/module/dropdown/list"))
            .catch((error) => HandleError(thunkAPI, error, "afterlogin/module/dropdown/list"));
        return resposedata;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const ModuleUpdateApi = createAsyncThunk("module/update", async (formValues, thunkAPI) => {
    try {
        const resposedata = await axios.put(API_URL + `afterlogin/module/update/${formValues?.id}`, formValues)
            .then((response) => HandleResponse(thunkAPI, response, "afterlogin/module/update"))
            .catch((error) => HandleError(thunkAPI, error, "afterlogin/module/update"));
        return resposedata;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const ModuleCreateApi = createAsyncThunk("module/create", async (formValues, thunkAPI) => {
    try {
        const resposedata = await axios.post(API_URL + `afterlogin/module/create`, formValues)
            .then((response) => HandleResponse(thunkAPI, response, "afterlogin/module/create"))
            .catch((error) => HandleError(thunkAPI, error, "afterlogin/module/create"));
        return resposedata;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const ModuleDetailApi = createAsyncThunk("module/detail", async (formValues, thunkAPI) => {
    try {
        const resposedata = await axios.get(API_URL + `afterlogin/module/detail/${formValues?.id}`, formValues)
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
        const urlParams = new URLSearchParams();
        formValues.forEach(value => {
            urlParams.append('module_id[]', value);
        });

        const response = await axios.delete(API_URL + `afterlogin/module/delete?${urlParams}`)
            .then((response) => HandleResponse(thunkAPI, response, "afterlogin/module/delete"))
            .catch((error) => HandleError(thunkAPI, error, "afterlogin/module/delete"));

        return response;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});


// export const ModuleDeleteApi = createAsyncThunk("module/delete", async (formValues, thunkAPI) => {
//     try {
//         const resposedata = await axios.delete(API_URL + `afterlogin/module/delete`, { data: formValues })
//             .then((response) => HandleResponse(thunkAPI, response, "afterlogin/module/delete"))
//             .catch((error) => HandleError(thunkAPI, error, "afterlogin/module/delete"));
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
    moduleListDropDown:[],
    loading: { list: false, update: false, delete: false, detail: false,create:false,dropdown:false }
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
            //Module dropdown list with value(id) and label(name)
            .addCase(ModuleDropdownListApi.pending, (state) => {
                state.loading.dropdown = true;
            })
            .addCase(ModuleDropdownListApi.fulfilled, (state, action) => {
                state.moduleListDropDown = action.payload;
                state.loading.dropdown = false;
            })
            .addCase(ModuleDropdownListApi.rejected, (state) => {
                state.moduleListDropDown = [];
                state.loading.dropdown = false;

            })
            //ModuleDetail
            .addCase(ModuleDetailApi.pending, (state) => {
                state.loading.detail = true;
            })
            .addCase(ModuleDetailApi.fulfilled, (state, action) => {
                state.detail = action.payload;
                state.loading.detail = false;
            })
            .addCase(ModuleDetailApi.rejected, (state) => {
                state.detail = {};
                state.loading.detail = false;

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
                state.loading.create = false;
            })

            .addCase(ModuleCreateApi.pending, (state, action) => {
                state.loading.create = true;
            })
            .addCase(ModuleCreateApi.fulfilled, (state, action) => {
                state.loading.create = false;
            })
            .addCase(ModuleCreateApi.rejected, (state, action) => {
                state.loading.create = false;
            })

            //ModuleDeleteApi
            .addCase(ModuleDeleteApi.pending, (state, action) => {
                state.loading.delete = true;
            })
            .addCase(ModuleDeleteApi.fulfilled, (state, action) => {
                // if (action.payload) {
                //     const deletedIds = action.payload.flat().map(id => id.toString()); // Flattening the array of arrays and converting IDs to strings
                //     if (deletedIds && state.list.data && state.list.data.length > 0) {
                //         state.list.data = state.list.data.filter(module => !deletedIds.includes(module.id.toString()));
                //     }
                // }
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
