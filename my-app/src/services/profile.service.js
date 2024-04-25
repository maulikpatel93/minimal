import axios from "axios";
import config from "../config.js";

const API_URL = config.API_URL;

const wishliststore = (values) => {
    const action = `/profile/userwishlist/store`;
    const formData = new FormData();
    for (let value in values) {
        formData.append(value, values[value]);
    }
    return axios.post(API_URL + action, formData, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${values.isToken}`
        },
    });
};

const wishlistview = (values) => {
    const action = `/profile/userwishlist/view`;
    const formData = new FormData();
    for (let value in values) {
        formData.append(value, values[value]);
    }
    return axios.post(API_URL + action, formData, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${values.isToken}`
        },
    });
};

const wishlistremove = (values) => {
    const action = `/profile/userwishlist/delete`;
    const formData = new FormData();
    for (let value in values) {
        formData.append(value, values[value]);
    }
    return axios.post(API_URL + action, formData, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${values.isToken}`
        },
    });
};

const addresscreate = (values) => {
    const action = `/profile/address/store`;
    const formData = new FormData();
    for (let value in values) {
        formData.append(value, values[value]);
    }
    return axios.post(API_URL + action, formData, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${values.isToken}`
        },
    });
};

const addressupdate = (values) => {
    const action = `/profile/address/update`;
    const formData = new FormData();
    for (let value in values) {
        formData.append(value, values[value]);
    }
    return axios.post(API_URL + action, formData, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${values.isToken}`
        },
    });
};

const addresslists = (values) => {
    const action = `/profile/address/view`;
    const formData = new FormData();
    for (let value in values) {
        formData.append(value, values[value]);
    }
    return axios.post(API_URL + action, formData, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${values.isToken}`
        },
    });
};

const addressdetail = (values) => {
    const action = `/profile/address/detail`;
    const formData = new FormData();
    for (let value in values) {
        formData.append(value, values[value]);
    }
    return axios.post(API_URL + action, formData, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${values.isToken}`
        },
    });
};

const addressdelete = (values) => {
    const action = `/profile/address/delete`;
    const formData = new FormData();
    for (let value in values) {
        formData.append(value, values[value]);
    }
    return axios.post(API_URL + action, formData, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${values.isToken}`
        },
    });
};

const addressselections = (values) => {
    const action = `/profile/address/active`;
    const formData = new FormData();
    for (let value in values) {
        formData.append(value, values[value]);
    }
    return axios.post(API_URL + action, formData, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${values.isToken}`
        },
    });
};


const countrieslists = (values) => {
    const action = `/countries/options`;

    return axios.get(API_URL + action, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${values?.isToken}`
        },
    });
};

const profileApiController = {
    wishliststore,
    wishlistview,
    wishlistremove,
    countrieslists,
    addresscreate,
    addresslists,
    addressdetail,
    addressupdate,
    addressdelete,
    addressselections
};

export default profileApiController;