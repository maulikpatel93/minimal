import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { endpoints } from 'src/utils/axios';
import HandleResponse from "../HandleResponse";
import HandleError from "../HandleError";
const API_URL = import.meta.env.VITE_HOST_API;

export const SubModuleListApi = createAsyncThunk("submodule/list", async (formValues, thunkAPI) => {
    try {
        const resposedata = await axios.get(API_URL + `afterlogin/submodule/list`, {
            params: formValues
        })
            .then((response) => HandleResponse(thunkAPI, response, "afterlogin/submodule/list"))
            .catch((error) => HandleError(thunkAPI, error, "afterlogin/submodule/list"));
        return resposedata;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const SubModuleUpdateApi = createAsyncThunk("submodule/update", async (formValues, thunkAPI) => {
    try {
        const resposedata = await axios.put(API_URL + `afterlogin/submodule/update/${formValues?.id}`, formValues)
            .then((response) => HandleResponse(thunkAPI, response, "afterlogin/submodule/update"))
            .catch((error) => HandleError(thunkAPI, error, "afterlogin/submodule/update"));
        return resposedata;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const SubModuleCreateApi = createAsyncThunk("submodule/create", async (formValues, thunkAPI) => {
    try {
        const resposedata = await axios.post(API_URL + `afterlogin/submodule/create`, formValues)
            .then((response) => HandleResponse(thunkAPI, response, "afterlogin/submodule/create"))
            .catch((error) => HandleError(thunkAPI, error, "afterlogin/submodule/create"));
        return resposedata;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const SubModuleDetailApi = createAsyncThunk("submodule/detail", async (formValues, thunkAPI) => {
    try {
        const resposedata = await axios.get(API_URL + `afterlogin/submodule/detail/${formValues?.id}`, formValues)
            .then((response) => HandleResponse(thunkAPI, response, "afterlogin/submodule/update"))
            .catch((error) => HandleError(thunkAPI, error, "afterlogin/submodule/update"));
        return resposedata;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const SubModuleDeleteApi = createAsyncThunk("submodule/delete", async (formValues, thunkAPI) => {
    console.log('formValues: ', formValues);
    try {
        const urlParams = new URLSearchParams();
        formValues.forEach(value => {
            urlParams.append('module_id[]', value);
        });

        const response = await axios.delete(API_URL + `afterlogin/submodule/delete?${urlParams}`)
            .then((response) => HandleResponse(thunkAPI, response, "afterlogin/submodule/delete"))
            .catch((error) => HandleError(thunkAPI, error, "afterlogin/submodule/delete"));

        return response;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});


// export const SubModuleDeleteApi = createAsyncThunk("submodule/delete", async (formValues, thunkAPI) => {
//     console.log('formValues: ', formValues);
//     try {
//         const resposedata = await axios.delete(API_URL + `afterlogin/submodule/delete`, { data: formValues })
//             .then((response) => HandleResponse(thunkAPI, response, "afterlogin/submodule/delete"))
//             .catch((error) => HandleError(thunkAPI, error, "afterlogin/submodule/delete"));
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
    loading: { list: false, update: false, delete: false, detail: false,create:false }
};

export const subModuleSlice = createSlice({
    name: "submodule",
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers(builder) {
        builder
            //SubModuleListApi
            .addCase(SubModuleListApi.pending, (state) => {
                state.loading.list = true
            })
            .addCase(SubModuleListApi.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading.list = false
            })
            .addCase(SubModuleListApi.rejected, (state) => {
                state.list = [];
                state.loading.list = false

            })
            //ModuleDetail
            .addCase(SubModuleDetailApi.pending, (state) => {
                state.loading.detail = true;
            })
            .addCase(SubModuleDetailApi.fulfilled, (state, action) => {
                state.detail = action.payload;
                state.loading.detail = false;
            })
            .addCase(SubModuleDetailApi.rejected, (state) => {
                state.detail = {};
                state.loading.detail = false;

            })

            //SubModuleUpdateApi
            .addCase(SubModuleUpdateApi.pending, (state, action) => {
                state.loading.update = true;
            })
            .addCase(SubModuleUpdateApi.fulfilled, (state, action) => {
                state.update = action.payload;
                state.request.update = action.meta && action.meta.arg
                state.loading.update = false;
            })
            .addCase(SubModuleUpdateApi.rejected, (state, action) => {
                state.loading.create = false;
            })

            .addCase(SubModuleCreateApi.pending, (state, action) => {
                state.loading.create = true;
            })
            .addCase(SubModuleCreateApi.fulfilled, (state, action) => {
                state.loading.create = false;
            })
            .addCase(SubModuleCreateApi.rejected, (state, action) => {
                state.loading.create = false;
            })

            //SubModuleDeleteApi
            .addCase(SubModuleDeleteApi.pending, (state, action) => {
                state.loading.delete = true;
            })
            .addCase(SubModuleDeleteApi.fulfilled, (state, action) => {
                // if (action.payload) {
                //     const deletedIds = action.payload.flat().map(id => id.toString()); // Flattening the array of arrays and converting IDs to strings
                //     console.log('deletedIds: ', JSON.stringify(deletedIds,null,2));
                //     if (deletedIds && state.list.data && state.list.data.length > 0) {
                //         state.list.data = state.list.data.filter(submodule => !deletedIds.includes(submodule.id.toString()));
                //     }
                // }
                state.loading.delete = false;
            })
            .addCase(SubModuleDeleteApi.rejected, (state, action) => {
                state.delete = ""
                state.loading.delete = false;
            });
    },
});

export const { reset } = subModuleSlice.actions;
export default subModuleSlice.reducer;
