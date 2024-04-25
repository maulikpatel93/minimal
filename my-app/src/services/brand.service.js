import axios from "axios";
import config from "../config.js";

const API_URL = config.API_URL;

const store = (values) => {
    const action = `/brands/store`;
    const formData = new FormData();
    for (let value in values) {
        formData.append(value, values[value]);
    }

    return axios.post(API_URL + action, formData, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${values?.isToken}`
        },
    });
};

const view = (values) => {
    const action = `/brands/view`;
    const Data = {
        page : values && values.page ? values.page  : "",
        keyword : values && values.keyword ? values.keyword  : ""
    }

    return axios.post(API_URL + action,Data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${values?.isToken}`
        },
    });
};

const detail = (values) => {
    const action = `/brands/detail/${values?.id}`;
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
    });

    return axios.post(API_URL + action, formData, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${values?.isToken}`
        },
    });
};

const update = (values) => {
    const action = `/brands/update/${values.id}`;
    const formData = new FormData();
    for (let value in values) {
        formData.append(value, values[value]);
    }

    return axios.put(API_URL + action, formData, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${values?.isToken}`
        },
    });
};

const deletes = (values) => {
    const action = `/brands/delete/${values?.id}`;

    return axios.delete(API_URL + action, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${values?.isToken}`
        },
    });
};

const brandApiController = {
    store,
    view,
    detail,
    update,
    deletes
};

export default brandApiController;